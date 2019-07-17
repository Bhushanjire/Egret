import { Component, OnInit } from '@angular/core';
import{InvoiceService} from '../invoice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

export interface InvoiceElement {
  order_no: number;
  bill_from: string;
  bill_to: string;
  status: string;
}

const ELEMENT_DATA: InvoiceElement[] = [
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
  constructor(private invoice : InvoiceService,private toastr: ToastrService,private router: Router) { }
  postData : any;
  ngOnInit() {
    this.invoiceList();
  }
  invoiceList(){
    this.invoice.invoiceListService().subscribe(responce=>{
      this.dataSource = responce.data;
    });
  }
  deleteInvoice(id){
   this.postData ={
     "invoice_id" : id
   }
    this.invoice.deleteInvoice(this.postData).subscribe(responce=>{
      if(responce.success==true){
        this.toastr.success(responce.message);
        this.invoiceList();
      }else{
        this.toastr.error(responce.message);
      }
    });
  }
  viewInvoice(id){
    this.router.navigate(['/user/invoice/view'],{ queryParams: { order_id: id } }).then(nav => {
    }, err => {
    });
  }
}