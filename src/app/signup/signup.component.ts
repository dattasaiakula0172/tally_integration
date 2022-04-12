import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm!: FormGroup;
  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstname: [''],
      lastname:[''],
      email: [''],
      password: [''],
      contactnumber: [''],
      address: [''],
    })
  }

  signUp(){
    // alert("hi");
    console.log(this.signupForm.value);
    console.log(this.crudService.signup(this.signupForm.value));
    console.log(this.crudService);
    
    this.crudService.signup(this.signupForm.value)
    .subscribe(() => {
      alert("Hello");
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/login'))
      }, (err) => {
        console.log(err);
    });
  }

}
