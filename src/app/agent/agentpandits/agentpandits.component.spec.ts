import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentpanditsComponent } from './agentpandits.component';

describe('AgentpanditsComponent', () => {
  let component: AgentpanditsComponent;
  let fixture: ComponentFixture<AgentpanditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentpanditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentpanditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
