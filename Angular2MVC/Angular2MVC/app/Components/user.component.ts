import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';
import { IUser } from '../Models/user'
import { Global } from '../shared/global'

@Component({
    templateUrl: 'app/Components/user.component.html'
})  

export class UserComponent implements OnInit {

    users: IUser[];
    message: string;

    constructor(private _userService: UserService) { }
    ngOnInit(): void {
        this.LoadUsers();
    }

    LoadUsers() {
        this._userService.get(Global.BASE_USER_ENDPOINT).
            subscribe(userList => this.users = userList, error => this.message = error);
    }
}