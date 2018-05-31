import { Component } from '@angular/core';
import { GearService } from './gear/gear.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [GearService]
})
export class AppComponent  {
  name = 'Angular 6';

  gear: any[];
  ownedGear: any[];
  equippedGear: any[];

  constructor(private gearService: GearService)  {

    this.gear = gearService.getGear();

    var owned = localStorage.getItem('owned');
    var equipped = localStorage.getItem('equipped');

    console.log(owned);
    if(owned) {
      this.processSavedOwnedData(JSON.parse(owned));

      if (equipped) {
        this.processSavedEquippedData(JSON.parse(equipped));
        //this.equippedGear = JSON.parse(equipped);
      }
    }
  }

  processSavedOwnedData(owned: any[]) {

    for(var i = 0; i < owned.length; i++) {
      
      this.gear.find(x => x.id == owned[i].id).owned = true;
    }

    this.ownedGear = owned;
  }

  processSavedEquippedData(equipped: any[]) {

    for(var i = 0; i < equipped.length; i++) {
      
      this.ownedGear.find(x => x.id == equipped[i].id).equipped = true;
    }

    this.equippedGear = equipped;
  }
  

  ownedChanged(owned) {
    this.ownedGear = owned;
    localStorage.setItem('owned', JSON.stringify(this.ownedGear));
  }

  equippedChanged(equipped) {
    this.equippedGear = equipped;
    localStorage.setItem('equipped', JSON.stringify(this.equippedGear));
  }

}
