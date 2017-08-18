import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegistrationService {
  private path: string;

  constructor(private http: Http) {
     this.path = "/users";
  }

  create(email: string, password: string, password_confirmation: string): Promise<any> {
    const url = `${environment.apiUrl}${this.path}`;
    return this.http.post(
        url,
        {user: { email, password, password_confirmation}}
      )
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(this.handleError);
  }


  private handleError(error: any): any {
    return Promise.reject(error.json());
  }
}
