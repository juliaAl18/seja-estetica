import { Component } from '@angular/core';

@Component({
  selector: 'app-experimente',
  templateUrl: './experimente.component.html',
  styleUrls: ['./experimente.component.scss']
})
export class ExperimenteComponent {

  selectedProcedure: any = {};

  procedures = [
    {
      name: 'Preenchimento Facial',
      marker: 'hiro',
      geometry: 'primitive: box',
      material: 'color: #ff5722; opacity: 0.8;',
    },
    {
      name: 'Botox',
      marker: 'hiro',
      geometry: 'primitive: sphere',
      material: 'color: #2196F3; opacity: 0.8;',
    },
    {
      name: 'Harmonização Facial',
      marker: 'hiro',
      geometry: 'primitive: cylinder',
      material: 'color: #4CAF50; opacity: 0.8;',
    },
  ];

  constructor() {
    this.selectedProcedure = this.procedures[0];
  }

  selectProcedure(procedure: any) {
    this.selectedProcedure = procedure;
  }

  startExperience() {
    alert('Experiência de Realidade Aumentada iniciada para: ' + this.selectedProcedure.name);
  }

}
