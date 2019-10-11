import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentusersComponent } from './agentusers.component';

describe('AgentusersComponent', () => {
  let component: AgentusersComponent;
  let fixture: ComponentFixture<AgentusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
