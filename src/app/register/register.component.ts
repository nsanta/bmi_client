import { Component, OnInit } from '@angular/core';
import { RegistrationService } from "./shared/services/registration.service";
import {ToastyService, ToastOptions} from 'ng2-toasty';
import { Router } from "@angular/router";
import { Session } from "../shared/session";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  toastOptions: ToastOptions;

  constructor(
    private registrationService: RegistrationService,
    private toastyService: ToastyService,
    private router: Router,
    private session: Session
  ) {

  }

  ngOnInit() {
    this.toastOptions = {
      title: "",
      showClose: true,
      timeout: 5000
    } as ToastOptions;
    if (this.session.currentUser){
      this.goToCalculator();
    }
  }

  goToCalculator(){
    this.router.navigate(['/calculator']);
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  register(user, password, passwordConfirmation) {
    var toastOptions = {...this.toastOptions}
    this.registrationService.create(user, password, passwordConfirmation)
    .then(response => {
      toastOptions.title = "You Signed up successfully. Now Sign in!.";
      this.toastyService.success(toastOptions);
      this.goToLogin();
    }).catch(response =>{
      console.log(response);
      toastOptions.title = response.error;
      this.toastyService.error(toastOptions);
    })
  }

}
