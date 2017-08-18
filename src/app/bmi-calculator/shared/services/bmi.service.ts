import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../../../environments/environment';
import { Session } from '../../../shared/session';
import { Bmi } from '../models/bmi';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BmiService {
  headers: Headers;
  private basePath: string;

  constructor(private http: Http, private session: Session) {
    this.headers = new Headers();
    this.headers.set('X-User-Email', session.currentUser.email);
    this.headers.set('X-User-Token', session.authToken);
    this.basePath = "/bmi";
  }


  get(weight, height): Promise<Bmi>{
    const url = `${environment.apiUrl}${environment.apiVersionPath}${this.basePath}`;
    return this.http.get(
        url,
        {
          params: {weight, height},
          headers: this.headers
        }
      ).toPromise()
      .then(response => response.json().data as Bmi)
      .catch(this.handleError);
  }

  private handleError(error: any): any {
    return Promise.reject(error.json());
  }
}
