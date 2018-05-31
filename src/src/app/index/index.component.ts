import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  @Input() gear:any[];

  selectedItem: any;

  constructor() { }

  ngOnInit() {

  }

  select(item) {
    console.log(item);
    this.selectedItem = item;
  }


}