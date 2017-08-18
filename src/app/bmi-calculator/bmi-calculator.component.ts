import { Component, OnInit } from '@angular/core';
import { BmiService } from './shared/services/bmi.service';
import { Bmi } from './shared/models/bmi';
import {ToastyService, ToastOptions} from 'ng2-toasty';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {
  bmi: Bmi;
  toastOptions: ToastOptions;

  constructor(
    private bmiService: BmiService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    this.toastOptions = {
      title: "",
      showClose: true,
      timeout: 5000
    } as ToastOptions;
  }

  calculate(weight, height) {
    var toastOptions = {...this.toastOptions};
    this.bmi = null;
    this.bmiService.get(weight, height)
    .then(bmi => {
      this.bmi = bmi;
    }).catch(response =>{
      console.log(response);
      toastOptions.title = response.error;
      this.toastyService.error(toastOptions);
    })
  }
}
