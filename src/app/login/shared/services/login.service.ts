import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/toPromise';
import { Login } from '../models/login';
import { Session } from '../../../shared/session';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginService {
  private path: string;

  constructor(private http: Http, private session: Session) {
     this.path = "/users/sign_in";
  }

  create(email: string, password: string): Promise<Login> {
    const url = `${environment.apiUrl}${this.path}`;
    return this.http.post(
        url,
        {user: {email: email, password: password}}
      )
      .toPromise()
      .then(response => {
        return response.json() as Login;
      })
      .then(login => {
        this.session.login(login);
      })
      .catch(this.handleError);
  }


  private handleError(error: any): any {
    return Promise.reject(error.json());
  }
}
