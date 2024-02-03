import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Composition } from '../../../model/composition';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog.component';
import { CompositionServiceService } from '../../../services/composition-service.service';
import { ServerNameService } from '../../../services/server-name.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.css',
  providers: [CompositionServiceService]
})
export class MusicListComponent implements OnInit {

  pdfLogoPath = 'assets/i/pdf-logo.png'

  webserver:string = "";



  compositions: Composition[] = [];
  
  constructor(public dialog: MatDialog,
    private compositionService: CompositionServiceService,
    private serverName: ServerNameService
    ){
      this.webserver = this.serverName.getServerName();
      compositionService.getCompostitions()
      .subscribe({
        next: (compositionArray) => this.compositions = compositionArray
      });

  }

  ngOnInit(){

  }

  serverNameUpdated(event : Event){
    //this.serverName = (<HTMLInputElement>event.target).value;
  }

  findCompositionById(id: number): Composition | undefined {
    return this.compositions.find(composition => composition.composition_id === id);
  }

  openDeleteConfirmationDialog(index: number, dataText: string): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      data: { text: dataText }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Uporabnik je kliknil "Da", izbriši sestavo

        //console.log("rezultat: "+result);
        console.log("brišem: " + index + ": " +dataText)
        this.compositions.splice(index, 1);
       // console.log(`Sestava z ID ${index} je bila izbrisana.`);

       
        //this.deleteComposition(id);
      } else {
        console.log("NE brišem: " + index + ": " +dataText)
        // Uporabnik je kliknil "Ne", ne naredi nič
      }
    });
  }

  removeComposition(event : number){
    const index = this.compositions.findIndex(composition => composition.composition_id === event);
    const title = this.compositions[index].title?.toString();

    if (index !== -1) {
      this.openDeleteConfirmationDialog(index, title as string);

    }
  }

}
