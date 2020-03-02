import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginpage } from './loginpage.component';

describe('LoginpageComponent', () => {
  let component: Loginpage;
  let fixture: ComponentFixture<Loginpage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loginpage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Loginpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
