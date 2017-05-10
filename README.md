# atom-web-proj
Atom Ide web project created by Prashant Pillai(prashantpillai108@gmail.com)

# Git SSH issue solution
https://github.com/akonwi/git-plus/issues/224

For private repo which need privilege to pull, should use either ssh address or put username&password in https address:

    git@github.com:{username}/repo.git
    https://{username}:{password}@github.com/{username}/repo.git

Note: if your put username&password in url, and the password contains '@' character, use '%40' instead.

# Suggested AngularJS Project structure
#Ref: https://scotch.io/tutorials/angularjs-best-practices-directory-structure

app/
----- shared/   // acts as reusable components or partials of our site
---------- sidebar/
--------------- sidebarDirective.js
--------------- sidebarView.html
---------- article/
--------------- articleDirective.js
--------------- articleView.html
----- components/   // each component is treated as a mini Angular app
---------- home/
--------------- homeController.js
--------------- homeService.js
--------------- homeView.html
---------- blog/
--------------- blogController.js
--------------- blogService.js
--------------- blogView.html
----- app.module.js
----- app.routes.js
assets/
----- img/      // Images and icons for your app
----- css/      // All styles and style related files (SCSS or LESS files)
----- js/       // JavaScript files written for your app that are not for angular
----- libs/     // Third-party libraries such as jQuery, Moment, Underscore, etc.
index.html
