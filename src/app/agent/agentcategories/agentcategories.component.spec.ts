import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentcategoriesComponent } from './agentcategories.component';

describe('AgentcategoriesComponent', () => {
  let component: AgentcategoriesComponent;
  let fixture: ComponentFixture<AgentcategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentcategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
