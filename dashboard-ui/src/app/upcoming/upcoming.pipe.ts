import { Pipe, PipeTransform } from '@angular/core';
import { UtilityService } from '../utility.service';

@Pipe({
  name: 'upcoming'
})
export class UpcomingPipe implements PipeTransform {

  constructor(private utilityService: UtilityService){}
  transform(value: any): any {
    return value.filter(cv => {
      return cv.createdOn > this.utilityService.prettyDate(new Date());
    });
  }

}
