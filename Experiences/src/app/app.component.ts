import { Component } from '@angular/core';
import { ModalController, ModalType } from "./classes/modalController.class";
import { DataService } from './services/data.service';
import { stat } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  currentPageID: string;
  loginStatus: number;
  mainStyles: any;
  navStyles: any;
  itemModal: ModalController;
  profileArea: any = {
    showClass:"profileicon",
    showState:false
  }

  constructor(private Dataservice: DataService) {
    this.Dataservice.CurrentVisiblePage.subscribe(pageID => {
      this.currentPageID = pageID;
    });

    this.Dataservice.Profile.subscribe(data => {
      this.mainStyles = data.styleTheme.main;
      this.navStyles = data.styleTheme.nav;
    });

    this.Dataservice.LoginStatus.subscribe(status =>{
      this.loginStatus = status
    })
    this.Dataservice.ModalController.subscribe(controller =>{
      this.itemModal = controller
    })
  }

  updateLoginStatus(status: number)
  {
    this.Dataservice.nextLoginStatus(status)
  }

  logout(){
    this.updateLoginStatus(0)
    this.profileArea.showClass = "profileicon"
    this.profileArea.showState = false
  }

  toggleProfileAreaExpansion(){
    if(this.profileArea.showState){
      this.profileArea.showClass = "profileicon"
      this.profileArea.showState = false
    }
    else
    {
      this.profileArea.showClass = "profileicon expanded"
      this.profileArea.showState = true
    }
    
  }

  profileAreaClickedOutside(event: any)
  {
    if(this.profileArea.showState)
    {
    this.profileArea.showClass = "profileicon"
    this.profileArea.showState = false
    }
  }
}
