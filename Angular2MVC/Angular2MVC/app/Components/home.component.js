"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
        this.name = 'shradha';
        this.name = 'SHRADHA';
        this.names = ['riya', 'piya', 'siya', 'tiya', 'miya', 'kiya', 'diya', 'hiya', 'jiya', 'niya'];
    }
    HomeComponent.prototype.sayHello = function (nm) {
        alert("Hello " + nm);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "home",
        //template: '<img src="../../images/users.png" style="text-align:center"/>'
        template: "\n        <div class=\"col-xs-6\">\n            <h3>Enter your name</h3><br/>\n            <input type='text' [(ngModel)]=\"name\"/>\n            <div>Welcome, {{name}}</div>\n            <ul>\n                <li class=\"col-xs-6\" *ngFor='let nm of names' (click)=\"sayHello(nm)\" style=\"cursor:pointer;\">Hello {{nm}}</li>\n            </ul>\n        </div>\n\n        <div class=\"col-xs-6\"><img src=\"../../images/users.png\" style=\"text-align:center\"/></div>\n    "
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map