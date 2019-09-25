import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { SelectItem } from 'primeng/api';


const imgBaseURL: string = 'url(assets/'//'url("../../../assets/'
const imgBaseURLEnd: string = ')'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {
  settings: any;
  settingOptions: any;
  imageSelectorOptions: SelectItem[];

  constructor(private Dataservice: DataService) {
    this.Dataservice.Profile.subscribe(data => {
      this.settings = data
    })

    this.settingOptions = [
      {
        groupTitle: "Experience Item",
        styleGroup: 'experience',
        settings: [
          {
            settingName: "Background Colour",
            path: {
              element: 'experienceItem',
              property: 'background-color'
            },
            type: "colorPicker"
          },
          {
            settingName: "Text Colour",
            path: {
              element: 'experienceItem',
              property: 'color'
            },
            type: "colorPicker"
          }
        ]
      },
      {
        groupTitle: "Background",
        styleGroup: 'main',
        settings: [
          {
            settingName: "Background Image",
            path: {
              element: 'background',
              property: 'background-image'
            },
            type: "imagePicker"
          },
          {
            settingName: "Background Colour",
            path: {
              element: 'background',
              property: 'background-color'
            },
            type: "colorPicker"
          },
          {
            settingName: "Background Scale",
            path: {
              element: 'background',
              property: 'background-size'
            },
            type: "numberPixels"
          }
        ]
      },
      {
        groupTitle: "Navigation Background",
        styleGroup: 'nav',
        settings: [
          {
            settingName: "Background Image",
            path: {
              element: 'navarea',
              property: 'background-image'
            },
            type: "imagePicker"
          },
          {
            settingName: "Background Colour",
            path: {
              element: 'navarea',
              property: 'background-color'
            },
            type: "colorPicker"
          },
          {
            settingName: "Background Scale",
            path: {
              element: 'navarea',
              property: 'background-size'
            },
            type: "numberPixels"
          }
        ]
      }
    ]


    this.imageSelectorOptions = [
      {
        label: "None",
        value: ""
      },
      {
        label: "Wood1",
        value: imgBaseURL + "wood1.jpg" + imgBaseURLEnd,
      },
      {
        label: "Wood2",
        value: imgBaseURL + "wood2.jpg" + imgBaseURLEnd
      },
      {
        label: "Wood3",
        value: imgBaseURL + "wood3.jpg" + imgBaseURLEnd
      },
      {
        label: "Wood4",
        value: imgBaseURL + "wood4.jpg" + imgBaseURLEnd
      },
      {
        label: "Metal1",
        value: imgBaseURL + "metal1.jpg" + imgBaseURLEnd
      }
    ]

  }
  ngOnInit() {
  }

  settingChanged() {
    this.Dataservice.updateProfile(this.settings)
  }

}
