##nodejs

* javaScript without a browser
* same engine running google chrome
* you can use js for both your front end and your back end code
* you can also use jquery in the front end and back end
* it has native support for evented programming - steams,sockets
* --save will add your modules to your package json file

###what can node do

* act as a simple web browser
* build command-line tools and scripts
* live communication
* anything that can be written in javaScript

###helpful npm commands

* npm install -g express (installs Express as a global module)	
* in windows only you also need to run: npm install express-generator
* So now I can type express and the name of the project I want to create
* With Node global modules are almost always used to install command line tools rather than global copies of packages
* The idea is to le each project define their own required versions of modules and have them downloaded separately
* npm prune removes any modules that your project isn't using - not in your json packgage file
* npm update whenenver you wanna get/add dependencies to your project - updates all modules in your project

###Express
* popular node framework for creating server applications
* designed to make it easy to define and handle http routes

