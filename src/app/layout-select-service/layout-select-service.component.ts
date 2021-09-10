import { Component, OnInit, Input } from '@angular/core';

import { Imagen } from '../image.model';
import { ServicioDeDatosService } from '../servicio-de-datos.service';

@Component({
  selector: 'app-layout-select-service',
  templateUrl: './layout-select-service.component.html',
  styleUrls: ['./layout-select-service.component.scss']
})
export class LayoutSelectServiceComponent implements OnInit {

  constructor(private servicioDatos : ServicioDeDatosService) { }
  public image = [
    {
      image: '../../assets/images/btnpequenos/btnP_carpinteria-04.png',
      title: 'Carpintero'
    }
  ];
  
  names = [
    'Julio Mendoza',
    'Juan Pablo Felix',
    'Miguel Santos',
    'Fernando Jimenez'
  ]

  ngOnInit(): void {
    this.servicioDatos.disparadorDatos.subscribe(data => {
      console.log('Recibiendo data'+data);
      this.image.pop();
      this.image.push(data);
    })
  }

  


}
