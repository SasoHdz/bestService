import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioDeDatosService {

  @Output() disparadorDatos: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
