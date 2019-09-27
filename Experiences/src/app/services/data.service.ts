import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavbarItem } from '../classes/navbar/navbarItem.class'
import { ExperienceItem } from '../classes/experienceItem.class'
import { TipItem } from '../classes/tipItem.class'

@Injectable()
export class DataService {

  // Observable string sources
  private profile = new BehaviorSubject<any>({
    styleTheme: {
      experience: {
        experienceItem: {
          'background-color': '#c5c5c5',
          'color':'#000000',
          'border-radius': '5px'
        }
      },
      tip: {
        tipItem: {
          'background-color': '#c5c5c5',
          'color':'#1f1f1f',
          'border-radius': '5px'
        }
      },
      main:{
        background:{
        'background-image': '',
        'background-size':'650px',
        'background-color': '#ededed'
        }
      },
      nav:{
        navarea:{
        'background-image': '',
        'background-size':'650px',
        'background-color': '#1f2a51'
        }
      }
    }
  })
  private navbarItems = new BehaviorSubject<NavbarItem[]>([
    {
      label: "My Experiences",
      identifier: "experiences"
    },
    {
      label: "Tips",
      identifier: "tips"
    },
    {
      label: "Settings",
      identifier: "settings"
    },
    {
      label: "About",
      identifier: "about"
    }
  ])
  private currentVisiblePage = new BehaviorSubject<string>(this.navbarItems.value[0].identifier)
  private experiences = new BehaviorSubject<ExperienceItem[]>([{ title: "Experience 1" }, { title: "Experience 2" }])
  private tips = new BehaviorSubject<TipItem[]>([{title:"Tip 1"}, {title:"Tip 2"}])
  private loginFailed = new BehaviorSubject<boolean>(false);
  private loginStatus = new BehaviorSubject<number>(0);
  private displayName = new BehaviorSubject<string>("");
  private token;


  private offlineMode = new BehaviorSubject<boolean>(false);

  private tokenHash: string;


  // Observable string streams

  Profile = this.profile.asObservable()
  NavbarItems = this.navbarItems.asObservable();
  CurrentVisiblePage = this.currentVisiblePage.asObservable();
  Experiences = this.experiences.asObservable();
  Tips = this.tips.asObservable();
  LoginFailed = this.loginFailed.asObservable();
  LoggedIn = this.loginStatus.asObservable();
  DisplayName = this.displayName.asObservable();
  readonly OfflineFlag = this.offlineMode.asObservable();


  constructor(private http: HttpClient) {


  }


  // Service message commands


  validateLoginCredentials(pWord: string, uName: string) {

    var authAddress = "localhost:3000";
    let headerAuth = new HttpHeaders()
    headerAuth = headerAuth.set("Authorization", "Basic (VapRClient:supersecret)");
    headerAuth = headerAuth.append("Content-Type", "application/json");
    //var uName = (<HTMLInputElement>document.getElementById("username")).value
    // var pWord = (<HTMLInputElement>document.getElementById("password")).value
    let formCredentials = JSON.stringify(
      {
        "password": pWord,
        "username": uName
      })

    const httpOptions = {
      headers: headerAuth
    };
    if (localStorage.getItem("authServer") != null) {
      authAddress = localStorage.getItem("authServer");
    }

    this.http.post("http://" + authAddress + "/vaprauthentication", formCredentials, httpOptions).subscribe((loginResponse: any) => {
      //console.log("profiledate =")
      //console.log(loginResponse);


      //localStorage.setItem("authToken",loginResponse.token)

      // var payload = this.decodeJWTPayload(loginResponse.token) 

      //property this.displayName= loginResponse.profile.profile.displayName
      //property this.loggedIn = true;

      this.tokenReceived(loginResponse.token, uName, pWord);
    },
      (error: any) => {
        try {
          switch (error.status) {
            case 0:
              this.offlineMode.next(true)

              break;
            case 401:
              this.loginFailed.next(true);
              break
            default:
              alert("HTTP error, cannot login")
          }
        }
        catch (err) {

        }
      }
    );
  }


  tokenReceived(receivedToken: any, username: string, password: string) {


  }



  private removeSessionToken() {
    sessionStorage.removeItem("currentSession")
  }

  private decodeJWTPayload(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(atob(base64));
  }

  public nextVisiblePage(pageValue: string) {
    this.currentVisiblePage.next(pageValue)
  }

  public updateProfile(profileData:any){
    this.profile.next(profileData);
  }

}
