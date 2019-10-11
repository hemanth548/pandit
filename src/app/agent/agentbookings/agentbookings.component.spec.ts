import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentbookingsComponent } from './agentbookings.component';

describe('AgentbookingsComponent', () => {
  let component: AgentbookingsComponent;
  let fixture: ComponentFixture<AgentbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
