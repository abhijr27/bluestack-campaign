import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignColComponent } from './campaign-col.component';

describe('CampaignColComponent', () => {
  let component: CampaignColComponent;
  let fixture: ComponentFixture<CampaignColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
