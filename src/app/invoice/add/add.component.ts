import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { validateBasis } from '@angular/flex-layout';
import { InvoiceService } from '../invoice.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  //@Input() inputArray: ArrayType[];
  //@Input() inputArray: Array<{Array}>;
  @Input() inputArray = [];
  orderForm: FormGroup;
  items: FormArray;

  order_id: any;
  order_number: any;
  seller_name: any;
  seller_address: any;
  buyer_name: any;
  buyer_address: any;
  sub_total: any;
  vat: any;
  grand_total: any;
  order_status: any;
  order_date: any;
  currency: any;
  editFlag = false;
  invoice_id = 0;
  newForm: FormGroup
  total: number = 0;
  vatAmount: any;


  constructor(private fb: FormBuilder, private invoice: InvoiceService, private toastr: ToastrService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.newForm = this.fb.group({
      order_number: [this.order_number, [Validators.required]],
      order_status: [this.order_status, [Validators.required]],
      order_date: [this.order_date, [Validators.required]],
      seller_name: [this.seller_name, [Validators.required]],
      seller_address: [this.seller_address, [Validators.required]],
      buyer_name: [this.buyer_name, [Validators.required]],
      buyer_address: [this.buyer_address, [Validators.required]],
      invoice_id: [this.invoice_id, [Validators.required]],
      vat: [this.vat, [Validators.required]],
      currency: [this.currency, [Validators.required]],
      sub_total: [this.sub_total, [Validators.required]],
      formArray: this.fb.array([])
    });
    // this.orderForm = new FormGroup({
    //   "order_number" : new FormControl(null,Validators.required),
    //   "order_status" : new FormControl(null,Validators.required),
    //   "order_date" : new FormControl(null,Validators.required),
    //   "seller_name" : new FormControl(null,Validators.required),
    //   "seller_address" : new FormControl(null,Validators.required),
    //   "buyer_name" : new FormControl(null,Validators.required),
    //   "buyer_address" :new FormControl(null,Validators.required) 
    //  });
    this.orderForm = this.newForm;
    const arrayControl = <FormArray>this.newForm.controls['formArray'];
    //console.log("length", this.inputArray.length);
    this.route.queryParams.subscribe(params => {
      if (params.order_id) {
        let data = {
          "invoice_id": params.order_id
        }
        this.invoice.getInvoiceDetails(data).subscribe(responce => {
          if (responce.success == true) {
            //this.dataSource = responce.data;
            this.order_id = responce.data[0].order_id;
            this.order_number = responce.data[0].order_number;
            this.seller_name = responce.data[0].seller_name;
            this.seller_address = responce.data[0].seller_address;
            this.buyer_name = responce.data[0].buyer_name;
            this.buyer_address = responce.data[0].buyer_address;
            this.sub_total = responce.data[0].sub_total;
            this.vat = responce.data[0].vat;
            this.grand_total = responce.data[0].grand_total;
            this.order_status = responce.data[0].order_status;
            this.order_date = responce.data[0].order_date
            this.orderForm.patchValue({
              "order_number": responce.data[0].order_number,
              "seller_name": responce.data[0].seller_name,
              "seller_address": responce.data[0].seller_address,
              "buyer_name": responce.data[0].buyer_name,
              "buyer_address": responce.data[0].buyer_address,
              "order_status": responce.data[0].order_status,
              "order_date": responce.data[0].order_date,
              "invoice_id": responce.data[0].order_id,
              "vat": responce.data[0].vat,
              "currency": responce.data[0].currency
            });

            for (let i = 0; i < responce.data.length; i++) {
              let newGroup = this.fb.group({
                item_name: [responce.data[i].item_name, [Validators.required]],
                item_price: [responce.data[i].item_price, [Validators.required]],
                item_unit: [responce.data[i].item_unit, [Validators.required]]
                /* Fill this in identically to the one in ngOnInit */
              });
              arrayControl.push(newGroup);
            }
          } else {

          }

        });
        this.editFlag = true;
      } else {
        this.inputArray.forEach(item => {
          let newGroup = this.fb.group({
            item_name: ['', [Validators.required]],
            item_price: ['', [Validators.required]],
            item_unit: ['', [Validators.required]],
          });
          arrayControl.push(newGroup);
        });
        let newGroup = this.fb.group({
          item_name: [null, [Validators.required]],
          item_price: [null, [Validators.required]],
          item_unit: [null, [Validators.required]]
          /* Fill this in identically to the one in ngOnInit */
        });
        arrayControl.push(newGroup);
      }
    });
  }
  placeOrder(data) {
    console.log(data.value.length, data.value);

    if (data.value) {
      if (data.value.formArray.length > 0) {
        this.invoice.createInvoiceService(data.value).subscribe(responce => {
          if (responce.success == true) {
            this.toastr.success(responce.message);
            this.orderForm.reset();
          } else {
            this.toastr.error(responce.message);
          }
          //console.log("responce", responce);
        });
      } else {
        this.toastr.error('Please,add atleast one item');
      }
    } else {
      this.toastr.error('Please,fill all the details');
    }
    // console.log("Place Order=",data);
    //this.items = this.orderForm.get('formArray') as FormArray;
    // console.log("items",data.value.formArray);
  }


  addItem() {
    const arrayControl = <FormArray>this.orderForm.controls['formArray'];
    let newGroup = this.fb.group({
      item_name: [null, [Validators.required]],
      item_price: [null, [Validators.required]],
      item_unit: [null, [Validators.required]]
      /* Fill this in identically to the one in ngOnInit */
    });
    arrayControl.push(newGroup);
  }

  deleteItem(index: number): void {
    const arrayControl = <FormArray>this.orderForm.controls['formArray'];
    arrayControl.removeAt(index);
  }

  getSubTotal(): number {
    this.total = 0;
    if (this.newForm.controls.formArray['controls'].length > 0) {
      for (let item of this.newForm.controls.formArray['controls']) {
        //console.log("item_price",item.value['item_price']);
        this.total = this.total + (item.value['item_price'] * item.value['item_unit']);
        //  console.log("total",this.total);
      }
      // console.log(this.orderForm.controls.vat.value);
      this.orderForm.patchValue({
        "sub_total": this.total
      });
      // console.log(this.vat);
      return this.total;
    } else {
      return this.total;
    }
  }
}