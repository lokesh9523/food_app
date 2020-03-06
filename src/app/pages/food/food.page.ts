import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController, NavController } from '@ionic/angular';
import { AddfoodComponent} from './../../components/addfood/addfood.component';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {
  public items: any = []; 
  constructor(private modalController:ModalController,public apiservice:ApiService) {
    this.items = [
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false }
    ];
   }

  ngOnInit() {
    this.getFood();
  }
  getFood(){
      this.apiservice.getFood().subscribe((data:any)=>{
        if(data.data){
          data.data.forEach(element => {
            element.expanded= false
            
          });
          this.items = data.data;
        }
      })
  }
  async onAdd() {
    const modal = await this.modalController.create({
      component: AddfoodComponent
    });
    await modal.present();
    modal.onDidDismiss().then((data:any) => {
      console.log("iam here");
     this.getFood();
      
    })
  }
  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

}
