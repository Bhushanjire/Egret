import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddMemberComponent } from '../add-member/add-member.component';
import { MatDialog } from '@angular/material/dialog';
import { CommanService } from '../comman.service';
import { ToastrService } from 'ngx-toastr';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import {MatSort} from '@angular/material/sort';



export interface userData {
  cust_name: string,
  cust_age: number;
  cust_balance: string;
  cust_company: string;
  cust_status: string;
}

// const ELEMENT_DATA: userData[] = [
//   { id: 1, name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company: 'ACIUM', status: '1' },
//   { id: 2, name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company: 'ACIUM', status: '1' },
//   { id: 3, name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company: 'ACIUM', status: '1' },
//   { id: 4, name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company: 'ACIUM', status: '1' },
//   { id: 5, name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company: 'ACIUM', status: '1' },
//   { id: 6, name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company: 'ACIUM', status: '1' },
//   { id: 7, name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company: 'ACIUM', status: '1' },
//   { id: 8, name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company: 'ACIUM', status: '1' },
//   { id: 9, name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company: 'ACIUM', status: '1' },
//   { id: 10, name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company: 'ACIUM', status: '1' },
//   { id: 11, name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company: 'ACIUM', status: '1' },
//   { id: 12, name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company: 'ACIUM', status: '1' },
//   { id: 13, name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company: 'ACIUM', status: '1' },
//   { id: 14, name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company: 'ACIUM', status: '1' },
//   { id: 15, name: 'Stefanie Marsh', age: 30, balance: '$2,838.08', company: 'ACIUM', status: '1' },
// ];



@Component({
  selector: 'app-curd-table',
  templateUrl: './curd-table.component.html',
  styleUrls: ['./curd-table.component.scss']
})

export class CurdTableComponent implements OnInit {

  postData: any;
  customerData: any;
  dataSource: any;
  customerUpdateData: any;
  tempData: any;

  displayedColumns: string[] = ['cust_name', 'cust_age', 'cust_balance', 'cust_company', 'cust_status', 'cust_action'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(public dialog: MatDialog, private commanServie: CommanService, private toastr: ToastrService) { }
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit() {
    this.customerList();
      }

  openAddEditMember(custData?) {
    const dialogRef = this.dialog.open(AddMemberComponent, {
      width: '700px',
      data: custData ? custData : null
    });

    dialogRef.afterClosed().subscribe(result => {
      this.customerList();
    });
  }
 
  customerList() {
    this.postData = {
      "page_no": 1,
    };
    this.commanServie.customerList(this.postData).subscribe(responce => {
      if (responce.success == false) {
        //this.toastr.error(responce.message);
      } else {
        
        const ELEMENT_DATA: userData[] = responce.data;
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        //this.toastr.success(responce.message);
        console.log(this.dataSource);
        
      }
    });
  }
deleteCustomer(cust_id) {
    this.postData = {
      "cust_id": cust_id
    }
    this.commanServie.deleteCustomer(this.postData).subscribe(responce => {
      if (responce.success == false) {
        this.toastr.error(responce.message);
      } else {
        this.customerList();
        this.toastr.success(responce.message);
      }
    });
  }

  confirmBox(custData){
    const deletedialogRef = this.dialog.open(ConfirmBoxComponent, {
      width: '400px',
      height : '200px',
      data: {
        cust_id : custData.cust_id,
        cust_name : custData.cust_name
      }
    });
  
    deletedialogRef.afterClosed().subscribe(result => {
      if(result=='ok'){
        this.deleteCustomer(custData.cust_id);
       this.customerList();
      }
       
    });
  }
}



