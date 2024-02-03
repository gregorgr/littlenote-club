import { Component,Input, EventEmitter, Output, OnInit, OnChanges, DoCheck, input   } from '@angular/core';
import { Composition } from '../../../model/composition';

@Component({
  selector: 'app-music-note',
  templateUrl: './music-note.component.html',
  styleUrl: './music-note.component.css'
})
export class MusicNoteComponent implements OnInit{
  @Input() webserver? : string = "";
  
  @Input() composition:Composition = {
    composition_id: 0,
    title: '',
    composer: '',
    links: [],
    type: '',
    preview:'',
    uri: ''
    // liricist and uri will be undefined by default
  };
  @Output() selectedForDelete = new EventEmitter<number>()


  pdfLogoPath = 'assets/i/pdf-logo.png'

  ngOnInit(): void {
     // console.log(this.webserver); 
  }
  

}
