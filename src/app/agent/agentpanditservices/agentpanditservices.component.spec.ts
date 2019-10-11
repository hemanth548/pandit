import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentpanditservicesComponent } from './agentpanditservices.component';

describe('AgentpanditservicesComponent', () => {
  let component: AgentpanditservicesComponent;
  let fixture: ComponentFixture<AgentpanditservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentpanditservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentpanditservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
