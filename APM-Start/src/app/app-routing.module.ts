import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {path: 'welcome', component : WelcomeComponent },
      {path: '', redirectTo: 'welcome', pathMatch: 'full'  },
      {path: '**', component : PageNotFoundComponent }
    ]),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
