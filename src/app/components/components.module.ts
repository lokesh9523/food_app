import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {AddfoodComponent} from './addfood/addfood.component';
import {ExpandableComponent} from './expandable/expandable.component'
@NgModule({
    imports: [
        IonicModule, 
        CommonModule, 
        ReactiveFormsModule, 
        FormsModule
    ],
    exports: [
        AddfoodComponent,ExpandableComponent
    ],
    declarations: [
        AddfoodComponent,ExpandableComponent
    ],
    entryComponents: [
        AddfoodComponent,ExpandableComponent
    ]
})
export class ComponentsModule { }
