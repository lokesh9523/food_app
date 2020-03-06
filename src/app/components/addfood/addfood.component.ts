import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LogService } from 'src/app/services/log.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.scss'],
})
export class AddfoodComponent implements OnInit {
  foodTypes= [];
  submitAttempt = false;
  registrationFormGroup: FormGroup;
  constructor(public logger: LogService,
    public apiservice:ApiService,
    public modalController: ModalController,
    public formBuilder: FormBuilder) {
      this.submitAttempt = false;
      this.registrationFormGroup = this.formBuilder.group({
        display_name: ['', Validators.required],
        food_type_id:['',Validators.required]
      }); 
     }

  ngOnInit() {
    this.apiservice.getFoodTypes().subscribe((data:any)=>{
      if(data.data){
        this.foodTypes = data.data;
        console.log(this.foodTypes)
      }
    })

  }
 
  submit() {
    this.submitAttempt = true;
    console.log(this.registrationFormGroup.value);
    if(this.registrationFormGroup.valid){
      this.apiservice.addFood(this.registrationFormGroup.value).subscribe((data:any)=>{
        if(data.data){
          this.modalController.dismiss();
        }
      })
    }

  }
  closeModal() {
    this.modalController.dismiss();
  }
}
