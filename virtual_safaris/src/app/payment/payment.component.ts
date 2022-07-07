import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentForm = FormGroup

  constructor( private formBuilder : FormBuilder,
              private http : HttpClient,
              private router: Router) {}

  ngOnInit(): void {
   this.paymentForm = this.formBuilder.group({
      number: ['', Validators.required],
      amount: ['', Validators.required],
  })
  
  }

  submit():void{
    console.log(this.paymentForm.getRawValue());
    this.http.post('http://localhost:8000/api/v1/online/lipa/<phonenumber>/<amount>/',this.paymentForm.getRawValue())
    .subscribe(() => this.router.navigate(['/']));
     
  }
}


