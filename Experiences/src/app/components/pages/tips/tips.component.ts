import { Component, OnInit } from '@angular/core';
import { TipItem } from '../../../classes/tipItem.class';
import { PromptQuestion } from '../../../classes/promptQuestion.class'
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
  newTipPromptQuestions: PromptQuestion[]
  currentNewTipPromptQuestion : number = 1;
  constructor(private Dataservice:DataService) { 

    Dataservice.Tips.subscribe(tipData=>{
      this.tips = tipData
    })

    Dataservice.Profile.subscribe(data=>{
      this.styles = data.styleTheme.tip
    })

    Dataservice.NewTipPrompt.subscribe(questions=>{
      this.newTipPromptQuestions = questions
    })
  }

  ngOnInit() {
  }

  toggleNewTipPrompt(visibility:boolean){
    this.newTipPromptVisible = visibility;
  }
}
