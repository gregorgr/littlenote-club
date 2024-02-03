import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Composition } from '../../../model/composition';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CompositionServiceService } from '../../../services/composition-service.service';
import { ServerNameService } from '../../../services/server-name.service';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-create-composition',
  templateUrl: './create-composition.component.html',
  styleUrl: './create-composition.component.css',
  providers: [CompositionServiceService]
})
export class CreateCompositionComponent  {
  isEditMode = true;
  public confirmed = false;
  webserver:string = "";
  composition!: Composition;
  // public dialog: MatDialog,
  constructor(
    private serverName: ServerNameService,
    private compositionService: CompositionServiceService,
    private messageService: MessageService
    
    ){
      this.webserver = this.serverName.getServerName();
    
      this.initializeCompositiont();
    /*  compositionService.getCompostitions()
      .subscribe({
        next: (compositionArray) => this.compositions = compositionArray
      });*/

  }

  editComposition() {
    this.isEditMode = true;
   // this.editedComposition = { ...this.composition };
  }

  saveComposition() {
    // You can add additional validation before saving
   // this.composition = { ...this.editedComposition };
    this.isEditMode = false;
  }

  cancelEdit() {
    this.isEditMode = false;
  }

  submit(productForm: NgForm){
    if(productForm.valid){
      this.compositionService.createCompostition(this.composition)
        .subscribe({
          next: (result) => {
            this.messageService.setMessage(result.msg);
            this.initializeCompositiont();
          },
          error: (error) => this.messageService.setMessage(error)
        })
    }else{
      this.messageService.setMessage("The form is in invalid state!");
    }
  }


  initializeCompositiont(){
    this.composition = {
     // composition_id?: number,
      title: "",
      composer: "",
     // public description?: string,
      liricist: "",
      links: [],
      type: "razno",   
      preview: "", 
      uri:""
      // public imagePath?: string
    }
  }

/*
  ngOnInit(){

  }*/

}
