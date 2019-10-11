import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurohitprofileComponent } from './purohitprofile.component';

describe('PurohitprofileComponent', () => {
  let component: PurohitprofileComponent;
  let fixture: ComponentFixture<PurohitprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurohitprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurohitprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
