import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionColComponent } from './action-col.component';

describe('ActionColComponent', () => {
  let component: ActionColComponent;
  let fixture: ComponentFixture<ActionColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
