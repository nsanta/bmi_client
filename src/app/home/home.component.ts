import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { Session }   from '../shared/session';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn = false;

  constructor(
    private router: Router,
    private session: Session
  ) {
  }

  ngOnInit() {
    if (this.session.currentUser){
      this.goToCalculator();
    }
  }

  goToCalculator(){
    this.router.navigate(['/calculator']);
  }

}
