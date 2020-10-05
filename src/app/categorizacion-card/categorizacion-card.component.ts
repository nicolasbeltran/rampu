import { Component, Input, OnInit } from '@angular/core';
import { Modality } from '../model/modality.model';

@Component({
  selector: 'categorizacion-card',
  templateUrl: './categorizacion-card.component.html',
  styleUrls: ['./categorizacion-card.component.css'],
})
export class CategorizacionCardComponent implements OnInit {
  constructor() {}
  @Input() modality: Modality;

  ngOnInit(): void {}
}
