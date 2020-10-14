import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  form = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email]),  
    mensaje: new FormControl('', Validators.required),
    name : new FormControl(''),
    phone : new FormControl(''),
    localidad : new FormControl(''),
  })
  constructor() {}

  ngOnInit(): void {}
}
