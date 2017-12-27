Installation Guidelines
-----------------------

Prerequisites
*************
 The following instructions allow you to run a local copy on your machine.

Install tools
*************

If you don’t have any of these tools installed already, you will need to:
•   Download and install git
•   Download and install nodejs https://nodejs.org
•   Request for admin access in 1C portal

Note: Make sure you have Node version >= 4.0 and NPM >= 3

Once you have those, you should install these globals with npm install --global:
•   webpack
•   npm install --global webpack
•   webpack-dev-server
•   npm install --global webpack-dev-server
•   typescript
•   npm install --global typescript@2.0.0
•   npm install npm@latest


Download repository and install dependencies
********************************************

After the repository is downloaded, go inside of the repository directory and install dependencies:

•    cd care-admin
•    npm install

If you get any self-signed certificate error please issue the following commands

•    npm cache clean
•    SET npm_config_strict-ssl=false

This will setup a working copy of care-admin on your local machine.

Running local copy
******************

To run a local copy in development mode, execute:

•    npm start

Go to http://0.0.0.0:3000 or http://localhost:3000 in your browser.

To run the local copy in production mode and build the sources, execute:
***********************************************************************

•    npm run prebuild:prod && npm run build:prod && npm run server:prod

This will clear up your dist folder (where release files are located), generate a release build
and start the built-in server. Now you can copy the sources from the dist folder and use 
it with any backend framework or simply put it under a web server.



