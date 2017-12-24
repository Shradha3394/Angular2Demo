"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
var Person = (function () {
    function Person(name) {
        this.FirstName = name;
        this.LastName = name;
    }
    Person.prototype.getFullName = function () {
        var person = new Person("");
        return this.FirstName + " " + this.LastName;
    };
    return Person;
}());
//# sourceMappingURL=main.js.map