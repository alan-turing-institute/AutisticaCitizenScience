import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsComponent } from './tips.component';
import { DataService } from '../../../services/data.service'
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('TipsComponent', () => {
  let component: TipsComponent;
  let fixture: ComponentFixture<TipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsComponent ],
      providers:[DataService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
