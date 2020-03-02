import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class Loginpage implements OnInit {

  constructor(private Dataservice:DataService) { }

  ngOnInit() {
  }

  updateLoginStatus(status: number){
    this.Dataservice.nextLoginStatus(status);
  }
}
