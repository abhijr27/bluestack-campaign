import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-campaign-col',
  templateUrl: './campaign-col.component.html',
  styleUrls: ['./campaign-col.component.scss']
})
export class CampaignColComponent implements OnInit {
  
  @Input() rowInfo;
  constructor() { }

  ngOnInit() {
  }

}
