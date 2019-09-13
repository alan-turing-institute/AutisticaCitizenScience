import { Component } from '@angular/core';
import { DataService } from './services/data.service'
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentPageID:string;

  constructor(private Dataservice:DataService){
    this.Dataservice.CurrentVisiblePage.subscribe(pageID =>{
      this.currentPageID = pageID;
    })
  }
}
