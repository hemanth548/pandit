import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YajmanpasswordComponent } from './yajmanpassword.component';

describe('YajmanpasswordComponent', () => {
  let component: YajmanpasswordComponent;
  let fixture: ComponentFixture<YajmanpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YajmanpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YajmanpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
