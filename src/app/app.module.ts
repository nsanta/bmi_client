import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ToastyModule} from 'ng2-toasty';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { Session } from './shared/session';
import { LoginService } from './login/shared/services/login.service';
import { RegistrationService } from './register/shared/services/registration.service';
import { BmiService } from './bmi-calculator/shared/services/bmi.service';

const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'login', component: LoginComponent },
 { path: 'register', component: RegisterComponent },
 { path: 'calculator', component: BmiCalculatorComponent },
 { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    RegisterComponent,
    BmiCalculatorComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash: true}),
    ToastyModule.forRoot()
  ],
  providers: [Session, LoginService, RegistrationService, BmiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
