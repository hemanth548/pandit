import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YajmandashboardComponent } from './yajmandashboard.component';

describe('YajmandashboardComponent', () => {
  let component: YajmandashboardComponent;
  let fixture: ComponentFixture<YajmandashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YajmandashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YajmandashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
