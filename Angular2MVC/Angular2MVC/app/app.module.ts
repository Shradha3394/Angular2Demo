import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './components/home.component';
import { UserComponent } from './components/user.component';
import { UserService } from './Service/user.service';
 
 @NgModule({
     imports: [BrowserModule, ReactiveFormsModule, HttpModule, FormsModule, routing],
    declarations: [AppComponent, HomeComponent, UserComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, UserService],
    bootstrap: [AppComponent]
})

export class AppModule { }