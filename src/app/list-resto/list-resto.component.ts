import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service'
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
 users:any;
  constructor(private restoDetail:RestoService) {
    restoDetail.users().subscribe((data)=>
    {
      console.log("data:",data);
      this.users=data
    });
   
   }

  ngOnInit(): void {
  }

}
