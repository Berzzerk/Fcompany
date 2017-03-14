import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';


import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {FlashMessagesModule} from 'angular2-flash-messages';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CompanyComponent } from './company/company.component';
import { TaskComponent } from './task/task.component';
import { CreatcompanyComponent } from './creatcompany/creatcompany.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SigninComponent,
    SignupComponent,
    AboutusComponent,
    CompanyComponent,
    CreatcompanyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
  {path: 'mainPage',   component: MainPageComponent},
  {path: '',   component: MainPageComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'creatcompany',   component: CreatcompanyComponent},
  {path: 'signin',component: SigninComponent},
  {path: 'aboutus',   component: AboutusComponent},
  {path: 'company',   component: CompanyComponent},
  {path: 'task',   component: TaskComponent}
  ]),
    FlashMessagesModule
  ],
  providers: [ValidateService,AuthService],
  bootstrap: [AppComponent]
  })



export class AppModule { }