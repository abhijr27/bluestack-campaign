import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private mockData = {
    "data": [{
        "name": "Test Whatsapp",
        "region": "US",
        "createdOn": this.prettyDate(new Date(1559807714999)),
        "price": "Price info of Test Whatsapp",
        "csv": "Some CSV link for Whatsapp",
        "report": "Some report link for Whatsapp",
        "image_url":"./../../assets/80.png" 
      },
      {
        "name": "Super Jewels Quest",
        "region": "CA, FR",
        "createdOn": this.prettyDate(new Date(1559806715124)),
        "price": "Price info of Super Jewels Quest",
        "csv": "Some CSV link for Super Jewels Quest",
        "report": "Some report link for Super Jewels Ques",
        "image_url":"./../../assets/81.png"
      },
      {
        "name": "Mole Slayer",
        "region": "FR",
        "createdOn": this.prettyDate(new Date(1559806711124)),
        "price": "Price info of Mole Slayer",
        "csv": "Some CSV link for Mole Slayer",
        "report": "Some report link for Mole Slayer",
        "image_url":"./../../assets/82.png"
      },
      {
        "name": "Mancala Mix",
        "region": "JP",
        "createdOn": this.prettyDate(new Date(1559806680124)),
        "price": "Price info of Mancala Mix",
        "csv": "Some CSV link for Mancala Mix",
        "report": "Some report link for Mancala Mix",
        "image_url":"./../../assets/83.png"
      }
    ]
  }
  constructor() { }

  public prettyDate(date) {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    return months[date.getUTCMonth()] + ' ' + date.getUTCFullYear() + ', ' + date.getUTCDate();
  }

  getMockData() {
    return this.mockData;
  }

  updatedate(name, date) {
    let dataToModify = this.mockData.data.filter(cv => {
      return name === cv.name;
    });
    dataToModify[0].createdOn = this.prettyDate(date);
  }
}
