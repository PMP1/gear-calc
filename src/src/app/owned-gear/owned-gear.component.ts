import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'owned-gear',
  templateUrl: './owned-gear.component.html',
  styleUrls: ['./owned-gear.component.css']
})
export class OwnedGearComponent implements OnInit {

  @Input() gear: any[];
  @Output() ownedChanged = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit() {

  }

  select(item) {

    if (item.owned && item.owned == true) {
      item.owned = false;
    } else {
      item.owned = true;
    }

    this.onOwnedChanged();
  }

  selectAll(value) {

    for (var i = 0; i < this.gear.length; i++) {

      this.gear[i].owned = value;
    }

    this.onOwnedChanged();
  }

  onOwnedChanged() {

    var owned = this.gear.filter(x => x.owned == true)

    this.ownedChanged.emit(owned);
  }

}