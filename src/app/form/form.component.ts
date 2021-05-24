import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { FormlistService } from '../formlist.service';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
alert :boolean=false;
user: User=new User();

  constructor(private data:FormlistService) { }

  ngOnInit(): void {
  }

  clearForm() {
this.user.name='';
this.user.email='';
this.user.phone='';
this.user.address='';
  }

  closeAlert(){
    this.alert=false;
  }
  
  onSubmit(){ 

let resp=this.data.saveValue(this.user);
resp.subscribe((data)=>{
  console.log(data);
})
this.alert=true;
this.clearForm();
  }

}
