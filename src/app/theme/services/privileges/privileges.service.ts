import { Injectable } from '@angular/core';

@Injectable()
export class Privileges {

    /*
        **  This privillagesobj describe the fieldset level mapping of activities irrespective of user role
        **  
        **  
        **  
        */

    /*
    **  Logic on Implementing fieldset mapping;
    **  Considering the wireframe as source of referance/truth fieldset groupings and privillages on task basis is created
    **  =============================
    **  Registeration.html (contains template for provider Registeration fields, action buttons, empanelment Registeration form, checkers fieldset.)
    **  
    **  Based on the list of filed level and template structures fileds are grouped as follow:-
    **  ======================================================================================
    **  1)  filedset    ==> RegisterationForm (fully enabled on new Registeration)/(fully disabled on checker)
    **  2)  filedset    ==> prvRegReqSrc (isolate alsoKnownas row to make it in editable mode on view of registered provider)
    **  3)  filedset    ==> prvRegEntityType (isolate alsoKnownas field (same row) to make it in editable mode on view of registered provider)
    **  4)  filedset    ==> prvRegGeoDetail (template isolation taginput)
    **  5)  filedset    ==> prvRegEmail (template isolation taginput)
    **  6)  filedset    ==> prvRegEntityDetail (template isolation taginput)/(check and hides/show filedset noValidation new reg)
    **  7)  filedset    ==> prvEmpEntityDetail (template isolation taginput)/(check and hides/show filedset validtaion on empanel req)
    **  8)  filedset    ==> prvRegIndBlacklist (template isolation taginput)/(check hide/show remark field new/registered provider)
    **  9)  fieldset    ==> RegisterationCheckerForm (check hide/show if user role has checker1 privillages)
    **  10) fieldset    ==> RegisteredProviderStatus/RegisteredFormStatus (show this fieldset and in disabled state on view of registered user)[(show additional features buttons based on the user role)]
    **  11) fieldset    ==> EmpanelForm (show only on empanel action button is clicked)
    **  
    **  
    **  1)  formSubmitBtn
    **  2)  AdditionalFeatureBtn
    **  
*/
    public privillagesObj = {
        provider: {
            reister: {
                taskes: {
                    prvRegNew: {
                        Edit: ['RegisterationForm', 'prvRegReqSrc', 'prvRegEntityType', 'prvRegGeoDetail', 'prvRegEmail', 'prvRegEntityDetail', 'prvRegIndBlacklist'],
                        View: [],
                        Show: ['RegisterationForm', 'prvRegReqSrc', 'prvRegEntityType', 'prvRegGeoDetail', 'prvRegEmail', 'prvRegEntityDetail', 'prvRegIndBlacklist', 'formSubmitBtn'],
                        Hide: ['prvEmpEntityDetail', 'RegisterationCheckerForm', 'RegisteredFormStatus', 'EmpanelForm', 'AdditionalFeatureBtn'],
                        Enabled: ['formSubmitBtn'],
                        Disabled: []
                    },
                    prvRegChk: {
                        Edit: ['RegisterationCheckerForm'],
                        View: ['RegisterationForm', 'prvRegReqSrc', 'prvRegEntityType', 'prvRegGeoDetail', 'prvRegEmail', 'prvRegEntityDetail', 'prvRegIndBlacklist'],
                        Show: ['RegisterationForm', 'prvRegReqSrc', 'prvRegEntityType', 'prvRegGeoDetail', 'prvRegEmail', 'prvRegEntityDetail', 'prvRegIndBlacklist', 'RegisterationCheckerForm', 'formSubmitBtn'],
                        Hide: ['prvEmpEntityDetail', 'RegisteredFormStatus', 'EmpanelForm', 'AdditionalFeatureBtn'],
                        Enabled: ['formSubmitBtn'],
                        Disabled: []
                    },
                    prvRegView: {
                        Edit: ['EmpanelForm'],
                        View: ['RegisterationForm', 'prvRegReqSrc', 'prvRegEntityType', 'prvRegGeoDetail', 'prvRegEmail', 'prvRegEntityDetail', 'prvRegIndBlacklist', 'RegisteredFormStatus'],
                        Show: ['RegisterationForm', 'prvRegReqSrc', 'prvRegEntityType', 'prvRegGeoDetail', 'prvRegEmail', 'prvRegEntityDetail', 'prvRegIndBlacklist', 'RegisteredFormStatus', 'AdditionalFeatureBtn'],
                        Hide: ['prvEmpEntityDetail', 'RegisterationCheckerForm', 'EmpanelForm', 'formSubmitBtn'],
                        Enabled: [],
                        Disabled: ['AdditionalFeatureBtn']
                    },
                    /*since this field is depend on (empanel) button action*/
                    prvEmpReg: {
                        Edit: ['RegisterationForm', 'prvRegReqSrc', 'prvRegEntityType', 'prvRegGeoDetail', 'prvRegEmail', 'prvEmpEntityDetail', 'prvRegIndBlacklist', 'EmpanelForm'],
                        View: [],
                        Show: ['RegisterationForm', 'prvRegReqSrc', 'prvRegEntityType', 'prvRegGeoDetail', 'prvRegEmail', 'prvEmpEntityDetail', 'prvRegIndBlacklist', 'EmpanelForm', 'AdditionalFeatureBtn'],
                        Hide: ['prvRegEntityDetail', 'RegisterationCheckerForm', 'RegisteredFormStatus', 'formSubmitBtn'],
                        Enabled: ['AdditionalFeatureBtn'],
                        Disabled: []
                    }
                }
            }
        }
    }

