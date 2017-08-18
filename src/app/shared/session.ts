import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Login } from '../login/shared/models/login';

@Injectable()
export class Session {
  sessionObservable = new Subject<boolean>();
  currentUser;
  authToken: string;

  constructor() {
    this.setSession();
    this.emitConfig(true);
  }

  login(login: Login): void {
    localStorage.setItem('currentUser', JSON.stringify(login));
    this.setSession();
    this.emitConfig(true);
  }

  logout(): void {
    this.clean();
    localStorage.removeItem('currentUser');
  }

  private emitConfig(val) {
    this.sessionObservable.next(val);
  }

  private clean(){
    this.authToken = null;
    this.currentUser = null;

  }

  private setSession(){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')) as Login;
    this.authToken = this.currentUser && this.currentUser.auth_token;
  }

}
