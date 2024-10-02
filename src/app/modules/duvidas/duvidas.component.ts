import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalBotoxComponent } from './modal-botox/modal-botox.component';

@Component({
  selector: 'app-duvidas',
  templateUrl: './duvidas.component.html',
  styleUrls: ['./duvidas.component.scss']
})
export class DuvidasComponent {

  constructor(public dialog: MatDialog) { }

  openModal(procedure: { title: string; description: string, title2: string, description2: string }): void {
    this.dialog.open(ModalBotoxComponent, {
      width: '1200px',
      data: procedure
    });
  }
}
