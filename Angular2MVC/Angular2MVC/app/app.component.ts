import { Component } from "@angular/core"
@Component({
     selector: "user-app",
     template: `
               <div>
                  <nav class='navbar navbar-inverse'>
                       <div class='container-fluid'>
                         <ul class='nav navbar-nav'>
                           <li><a [routerLink]="['home']">Home</a></li>
                      </ul>
                      </div>
                 </nav>    
              <div class='container'>
                <home></home>
              </div>
             </div>          
`
})

export class AppComponent {
 
}