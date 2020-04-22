import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepage } from './homepage.component';

describe('HomepageComponent', () => {
  let component: Homepage;
  let fixture: ComponentFixture<Homepage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homepage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
