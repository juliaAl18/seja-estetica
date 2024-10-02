import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-botox',
  templateUrl: './modal-botox.component.html',
  styleUrls: ['./modal-botox.component.scss']
})
export class ModalBotoxComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalBotoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  close(): void {
    this.dialogRef.close();
  }

}
