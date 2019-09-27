import { Component, OnInit } from '@angular/core';
import { TipItem } from '../../../classes/tipItem.class';
import { DataService } from '../../../services/data.service'

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {
  tips:TipItem[];
  styles:any;
  newTipPromptVisible:boolean = false
  constructor(private Dataservice:DataService) { 

    Dataservice.Tips.subscribe(tipData=>{
      this.tips = tipData
    })

    Dataservice.Profile.subscribe(data=>{
      this.styles = data.styleTheme.tip
    })
  }

  ngOnInit() {
  }

  toggleNewTipPrompt(visibility:boolean){
    this.newTipPromptVisible = visibility;
  }
}
