import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurohitservicesComponent } from './purohitservices.component';

describe('PurohitservicesComponent', () => {
  let component: PurohitservicesComponent;
  let fixture: ComponentFixture<PurohitservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurohitservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurohitservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
