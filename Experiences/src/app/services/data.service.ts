import { Injectable } from '@angular/core';
import { Subject ,  BehaviorSubject }    from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavbarItem } from '../classes/navbar/navbarItem.class'

@Injectable()
export class DataService {
 
  // Observable string sources
  private navbarItems = new BehaviorSubject<NavbarItem[]>([
    {
      label : "My Experiences",
      identifier : "experiences"
    },
    {
      label : "Tips",
      identifier : "tips"
    },
    {
      label : "About",
      identifier : "about"
    }
  ])
  private currentVisiblePage = new BehaviorSubject<string>(this.navbarItems.value[0].identifier)
  private loginFailed = new BehaviorSubject<boolean>(false);
  private loginStatus = new BehaviorSubject<number>(0);
  private displayName = new BehaviorSubject<string>("");
  private token;


  private offlineMode = new BehaviorSubject<boolean>(false);

  private tokenHash:string; 


  // Observable string streams
  NavbarItems = this.navbarItems.asObservable();
  CurrentVisiblePage = this.currentVisiblePage.asObservable();
  LoginFailed = this.loginFailed.asObservable();
  LoggedIn = this.loginStatus.asObservable();
  DisplayName = this.displayName.asObservable();
  readonly OfflineFlag = this.offlineMode.asObservable();


  constructor(private http:HttpClient){
  
    
  }
 

  // Service message commands
  

  validateLoginCredentials(pWord:string, uName:string){ 

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
  if(localStorage.getItem("authServer") != null)
  {
    authAddress = localStorage.getItem("authServer");
  }

    this.http.post("http://"+authAddress+"/vaprauthentication",formCredentials,httpOptions).subscribe((loginResponse:any) => {
      //console.log("profiledate =")
      //console.log(loginResponse);
      
       
          //localStorage.setItem("authToken",loginResponse.token)
          
         // var payload = this.decodeJWTPayload(loginResponse.token) 
          
         //property this.displayName= loginResponse.profile.profile.displayName
         //property this.loggedIn = true;
        
     this.tokenReceived(loginResponse.token,uName,pWord);
    },
    (error:any) => {
      try{
        switch(error.status){
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
      catch(err)
      {
  
      }
    }
    );
  }


  tokenReceived(receivedToken:any,username:string,password:string){
 
        
  }



private removeSessionToken(){
  sessionStorage.removeItem("currentSession")
}

private decodeJWTPayload (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(atob(base64));
}

public nextVisiblePage(pageValue:string){
  this.currentVisiblePage.next(pageValue)
}


}
