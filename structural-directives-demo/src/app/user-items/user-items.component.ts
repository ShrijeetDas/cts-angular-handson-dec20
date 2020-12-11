import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-items',
  templateUrl: './user-items.component.html',
  styleUrls: ['./user-items.component.css']
})
export class UserItemsComponent {
  employees : any = [
    {"id": 101, "name" : "Alexandar", "salary":30000, address : {"state":"KA", "city": "BLR"}}, 
    {"id": 102, "name" : "Bruce", "salary":40000, address : undefined}, 
    {"id": 103, "name" : "Charles", "salary":20000, address : undefined},
    {"id": 104, "name" : "David", "salary":50000, address : {"state":"MH", "city": "MUM"}}    
  ]
}
