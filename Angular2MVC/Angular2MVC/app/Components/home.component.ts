import { Component } from "@angular/core";

@Component({
    selector: "home",
    //template: '<img src="../../images/users.png" style="text-align:center"/>'
    template: `
        <div class="col-xs-6">
            <h3>Enter your name</h3><br/>
            <input type='text' [(ngModel)]="name"/>
            <div>Welcome, {{name}}</div>
            <ul>
                <li *ngFor='let nm of names'>Hello {{nm}}</li>
            </ul>
        </div>

        <div class="col-xs-6"><img src="../../images/users.png" style="text-align:center"/></div>
    `
})

export class HomeComponent{
    name: string = 'shradha';
    names: string[];

    constructor() {
        this.name = 'SHRADHA';
        this.names = ['riya', 'piya', 'siya', 'tiya', 'miya', 'kiya', 'diya', 'hiya', 'jiya', 'niya'];
    }
}