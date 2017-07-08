Angular template-driven forms lab
==========================

This project is a collection of tips and tricks about how to use an Angular (2+) app with an ASP.NET Core app and includes:

- How to integrate an Angular CLI project with an ASP.NET Core project.
- How to manage 404 errors of the SPA app on the server and redirect them to the index.html file of the Angular app.
- How to create a template driven form and post it to the ASP.NET Core Web API backend server.
- How to apply different validations to Angular template-driven forms.
- How to write custom validators for the Angular template-driven forms.
- How to write a global error handler for the Angular app.
- How to show alerts and messages to the users using `ng2-toasty` add-on.
- How to use `ngx-bootstrap` to manage bootstrap's drop down menu without the full page reload.
- How to manage cascading drop-down lists with the help of Angular and ASP.NET Core.
- How to send ASP.NET Core's anti-forgery token cookies to an Angular app and how to automatically validate it on the server.
- How to complete the `.vscode/launch.json` file to allow debugging of the `Angular CLI` project using `VSCode` and `Chrome debugger plugin`.



How to run it
-------------
- Install the `Angular-CLI`.
- Open two command prompt consoles and then navigate to the root of the current app. 
- Run the following commands in the first one:
```
npm install
ng build --watch
```
- And these commands in the second one:
```
dotnet restore
dotnet watch run
```
- Now to browse the application, navigate to http://localhost:5000


