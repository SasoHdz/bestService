import { Component, OnInit, Input } from '@angular/core';

import { Imagen } from '../image.model';
import { ServicioDeDatosService } from '../servicio-de-datos.service';


@Component({
  selector: 'app-servicio-button',
  templateUrl: './servicio-button.component.html',
  styleUrls: ['./servicio-button.component.scss']
})
export class ServicioButtonComponent implements OnInit {

  constructor(private servicioDatos : ServicioDeDatosService) { }

  ngOnInit(): void {
  }

  @Input() image !: Imagen;

  enviarImage(dataIn:any){
    console.log(dataIn);
    this.servicioDatos.disparadorDatos.emit(dataIn)
  }

}
