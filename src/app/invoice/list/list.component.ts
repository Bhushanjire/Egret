import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  order_no: number;
  bill_from: string;
  bill_to: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {order_no: 1, bill_from: 'Hydrogen', bill_to: 'test', status: 'H'},
 
];
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['order_no', 'bill_from', 'bill_to', 'status','action'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
