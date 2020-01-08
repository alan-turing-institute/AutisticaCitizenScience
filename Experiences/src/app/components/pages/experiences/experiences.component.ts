import { Component, OnInit } from '@angular/core';
import { ExperienceItem } from '../../../classes/experienceItem.class';
import { DataService } from '../../../services/data.service'

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  experiences:ExperienceItem[];
  styles:any;
  constructor(private Dataservice:DataService) { 
    Dataservice.Experiences.subscribe(experienceData=>{
      this.experiences = experienceData
    })

    Dataservice.Profile.subscribe(data=>{
      this.styles = data.styleTheme.experience
    })
/*     this.styles = {
      experienceItem:{
        'background-color':'red',
        'border-radius':'5px'
      }
    } */
  }

  ngOnInit() {
  }

}
