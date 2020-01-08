import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../../../services/data.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { SettingsComponent } from './settings.component';
import { FormsModule }    from '@angular/forms';

import { ColorPickerModule } from 'primeng/colorpicker';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import {DropdownModule} from 'primeng/dropdown';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsComponent ],
      imports: [FormsModule,
      ColorPickerModule,
      OverlayPanelModule,
      DropdownModule
    ],
    providers: [DataService, HttpClient, HttpHandler],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
