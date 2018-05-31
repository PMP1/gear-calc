import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gear-button',
  templateUrl: './gear-button.component.html',
  styleUrls: ['./gear-button.component.css']
})
export class GearButtonComponent implements OnInit {

  @Input() gear: any;
  @Input() selected: boolean = false;
  @Input() related: boolean = false;
  @Input() badge: string = "";
  @Output() clicked = new EventEmitter<boolean>();

  
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.clicked.emit(this.gear);
  }

}