import { Component, OnInit, Input } from '@angular/core';

import { Imagen } from '../image.model';


@Component({
  selector: 'app-servicio-button',
  templateUrl: './servicio-button.component.html',
  styleUrls: ['./servicio-button.component.scss']
})
export class ServicioButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() image !: Imagen;
}
