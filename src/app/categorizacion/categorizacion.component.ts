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
      titleCard: 'MARCO BASICO "LEY 24901"',
      description:
        'Somos expertos en el instrumento de evaluacion NECESARIO para CATEGORIZAR y ACREDITAR los servicios de atención a las personas con discapacidad y a los efectos de su incorporación al Registro Nacional de Prestadores de Servicios de Atención de Personas con Discapacidad',
      modalityDescription: [
        'Estimulación temprana',
        'Educacion Inicial',
        'Educacion General Básica',
        'Servicio de integración en escuela común',
        'Formación Laboral',
        'Centro de Día',
        'Centro Educativo Terapéutico',
        'Centro de rehabilitación para personas con dicapasidad visual',
        'Hogar',
      ],
      icon: '../../assets/05.png',
    },
    {
      titleCard: 'RESOLUCIÓN 47/2001 REHABILITACIÓN',
      description:
        'Somos expertos en el instrumento de evaluación NECESARIO para la categorización de establecimientos de rehabilitación.',
      modalityDescription: ['Centros, Clínicas, Sanatorios, institutos'],
      icon: '../../assets/06.png',
    },
  ];
  ngOnInit(): void {}
}
