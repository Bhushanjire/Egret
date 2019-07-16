import { Component, OnInit,Input } from '@angular/core';
import {FormArray, FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { validateBasis } from '@angular/flex-layout';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  //@Input() inputArray: ArrayType[];
  //@Input() inputArray: Array<{Array}>;
  @Input() inputArray = [];
  orderForm: FormGroup ;
  items: FormArray;


 
  constructor(private fb: FormBuilder) { }

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
      console.log("length",this.inputArray.length);
      
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
  }
  placeOrder(data){
    console.log("Place Order=",data);
    this.items = this.orderForm.get('formArray') as FormArray;
    console.log("items",this.items);
  }


  addItem(){
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
