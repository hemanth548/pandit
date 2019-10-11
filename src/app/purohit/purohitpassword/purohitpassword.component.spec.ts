import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurohitpasswordComponent } from './purohitpassword.component';

describe('PurohitpasswordComponent', () => {
  let component: PurohitpasswordComponent;
  let fixture: ComponentFixture<PurohitpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurohitpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurohitpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