    /*prvRegNew() {
        let fieldset = {
            RegisterationForm: ['Edit'],
            prvRegReqSrc', 'prvRegEntityType', 'prvRegGeoDetail', 'prvRegEmail', 'prvRegEntityDetail', 'prvRegIndBlacklist'],
            Hide: ['prvEmpEntityDetail', 'RegisterationCheckerForm', 'RegisteredFormStatus', 'EmpanelForm']
        }
    }*/
    public taskName = 'prvRegNew';
    getCurrentTask() {
        return this.taskName
    }
    setCurrentTask(task) {
        return this.taskName = task;
    }
    isHidden(fieldsetName) {
        let hidden = false;
        //console.log('taskName == >  '+this.taskName);
        //this.taskName=localStorage.getItem('currentTask');
        //console.log(this.taskName);
        //windown.location
        hidden = this.privillagesObj.provider.reister.taskes[this.taskName].Hide.find(function(item, index, arr) {
            return fieldsetName == item;
        });
        return hidden;
    }
    isEditable(fieldsetName) {
        let editabel = false;
        //console.log('taskName == >  '+this.taskName);
        //this.taskName=localStorage.getItem('currentTask');
        //console.log(this.taskName);
        editabel = this.privillagesObj.provider.reister.taskes[this.taskName].Edit.find(function(item, index, arr) {
            return fieldsetName == item;
        });
        return editabel;
    }
    isEnable(btnGroup) {
        let enabled = false;
        //console.log('taskName == >  '+this.taskName);
        //this.taskName=localStorage.getItem('currentTask');
        //console.log(this.taskName);
        enabled = this.privillagesObj.provider.reister.taskes[this.taskName].Enabled.find(function(item, index, arr) {
            return btnGroup == item;
        });
        return enabled;
    }










    /*
        **  User role level mappings
        **  
        **  
        **  
        **  
        **  
    */


    /*  Nemonic

        Registration Submit (Maker)      -               PRV_MK_REG_SBT
        Registration Submit (Checker)    -               PRV_CK_REG_SBT
        Registration Save (Maker)        -               PRV_MK_REG_SVE
        Empanelment Submit (Maker)       -               PRV_MK_EMPL_SBT
        Empanelment Submit (Checker)     -               PRV_CK_EMPL_SBT
        Empanelment Save (Maker)         -               PRV_MK_EMPL_SVE

    */

