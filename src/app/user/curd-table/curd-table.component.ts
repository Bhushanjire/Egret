import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddMemberComponent } from '../curd-table/add-member/add-member.component'; 
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-curd-table',
  templateUrl: './curd-table.component.html',
  styleUrls: ['./curd-table.component.scss']
})

export class CurdTableComponent implements OnInit {
  animal: string;
  name: string;
  displayedColumns: string[] = ['name', 'age', 'balance', 'company','status','action'];
  dataSource = new MatTableDataSource<userData>(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(public dialog: MatDialog) { }
  ngOnInit() {
  }

  openAddEditMember(){
    const dialogRef = this.dialog.open(AddMemberComponent, {
      width: '500px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  }


export interface userData {
  id:number,
  name: string;
  age: number;
  balance: string;
  company: string;
  status: string;
}

const ELEMENT_DATA: userData[] = [
  {id:1,name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company:'ACIUM',status:'1'},
  {id:2,name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company:'ACIUM',status:'1'},
  {id:3,name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company:'ACIUM',status:'1'},
  {id:4,name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company:'ACIUM',status:'1'},
  {id:5,name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company:'ACIUM',status:'1'},
  {id:6,name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company:'ACIUM',status:'1'},
  {id:7,name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company:'ACIUM',status:'1'},
  {id:8,name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company:'ACIUM',status:'1'},
  {id:9,name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company:'ACIUM',status:'1'},
  {id:10,name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company:'ACIUM',status:'1'},
  {id:11,name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company:'ACIUM',status:'1'},
  {id:12,name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company:'ACIUM',status:'1'},
  {id:13,name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company:'ACIUM',status:'1'},
  {id:14,name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company:'ACIUM',status:'1'},
  {id:15,name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company:'ACIUM',status:'1'},
];