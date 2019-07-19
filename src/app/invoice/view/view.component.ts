import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{InvoiceService} from '../invoice.service';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
];

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  displayedColumns: string[] = ['position', 'item_name', 'unit_price', 'unit','cost'];
  dataSource = ELEMENT_DATA;
  constructor(private route: ActivatedRoute,private invoice : InvoiceService,private router: Router) { }
  order_id : number;
  order_number : number;
  seller_name : any;
  seller_address: any;
  buyer_name: any;
  buyer_address: any;
  sub_total: any;
  vat: any;
  grand_total: any;
  order_status: any;
  order_date: any;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      let data={
        "invoice_id" : params.order_id
      }
      this.invoice.getInvoiceDetails(data).subscribe(responce =>{
        if(responce.success==true){
          this.dataSource = responce.data;
          this.order_id = responce.data[0].order_id;
          this.order_number = responce.data[0].order_number;          
          this.seller_name = responce.data[0].seller_name;
          this.seller_address = responce.data[0].seller_address;
          this.buyer_name = responce.data[0].buyer_name;
          this.buyer_address=responce.data[0].buyer_address;
          this.sub_total=responce.data[0].sub_total;
          this.vat=responce.data[0].vat;
          this.grand_total=responce.data[0].grand_total;
          this.order_status=responce.data[0].order_status;
          this.order_date=responce.data[0].order_date
        }else{

        }

      });

  })
  }
  editInvoice(id){
    this.router.navigate(['/user/invoice/add'],{ queryParams: { order_id: id } }).then(nav => {
    }, err => {
    });
  }


}
