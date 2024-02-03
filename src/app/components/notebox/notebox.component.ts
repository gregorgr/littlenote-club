import { Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck } from '@angular/core';
import { Injectable } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { ServerNameService } from '../../services/server-name.service'



@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-notebox',
  templateUrl: './notebox.component.html',
  styleUrl: './notebox.component.css'
})
export class NoteboxComponent implements OnInit{

  @Input() musicScore= ''
  @Input() imgUrl= ''

  serverName= '';

  @Output() isSelected = new EventEmitter<string>()

  // 1. se zgodi prci
  constructor(private myServerName : ServerNameService){
    this.serverName = myServerName.getServerName();
  }

  // 2. se zgodi, ko pridejo podatki
   ngOnInit():void {}


   // 3. se zgodi ob vsaki spremembi
   ngOnChanges(){}

   // redko, kadar Angular ne posodobi kontrole v 3 stopnji (ngOnChanges)
   ngDoCheck(){}

   serverNameUpdated(event : Event){
     this.serverName = (<HTMLInputElement>event.target).value;
   }

}
