import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'equipped-gear',
  templateUrl: './equipped-gear.component.html',
  styleUrls: ['./equipped-gear.component.css']
})
export class EquippedGearComponent implements OnInit {

  @Input() ownedGear: any[];
  @Output() equippedChanged = new EventEmitter<any[]>()

  constructor() { }

  ngOnInit() {
  }

  select(item) {

    for(var i = 0; i < this.ownedGear.length; i++) {
      
      if (this.ownedGear[i].type == item.type) {
        this.ownedGear[i].equipped = false;
      }
    }

    item.equipped = true;

    this.onOwnedChanged();
  }

   onOwnedChanged() {

    var equipped = this.ownedGear.filter(x => x.equipped == true)

    this.equippedChanged.emit(equipped);
  }

}