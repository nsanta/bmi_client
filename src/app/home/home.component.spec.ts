import {APP_BASE_HREF} from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from "@angular/router";
import { HttpModule } from '@angular/http';
import {ToastyModule} from 'ng2-toasty';

import { HomeComponent } from './home.component';
import { SessionService } from "../shared/services/session.service";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        BrowserModule,
        HttpModule,
        ToastyModule.forRoot(),
        RouterModule.forRoot([])
      ],
      providers: [
        SessionService,
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have the login button', () => {
    const element = fixture.nativeElement;
    const button = element.querySelectorAll('a.btn');
    expect(button.length).toBe(1);
  });
});
