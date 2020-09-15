import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.scss']
})
export class PastComponent implements OnInit {

  constructor(public utilityService: UtilityService) { } 

  ngOnInit() {
  }

}
