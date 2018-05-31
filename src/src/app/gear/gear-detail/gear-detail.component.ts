import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gear-detail',
  templateUrl: './gear-detail.component.html',
  styleUrls: ['./gear-detail.component.css']
})
export class GearDetailComponent implements OnInit {

  @Input() gear: any;

  constructor() { }

  ngOnInit() {
  }

}