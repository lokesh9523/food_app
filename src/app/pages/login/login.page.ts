import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {LocalStorageService} from 'ngx-store';
import {LogService} from './../../services/log.service';
import {ApiService} from './../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validations_form: FormGroup;
  public showPassword:boolean = true;
  constructor(private navCtr: NavController,private formBuilder: FormBuilder,public localstorage:LocalStorageService,public log:LogService,public apiservice:ApiService) { 
  }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      mobile_number:new FormControl('', Validators.compose([
        Validators.minLength(10),
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  login(form: NgForm){
    console.log(form.value);
    if(form.value.email != '' && form.value.password != ''){
      // this.navCtr.navigateRoot('/tabs/home');
    }
  }
  onPasswordToggle(): void {
    this.showPassword = !this.showPassword;
  }
  registerPage(){
    this.navCtr.navigateRoot('/register');
  }
  
  onLogin(){
    this.log.info(this.validations_form.value)
    this.apiservice.Login(this.validations_form.value).subscribe((data:any)=>{
      if(data.data){
        this.localstorage.set('role',data.data.users_role.role.name);
        this.localstorage.set('login_id',data.data.id);
        this.localstorage.set('IsLogin',true);
        this.localstorage.set('name',data.data.users_datum.name);
        this.localstorage.set('token',data.data.token);
        if(data.data.users_role.role.name === 'admin'){
          this.navCtr.navigateRoot('/menu/food');
        }
        if(data.data.users_role.role.name === 'suppliers'){
          this.navCtr.navigateRoot('/menu/suppliers');

        }
        if(data.data.users_role.role.name === 'user'){
          this.navCtr.navigateRoot('/menu/food');
        }
      }
    })
    // this.navCtr.navigateRoot('/menu/suppliers');
  }

}
