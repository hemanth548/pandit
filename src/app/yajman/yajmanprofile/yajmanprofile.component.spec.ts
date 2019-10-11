import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YajmanprofileComponent } from './yajmanprofile.component';

describe('YajmanprofileComponent', () => {
  let component: YajmanprofileComponent;
  let fixture: ComponentFixture<YajmanprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YajmanprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YajmanprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
