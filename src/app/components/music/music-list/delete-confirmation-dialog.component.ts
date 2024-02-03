import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation-dialog',
  template: `
 <div class="custom-dialog">
      <h2 mat-dialog-title>Ali res želite izbrisati?</h2>
      <div mat-dialog-content>
      <p>Podatke o skladbi:</p>
        <h2>{{ data.text }}</h2>
    
        <p>Pozor: Podatki bodo trajno izbrisani</p>
      </div>
      <div mat-dialog-actions  class="example-button-row">
        <button mat-stroked-button color="primary" class="no-button mat-stroked-button" (click)="onNoClick()">Ne</button>
        <button mat-stroked-button color="warn" class="yes-button mat-stroked-button" (click)="onYesClick()">Da</button>
      </div>
    </div>
  `,
  styles: [`
  button{
    margin-right: 30px;
    padding:  8px 30px;
    border-radius: 5px;
  }
  .example-button-row{
    margin-right: 30px;
    padding:  8px 30px 8px 0px;
    border-radius: 5px;
  }

  .no-button {
      background-color: #ccc; /* Dodajte želene barve ozadja */
      color: #333; /* Dodajte želeno barvo besedila */
      margin-right: 20px; /* Dodajte želeno razmikanje med gumbi */
    }

    .yes-button {
      background-color: #007bff; /* Dodajte želene barve ozadja */
      color: #fff; /* Dodajte želeno barvo besedila */
    }

  .custom-dialog {

    margin: 20px 100px; /* Dodajte želeno margino */
    /*border: 2px solid #ccc; */ /* Dodajte želen stil obrobe */
    border-radius: 20px; /* Dodajte želeno obliko */
    padding: 16px; /* Dodajte želen padding */
  }
`]
})
export class DeleteConfirmationDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { text: string }
      ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}