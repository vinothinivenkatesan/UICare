import './app.loader.ts';
import { Component, ViewEncapsulation, ViewContainerRef, ViewChild } from '@angular/core';
import { GlobalState } from './global.state';
import { BsImageLoaderService, BsThemePreloader, BsThemeSpinner } from './theme/services';
import { layoutPaths } from './theme/theme.constants';
import { BsThemeConfig } from './theme/theme.config';
import { AuthHttp } from 'angular2-jwt';
const { version: appVersion } = require('../../package.json');
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { Router} from '@angular/router';
import { LocalstorageService } from './localstorage.service'


/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styles: [require('normalize.css'), require('./app.scss')],
    template: `    
    <div bsModal #myModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
     <div class="modal-dialog modal-sm">
        <div class="modal-content">
             <div class="modal-header">
                <span class="close" (click)="myModal.hide()">&times;</span>
                <h5>Warning</h5>
            </div>
            <div class="modal-body">
                <p>Session about to Expire in {{this.count}} seconds</p>
            </div>
            <div class="modal-footer">               
             <button type="button" class="btn btn-default" (click)="this.logoutsession()">Logout</button>
                <button type="button" class="btn btn-primary" (click)="myModal.hide()">Continue</button>               
            </div>
        </div>
    </div>
    </div>

    <main [ngClass]="{'menu-collapsed': isMenuCollapsed}" bsThemeRun>
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {

    private appVersion;

    isMenuCollapsed: boolean = false;
    thing: string;
    count: any;
    @ViewChild('myModal') public myModal: ModalDirective;

    public showMyModal(countdown: any) {
        this.count = countdown
        this.myModal.show();
    }

    public closeMyModal() {
        this.myModal.hide();
    }
    public logoutsession() {
        this.myModal.hide();
        localStorage.clear();
        this.router.navigate(['login']);
    }

    idleState = 'Not started.';
    timedOut = false;
    lastPing?: Date = null;

    constructor(private _state: GlobalState,
        private _imageLoader: BsImageLoaderService,
        private _spinner: BsThemeSpinner,
        private _config: BsThemeConfig,
        private viewContainerRef: ViewContainerRef,
        public authHttp: AuthHttp,
        public router: Router,
        private localstorageService: LocalstorageService,
        private idle: Idle, private keepalive: Keepalive) {
        
     
 
       
        this.appVersion = appVersion;
        //this._loadImages();

        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });


        // sets an idle timeout of 5 seconds, for testing purposes.
        idle.setIdle(1000);
        // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
        idle.setTimeout(10);
        // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
        idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

        idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
        idle.onTimeout.subscribe(() => {
            this.closeMyModal();
            this.timedOut = true;
            localStorage.clear();
            this.router.navigate(['login']);
        });
        idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
        //idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will time out in ' + countdown + ' seconds!');

        idle.onTimeoutWarning.subscribe((countdown) => {
            if (this.localstorageService.getValue('id_token')) {
                console.log('Session');
                this.showMyModal(countdown);
            } else {
                console.log('No session');
            }

        });

        // sets the ping interval to 15 seconds
        keepalive.interval(1000);

        keepalive.onPing.subscribe(() => this.lastPing = new Date());

        this.reset();
    }

    private reset() {
        this.idle.watch();
        this.idleState = 'Started.';
        this.timedOut = false;
    }


    public ngAfterViewInit(): void {
        // hide spinner once all loaders are completed
        BsThemePreloader.load().then((values) => {
            this._spinner.hide();
            console.log("App Version " + this.appVersion);
        });

    }
    
    
/* Gets Current URL and display it in title */    
//    public ngOnInit(){
//        debugger;
//         this.router.events
//      .filter(event => event instanceof NavigationEnd)
//      .map(() => this.activatedRoute)
//      .map(route => {
//        while (route.firstChild) route = route.firstChild;
//        console.log(route);
//        console.log(event);
//        return route;
//      })
//      .filter(route => route.outlet === 'primary')
//      .mergeMap(route => route.data)     
//      .subscribe((event) => this.titleService.setTitle(event['title']));
//  }


    //    private _loadImages(): void {
    //        // register some loaders
    //        BsThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'));
    //    }


}
