import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Service } from '../model/service.model';

@Component({
  selector: 'card-servicios',
  templateUrl: './card-servicios.component.html',
  styleUrls: ['./card-servicios.component.css'],
})
export class CardServiciosComponent implements OnInit {
  @Input() servicio: Service;
  constructor() {}

  ngOnInit(): void {}
}
