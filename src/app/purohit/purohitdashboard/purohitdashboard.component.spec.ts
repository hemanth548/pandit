import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurohitdashboardComponent } from './purohitdashboard.component';

describe('PurohitdashboardComponent', () => {
  let component: PurohitdashboardComponent;
  let fixture: ComponentFixture<PurohitdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurohitdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurohitdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
