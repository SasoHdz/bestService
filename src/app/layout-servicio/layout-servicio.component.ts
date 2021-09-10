import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-layout-servicio',
  templateUrl: './layout-servicio.component.html',
  styleUrls: ['./layout-servicio.component.scss']
})
export class LayoutServicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    {
      image: '../../assets/images/btnpequenos/btnP_carpinteria-04.png',
      title: 'Carpintero'
    },
    {
      image: '../../assets/images/btnpequenos/btnP_cocina-04.png',
      title: 'Cocina'
    },
    {
      image: '../../assets/images/btnpequenos/btnP_electricista-04.png',
      title: 'Electricista'
    },
    {
      image: '../../assets/images/btnpequenos/btnP_limpieza-04.png',
      title: 'Limpieza'
    },
    {
      image: '../../assets/images/btnpequenos/btnP_pintado-04.png',
      title: 'Pintado'
    },
    {
      image: '../../assets/images/btnpequenos/btnP_seguridad-04.png',
      title: 'Seguridad'
    },
    {
      image: '../../assets/images/btnpequenos/btnP_serviciotecnico-04.png',
      title: 'Servicio Tecnico'
    },
    {
      image: '../../assets/images/btnpequenos/btnP_transporte-04.png',
      title: 'Transporte'
    },
    {
      image: '../../assets/images/btnpequenos/btnP_otros-04.png',
      title: 'Otros'
    }
  ]

}
