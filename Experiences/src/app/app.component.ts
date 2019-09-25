import { Component } from '@angular/core';
import { DataService } from './services/data.service'
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentPageID:string;
  mainStyles:any;
  navStyles:any;

  constructor(private Dataservice:DataService){
    this.Dataservice.CurrentVisiblePage.subscribe(pageID =>{
      this.currentPageID = pageID;
    })

    this.Dataservice.Profile.subscribe(data =>{
      this.mainStyles = data.styleTheme.main
      this.navStyles = data.styleTheme.nav
    })

/*     this.styles = {
      main:{
        'background-image': 'url("https://www.multifuelstoves.org/upload/2018/12/17/discover-textures-seamless-pear-wood-texturediscover-wood-texture-seamless-l-6bec807124873eaa.jpg")',
        'background-size':'650px',
        'background-color': '#ededed'
      }
    } */
  }
}
