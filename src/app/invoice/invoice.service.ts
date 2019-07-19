import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private httpClient : HttpClient) { }
  createInvoiceService(data){
    return this.httpClient.post('http://localhost/egret_api/api/invoice/createInvoice',data).pipe(map((res:any)=>res));
  }
  invoiceListService(){
    return this.httpClient.get('http://localhost/egret_api/api/invoice/invoiceList').pipe(map((res:any)=>res));
  }
  deleteInvoice(data){
    return this.httpClient.post('http://localhost/egret_api/api/invoice/deleteInvoice',data).pipe(map((res:any)=>res));
  }
  getInvoiceDetails(data){
    return this.httpClient.post('http://localhost/egret_api/api/invoice/getInvoiceDetails',data).pipe(map((res:any)=>res));
  }
}
