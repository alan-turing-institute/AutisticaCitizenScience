import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentPageID: string;
  mainStyles: any;
  navStyles: any;

  constructor(private Dataservice: DataService) {
    this.Dataservice.CurrentVisiblePage.subscribe(pageID => {
      this.currentPageID = pageID;
    });

    this.Dataservice.Profile.subscribe(data => {
      this.mainStyles = data.styleTheme.main;
      this.navStyles = data.styleTheme.nav;
    });
  }
}
