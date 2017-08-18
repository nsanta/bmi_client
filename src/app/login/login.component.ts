import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/services/login.service';
import { Session } from '../shared/session';
import {ToastyService, ToastOptions} from 'ng2-toasty';
import { Router }   from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  toastOptions: ToastOptions;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastyService: ToastyService,
    private session: Session
  ) {}

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

  login(email, password) {
    var toastOptions = {...this.toastOptions}
    this.loginService.create(email, password)
    .then(response => {
      toastOptions.title = "You logged in successfully.";
      this.toastyService.success(toastOptions);
      this.goToCalculator();
    }).catch(response =>{
      toastOptions.title = response.error;
      this.toastyService.error(toastOptions);
    })
  }

}
