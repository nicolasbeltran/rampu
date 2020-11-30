import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contactar',
  templateUrl: './contactar.component.html',
  styleUrls: ['./contactar.component.css']
})
export class ContactarComponent implements OnInit {

   show:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
