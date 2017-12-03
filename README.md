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
- How to upload files to the server without using any third-party plugins.
- How to upload files to the server using the `ng2-file-upload` plugin.
- How to upload files to the server using the new HttpClient with progress-bar report.
- How to perform remote validation with template driven forms.
- How to use typed third-party JavaScript libraries.
- How to use un-typed third-party JavaScript libraries.
- How to add `SameSite Cookie` support in web.config file.
- How to add `Content-Security-Policy` headers for an Angular app and how to log received `csp-report`s.
- How to add a simple angular grid with server side paging, sorting, filtering and add/edit/delete/update capability.
- How to define a custom pipe to use the `moment-jalaali` library.
- How to use ASP.NET Core's `_layout.cshtml` file instead of Angular CLI's `index.html` file for the layout and start page.
- How to avoid duplication of RxJS operator imports.
- How to use the new `HttpClient`.
- How to use `sanitizer.bypassSecurityTrustHtml` method as a new pipe.
- How to define and use shared and core modules to provide shared singleton services and components between different modules of the app.
- How to work with BrowserStorage capabilities.
- How to read data before application startup.
- How to use server side ModelState validation errors in Angular Apps.
- How to display a `Page Loader/ng2-slim-loading-bar` with a new HTTPClient interceptor.
- How to communicate from a Service to a Component.
- How to display modal bootstrap dialogs and how to load components dynamically as modal dialogs.

How to run it
-------------

- Install the `Angular-CLI`.
- Open two command prompt consoles and then navigate to the root of the current app.
- Run the following commands in the first one:

```PowerShell
npm install
ng build --watch
```

- And these commands in the second one:

```PowerShell
dotnet restore
dotnet watch run
```

- Now to browse the application, navigate to http://localhost:5000
