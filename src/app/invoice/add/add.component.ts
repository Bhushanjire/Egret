import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { validateBasis } from '@angular/flex-layout';
import { InvoiceService } from '../invoice.service';
import { ToastrService } from 'ngx-toastr';



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



  constructor(private fb: FormBuilder, private invoice: InvoiceService, private toastr: ToastrService) { }

  ngOnInit() {

    let newForm = this.fb.group({
      order_number: [null, [Validators.required]],
      order_status: [null, [Validators.required]],
      order_date: [null, [Validators.required]],
      seller_name: [null, [Validators.required]],
      seller_address: [null, [Validators.required]],
      buyer_name: [null, [Validators.required]],
      buyer_address: [null, [Validators.required]],
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
    this.orderForm = newForm;
    const arrayControl = <FormArray>newForm.controls['formArray'];
    console.log("length", this.inputArray.length);

    this.inputArray.forEach(item => {
      let newGroup = this.fb.group({
        item_name: ['', [Validators.required]],
        item_price: ['', [Validators.required]],
        item_unit: ['', [Validators.required]],
      });
      arrayControl.push(newGroup);
    });

    //   let newForm = this.fb.group({
    //     item_name: [null, [Validators.required]],
    //     item_price: [null, [Validators.required]],
    //     item_unit: [null, [Validators.required]],
    //     formArray: this.fb.array([])
    // });
    let newGroup = this.fb.group({
      item_name: [null, [Validators.required]],
      item_price: [null, [Validators.required]],
      item_unit: [null, [Validators.required]]
      /* Fill this in identically to the one in ngOnInit */
    });
    arrayControl.push(newGroup);


  }
  placeOrder(data) {
    if (data.value.length > 0) {
      if (data.value.formArray.length > 0) {
        this.invoice.createInvoiceService(data.value).subscribe(responce => {
          if (responce.success == true) {
            this.toastr.success(responce.message);
            this.orderForm.reset();
          } else {
            this.toastr.error(responce.message);
          }
          console.log("responce", responce);
        });
      } else {
        this.toastr.error('Please,add atleast one item');
      }
    }else{
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

}
