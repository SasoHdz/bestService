import { Component, OnInit } from '@angular/core';
import { MaterialModule} from './../material/material.module';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  parrafo = [
    `Somos un aplicativo que te guía y acompaña en tu 
   necesidad de solucionar algún problema regular,
   un imprevisto o en relación al trajin del día a día.`,

   `Te contactamos con la fuerza laboral confiable,
   verificada, formal a precio accesible y con 
   trazabilidad de servicio.`,

   `Queremos que sepas que al usar este sistema ya 
   eres parte de la solución. Combatiendo la informalidad
   que tanto daño le hace la país, mejorando la calidad de
   vide en nuestra sociedad, así como mejorar la productividad
   y oportunidad a través de esta gran herramienta tecnológica.`
  ];

}
