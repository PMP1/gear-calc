import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'configure-gear',
  templateUrl: './configure-gear.component.html',
  styleUrls: ['./configure-gear.component.css']
})
export class ConfigureGearComponent implements OnInit {

  @Input() ownedGear: any[];
  @Output() ownedGearChanged = new EventEmitter();

  private level: number = 0;
  private selectedItem: any;

  constructor() { }

  ngOnInit() {
  }

  select(item) {
    console.log(item);
    this.selectedItem = item;

    if(item.level) {
      this.level = item.level;
    }
  }

  onLevelChange() {
    this.selectedItem.level = +this.level;
    this.ownedGearChanged.emit(this.ownedGear)
  }

}