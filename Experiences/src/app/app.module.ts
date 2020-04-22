import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './services/data.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ClickOutsideModule } from 'ng-click-outside';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Homepage } from './components/homepage/homepage.component';
import { Loginpage } from './components/loginpage/loginpage.component';
import { ExperiencesComponent } from './components/pages/experiences/experiences.component';
import { TipsComponent } from './components/pages/tips/tips.component';
import { AboutComponent } from './components/pages/about/about.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { ButtonModule } from 'primeng/button';
import { ColorPickerModule } from 'primeng/colorpicker';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DropdownModule} from 'primeng/dropdown';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExperiencesComponent,
    TipsComponent,
    AboutComponent,
    SettingsComponent,
    Homepage,
    Loginpage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClickOutsideModule,
    FormsModule,
    BrowserAnimationsModule,
    ScrollingModule,
    ButtonModule,
    ColorPickerModule,
    OverlayPanelModule,
    DropdownModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
