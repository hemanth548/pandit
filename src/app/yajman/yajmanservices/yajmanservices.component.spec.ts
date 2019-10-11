import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YajmanservicesComponent } from './yajmanservices.component';

describe('YajmanservicesComponent', () => {
  let component: YajmanservicesComponent;
  let fixture: ComponentFixture<YajmanservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YajmanservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YajmanservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
