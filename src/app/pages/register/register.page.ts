import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
 @Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  validations_form: FormGroup;
  public showregistration:boolean =false;
  constructor(private navCtr: NavController,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      mobile:new FormControl('', Validators.compose([
        Validators.minLength(10),
        Validators.required
      ]))
    });
  }

  showRegistration(){
    console.log("iam here")
    this.showregistration = true;
  }
  OnRegistration(){
    
  }

}