    public providerStatus = '';
    public currentProviderId = '';
    public userRole = '';
    public loggedUser = '';
    public currentTaskId = '';
    public rolePrivillage = {
        Maker1: ['prvRegNew', 'prvRegView', 'prvEmpReg'],
        Checker1: ['prvRegView', 'prvRegChk']
    }
    hasAccess(task) {
        return this.rolePrivillage[this.userRole].find(function(item, index, arr) { task == item; });
    }
    setCurrentTaskId(taskId) {
        this.currentTaskId = taskId;
    }
    getCurrentTaskId() {
        return this.currentTaskId;
    }
    setLoggedUser(userName) {
        this.loggedUser = userName;
    }
    getLoggedUser() {
        if (localStorage.getItem("user") != undefined) {
            this.loggedUser = localStorage.getItem("user");
        }
        return this.loggedUser;
    }
    setUserRole(myRole) {
        this.userRole = myRole;
        localStorage.setItem('userRole', myRole);
    }
    getUserRole() {
        if (localStorage.getItem("userRole") != undefined) {
            this.userRole = localStorage.getItem("userRole");
        }
        return this.userRole;
    }
    setProviderId(viewProviderId) {
        this.currentProviderId = viewProviderId;
    }
    isCurrentTask(task) {
        let isCurrentTask = false;
        if (task.constructor === Array) {
            let outer = this;
            isCurrentTask = task.find(function(item, index, arr) { outer.taskName == item; });
        } else {
            isCurrentTask = this.taskName == task;
        }
        return isCurrentTask;
    }
    getProviderStatus() {
        return this.providerStatus;
    }
    setProviderStatus(status) {
        this.providerStatus = status;
    }
    public userLevelTaskPrivilages = {
        Maker1: {
            provider: {
                register: {
                    PRV_REG_Mkr: [],
                    EMP_REQ_Mkr: []
                },
                empanelment: {
                    EMP_UPD_MKR: [[1], []]
                }
            }
        },
        Maker2: {
            provider: {
                empanelment: {
                    EMP_PrvDoc_Mkr: [[2], ['All']],
                    EMP_UPDDoc_Mkr: [[2], ['All']]
                }
            }
        },
        Maker3: {
            provider: {
                empanelment: {
                    EMP_PIS_Mkr: [[1], [1, 2, 3, 4, 5, 7]]
                }
            }
        },
        Maker4: {
            provider: {
                empanelment: {
                    EMP_PIS_Mkr: [[1], [6]],
                    EMP_TRF_Mkr: [[4], ['All']],
                    EMP_PAYDIS_Mkr: [[5], ['All']],
                }
            }
        },
        Maker5: {
            provider: {
                empanelment: {
                    EMP_MOU_Mkr: [[6], ['All']]
                }
            }
        },
        checker1: {
            provider: {
                empanelment: {
                    EMP_PrvDoc_Chk: [[2], ['All']]
                }
            }
        },
        checker2: {
            provider: {
                empanelment: {
                    EMP_PIS_Chk: [[1], [1, 2, 3, 4, 5, 7]]
                }
            }
        },
        checker3: {
            provider: {
                empanelment: {
                    EMP_PIS_Chk: [[1], [6]],
                    EMP_TRF_Chk: [[4], ['All']],
                    EMP_PAYDIS_Chk: [[5], ['All']],
                    EMP_SG_Chk: [[3], ['All']]
                }
            }
        },
        checker4: {
            provider: {
                empanelment: {
                    EMP_MOU_Chk: [[6], ['All']]
                }
            }
        },
        Approver1: {
            provider: {
                empanelment: {
                    EMP_REQAPP_APP: []
                }
            }
        },
        Approver2: {
            provider: {
                empanelment: {
                    EMP_EXEL1_APP: []
                }
            }
        },
        Approver3: {
            provider: {
                empanelment: {
                    EMP_EXEL2_APP: []
                }
            }
        }
    }
    /*public rolesObj:any ={
        Maker1:'actionSet1',
        Maker2:'actionSet2',
        Maker3:'actionSet3',
        Maker4:'actionSet4',
        Maker5:'actionSet5',
        checker1:'actionSet6',
        checker2:'actionSet7',
        checker3:'actionSet8',
        checker4:'actionSet9',
        Approver1:'actionSet10',
        Approver2:'actionSet11',
        Approver3:'actionSet12',

    }

    public actionSet1:any={
        provider:{
            register:{
                PRV_REG_Mkr:[],
                EMP_REQ_Mkr:[]
            },
            empanelment:{
                EMP_UPD_MKR:[[1],[]]
            }
        }
    }
    public actionSet2:any={
        provider:{
            empanelment:{
                EMP_PrvDoc_Mkr:[[2],['All']],
                EMP_UPDDoc_Mkr:[[2],['All']]
            }
        }
    }
    public actionSet3:any={
        provider:{
            empanelment:{
                EMP_PIS_Mkr:[[1],[1,2,3,4,5,7]]
            }
        }
    }
    public actionSet4:any={
        provider:{
            empanelment:{
                EMP_PIS_Mkr:[[1],[6]],
                EMP_TRF_Mkr:[[4],['All']],
                EMP_PAYDIS_Mkr:[[5],['All']],
            }
        }
    }
    public actionSet5:any={
        provider:{
            empanelment:{
                EMP_MOU_Mkr:[[6],['All']]
            }
        }
    }
    public actionSet6:any={
        provider:{
            empanelment:{
                EMP_PrvDoc_Chk:[[2],['All']]
            }
        }
    }
    public actionSet7:any={
        provider:{
            empanelment:{
                EMP_PIS_Chk:[[1],[1,2,3,4,5,7]]
            }
        }
    }
    public actionSet8:any={
        provider:{
            empanelment:{
                EMP_PIS_Chk:[[1],[6]],
                EMP_TRF_Chk:[[4],['All']],
                EMP_PAYDIS_Chk:[[5],['All']],
                EMP_SG_Chk:[[3],['All']]
            }
        }
    }
    public actionSet9:any={
        provider:{
            empanelment:{
                EMP_MOU_Chk:[[6],['All']]
            }
        }
    }
    public actionSet10:any={
        provider:{
            empanelment:{
                EMP_REQAPP_APP:[]
            }
        }
    }
    public actionSet11:any={
        provider:{
            empanelment:{
                EMP_EXEL1_APP:[]
            }
        }
    }
    public actionSet12:any={
        provider:{
            empanelment:{
                EMP_EXEL2_APP:[]
            }
        }
    }*/

}