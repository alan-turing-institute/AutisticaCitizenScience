import { Component, OnInit } from '@angular/core';
import { NavbarItem } from '../../classes/navbar/navbarItem.class';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items:NavbarItem[];
  currentVisiblePage:string;

  constructor(private Dataservice:DataService) {
    this.Dataservice.NavbarItems.subscribe(
      Items =>{
        this.items = Items;
      }
    );

    this.Dataservice.CurrentVisiblePage.subscribe(
      page =>{
        this.currentVisiblePage = page;
      }
    );
    
  }

  ngOnInit() {
    
  }

  navItemClicked(nextPage:string){
    this.Dataservice.nextVisiblePage(nextPage);
    this.Dataservice.hideModal()
  }

}
