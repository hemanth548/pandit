import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YajmanaboutusComponent } from './yajmanaboutus.component';

describe('YajmanaboutusComponent', () => {
  let component: YajmanaboutusComponent;
  let fixture: ComponentFixture<YajmanaboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YajmanaboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YajmanaboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
