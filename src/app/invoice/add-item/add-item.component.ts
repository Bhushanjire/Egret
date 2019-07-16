import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Input() myForm: FormGroup; // This component is passed a FormGroup from the base component template
  itemForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.itemForm = new FormGroup({
      "item_name" : new FormControl(null,Validators.required),
      "item_price" : new FormControl(null,Validators.required),
      "item_unit" : new FormControl(null,Validators.required) 
     });
  }

}
