import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';



platformBrowserDynamic().bootstrapModule(AppModule);


class Person {
    FirstName: string;
    LastName: string;

    constructor(name: string) {
        this.FirstName = name;
        this.LastName = name;
    }
    getFullName() {
        let person = new Person("");
        return this.FirstName + " " + this.LastName;
    }
}