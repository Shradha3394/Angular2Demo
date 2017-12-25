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

        this._userService.get(Global.BASE_USER_ENDPOINT).
            subscribe(userList => this.users = userList, error => this.message = error);
    }

    addUser() {
        this.dbops = DBOperation.CREATE;
        this.modal.open();
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
        }
    }
}