import { Component, OnInit } from '@angular/core';
import { Service } from '../model/service.model';
@Component({
  selector: 'servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit {

  servicios: Service[];
  constructor() {}

  ngOnInit(): void {
    this.servicios = [
      {
        title: 'NUEVOS PROYECTOS EDILICIOS',
        description:
          'Para hogares, Centros de Día, Centro Educativo Terapéutico, Educación general básica, Formación Laboral, Apoyo a la Integración y Rehabilitacion',
        icon: './assets/01.png',
      },
      {
        title: 'AJUSTE DE PLANTA FÍSICA EXISTENTE',
        description:
          'Adecuando lo necesario para arribar a un proyecto acreditable, eficiente y rentable.',
        icon: './assets/02.png',
      },
      {
        title: 'OPTIMIZACIÓN DE LA PLANTA FÍSICA',
        description:
          'Para categorizar, recategorizar y/o ampliar la capacidad edilicia existente que se traducirá en mayor rentabilidad.',
        icon: './assets/03.png',
      },
      {
        title: 'ESTRATEGIA DE GESTIÓN',
        description:
          'Desarrollo de una planificación estratégica, gestionándola de manera satisfactoria y ágil.',
        icon: './assets/04.png',
      },
    ];
  }

}
