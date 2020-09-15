import { Component, OnInit, ViewChild, HostListener, Input } from '@angular/core';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-action-col',
  templateUrl: './action-col.component.html',
  styleUrls: ['./action-col.component.scss']
})
export class ActionColComponent implements OnInit {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective;
  public bdCalender;
  @Input() row;
  constructor(private utilityService: UtilityService) { }
  @HostListener('window:scroll')
  onScrollEvent() {
    this.datepicker.hide();
  }
  ngOnInit() {
  }

  onValueChange(event) {
    console.log(event, this.row)
    this.utilityService.updatedate(this.row.name, event);
    console.log(this.utilityService.getMockData())
  }

}
