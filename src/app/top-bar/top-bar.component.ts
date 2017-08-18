import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { Session } from "../shared/session";

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  loggedIn;
  currentUser;
  constructor(private session: Session, private router: Router) {
    if (this.session.authToken){
      this.loggedIn = true;
      this.currentUser = this.session.currentUser;
    }
    this.session.sessionObservable.subscribe(value => {
      if(value){
        this.loggedIn = true;
        this.currentUser = this.session.currentUser;
      } else {
        this.loggedIn = false;
        this.currentUser = null;
      }
    })
  }

  ngOnInit() {
  }

  logout(){
    this.session.logout();
    this.router.navigate(['/']);
    this.loggedIn = false;
    this.currentUser = null;
  }

}
