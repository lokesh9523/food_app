import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FoodPageRoutingModule } from './food-routing.module';
import { FoodPage } from './food.page';
import {AddfoodComponent} from './../../components/addfood/addfood.component'
import {ExpandableComponent} from './../../components/expandable/expandable.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
     ReactiveFormsModule,
    IonicModule,
    FoodPageRoutingModule
  ],
  declarations: [FoodPage,AddfoodComponent,ExpandableComponent],
  entryComponents:[AddfoodComponent,ExpandableComponent]
})
export class FoodPageModule {}
