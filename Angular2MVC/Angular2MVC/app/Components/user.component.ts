import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { UserService } from '../Service/user.service';
import { IUser } from '../Models/user'
import { Global } from '../shared/global'
import { DBOperation } from '../shared/enum'

@Component({
    templateUrl: 'app/Components/user.component.html'
})  

export class UserComponent implements OnInit {
    @ViewChild('modal') modal: ModalComponent;
    users: IUser[];
    user: IUser;
    message: string;
    buttonName: string;
    isLoading: boolean = false;
    titleName: string;
    dbops: DBOperation;
    userForm: FormGroup;
    
    constructor(private fb: FormBuilder, private _userService: UserService) { }
    ngOnInit(): void {
        this.LoadUsers();
    }

    LoadUsers() {
        this.userForm = this.fb.group({
            Id: [''],
            FirstName: [''],
            LastName: [''],
            Gender: ['']
        });
        this.isLoading = true;
        this._userService.get(Global.BASE_USER_ENDPOINT).
            subscribe(userList => { this.users = userList, this.isLoading = false; }, error => this.message = error);
    }

    addUser() {
        this.dbops = DBOperation.CREATE;
        this.SetControlsState(true);
        this.buttonName = "Add";
        this.titleName = "Add New User";
        this.userForm.reset();
        this.modal.open();
    }

    editUser(id: number) {
        this.dbops = DBOperation.UPDATE;
        this.SetControlsState(true);
        this.buttonName = "Update";
        this.titleName = "Edit User";
        this.userForm.reset();
        this.user = this.users.find(x => x.Id == id);
        this.userForm.setValue(this.user);
        this.modal.open();
    }

    deleteUser(id: number) {
        this.dbops = DBOperation.DELETE;
        this.SetControlsState(false);
        this.buttonName = "Delete";
        this.titleName = "Delete User";
        this.userForm.reset();
        this.user = this.users.find(x => x.Id == id);
        this.userForm.setValue(this.user);
        this.modal.open();
    }

    SetControlsState(isEnable: boolean) {
        isEnable ? this.userForm.enable() : this.userForm.disable();
    }

    onSubmit(formData: any) {
        switch (this.dbops)
        {
            case DBOperation.CREATE:
                this._userService.post(Global.BASE_USER_ENDPOINT, formData._value).
                    subscribe(data => {
                        if (data == 1)
                            this.LoadUsers();
                        else
                            this.message = "There is some issue in saving records, please contact to system administrator!";

                        this.modal.dismiss();
                    }, error => this.message = error);
                break;
            case DBOperation.UPDATE:
                this._userService.put(Global.BASE_USER_ENDPOINT, formData._value.Id, formData._value).
                    subscribe(data => {
                        if (data == 1) {
                            this.message = "Data successfully updated.";
                            this.LoadUsers();
                        }
                        else
                            this.message = "There is some issue in saving records, please contact to system administrator!"
                        this.modal.dismiss();
                    }, error => this.message = error);
                break;
            case DBOperation.DELETE:
                this._userService.delete(Global.BASE_USER_ENDPOINT, formData._value.Id).
                    subscribe(data => {
                        if (data == 1)
                        {
                            this.message = "User successfully deleted.";
                            this.LoadUsers();
                        }
                        else
                            this.message = "There is some issue in saving records, please contact to system administrator!"
                        this.modal.dismiss();
                    }, error => this.message = error);
        }
    }
}