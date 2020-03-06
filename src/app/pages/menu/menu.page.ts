import { Component, OnInit } from '@angular/core';

import { Router, RouterEvent } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  menus = [
    {
      title:'Food',
      url:'/menu/food',
      icon:'home',
    },
    {
      title:'Suppliers',
      url:'/menu/suppliers',
      icon:'home'
    }
  ];
  selectedPath='';
  constructor(private router:Router) {
    this.router.events.subscribe((event:RouterEvent)=>{
      this.selectedPath = event.url;
    })
   }

  ngOnInit() {
  }

}
