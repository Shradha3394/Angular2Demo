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
var forms_1 = require("@angular/forms");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var user_service_1 = require("../Service/user.service");
var global_1 = require("../shared/global");
var enum_1 = require("../shared/enum");
var UserComponent = (function () {
    function UserComponent(fb, _userService) {
        this.fb = fb;
        this._userService = _userService;
        this.isLoading = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.LoadUsers();
    };
    UserComponent.prototype.LoadUsers = function () {
        var _this = this;
        this.userForm = this.fb.group({
            Id: [''],
            FirstName: [''],
            LastName: [''],
            Gender: ['']
        });
        this.isLoading = true;
        this._userService.get(global_1.Global.BASE_USER_ENDPOINT).
            subscribe(function (userList) { _this.users = userList, _this.isLoading = false; }, function (error) { return _this.message = error; });
    };
    UserComponent.prototype.addUser = function () {
        this.dbops = enum_1.DBOperation.CREATE;
        this.SetControlsState(true);
        this.buttonName = "Add";
        this.titleName = "Add New User";
        this.userForm.reset();
        this.modal.open();
    };
    UserComponent.prototype.editUser = function (id) {
        this.dbops = enum_1.DBOperation.UPDATE;
        this.SetControlsState(true);
        this.buttonName = "Update";
        this.titleName = "Edit User";
        this.userForm.reset();
        this.user = this.users.find(function (x) { return x.Id == id; });
        this.userForm.setValue(this.user);
        this.modal.open();
    };
    UserComponent.prototype.deleteUser = function (id) {
        this.dbops = enum_1.DBOperation.DELETE;
        this.SetControlsState(false);
        this.buttonName = "Delete";
        this.titleName = "Delete User";
        this.userForm.reset();
        this.user = this.users.find(function (x) { return x.Id == id; });
        this.userForm.setValue(this.user);
        this.modal.open();
    };
    UserComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.userForm.enable() : this.userForm.disable();
    };
    UserComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        switch (this.dbops) {
            case enum_1.DBOperation.CREATE:
                this._userService.post(global_1.Global.BASE_USER_ENDPOINT, formData._value).
                    subscribe(function (data) {
                    if (data == 1)
                        _this.LoadUsers();
                    else
                        _this.message = "There is some issue in saving records, please contact to system administrator!";
                    _this.modal.dismiss();
                }, function (error) { return _this.message = error; });
                break;
            case enum_1.DBOperation.UPDATE:
                this._userService.put(global_1.Global.BASE_USER_ENDPOINT, formData._value.Id, formData._value).
                    subscribe(function (data) {
                    if (data == 1) {
                        _this.message = "Data successfully updated.";
                        _this.LoadUsers();
                    }
                    else
                        _this.message = "There is some issue in saving records, please contact to system administrator!";
                    _this.modal.dismiss();
                }, function (error) { return _this.message = error; });
                break;
            case enum_1.DBOperation.DELETE:
                this._userService.delete(global_1.Global.BASE_USER_ENDPOINT, formData._value.Id).
                    subscribe(function (data) {
                    if (data == 1) {
                        _this.message = "User successfully deleted.";
                        _this.LoadUsers();
                    }
                    else
                        _this.message = "There is some issue in saving records, please contact to system administrator!";
                    _this.modal.dismiss();
                }, function (error) { return _this.message = error; });
        }
    };
    return UserComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], UserComponent.prototype, "modal", void 0);
UserComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Components/user.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map