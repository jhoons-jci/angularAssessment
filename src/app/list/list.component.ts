import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormlistService } from '../formlist.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  constructor(private list:FormlistService) { }


users:User[];

  ngOnInit(): void {
    this.list.getList().subscribe((data:User[])=>{
console.warn(data);
this.users=data;
    })
  }


}
