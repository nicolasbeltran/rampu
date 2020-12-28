import { Component, OnInit } from '@angular/core';
import { Modality } from '../model/modality.model';

@Component({
  selector: 'categorizacion',
  templateUrl: './categorizacion.component.html',
  styleUrls: ['./categorizacion.component.css'],
})
export class CategorizacionComponent implements OnInit {
  constructor() {}
  modalities: Modality[] = [
    {
      titleCard: 'MARCO BÁSICO "LEY 24901"',
      description:
        'Somos expertos en el instrumento de evaluación NECESARIO para CATEGORIZAR y ACREDITAR los servicios de atención a las personas con discapacidad y a los efectos de su incorporación al Registro Nacional de Prestadores de Servicios de Atención de Personas con Discapacidad',
      modalityDescription: [
        'Estimulación Temprana',
        'Educación Inicial',
        'Educación General Básica',
        'Servicio de Integración en escuela común',
        'Formación Laboral',
        'Centro de Día',
        'Centro Educativo Terapéutico',
        'Centro de Rehabilitación para personas con dicapacidad visual',
        'Hogar',
      ],
      icon: './assets/05.png',
      id: 1
    },
    {
      titleCard: 'RESOLUCIÓN 47/2001 REHABILITACIÓN',
      description:
        'Somos expertos en el instrumento de evaluación NECESARIO para la categorización de establecimientos de rehabilitación.',
      modalityDescription: ['Centros, Clínicas, Sanatorios, Institutos'],
      icon: './assets/06.png',
      id: 2
    },
  ];
  ngOnInit(): void {}
}
