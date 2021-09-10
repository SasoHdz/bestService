import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-select-service',
  templateUrl: './layout-select-service.component.html',
  styleUrls: ['./layout-select-service.component.scss']
})
export class LayoutSelectServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  names = [
    'Julio Mendoza',
    'Juan Pablo Felix',
    'Miguel Santos',
    'Fernando Jimenez'
  ]

}
