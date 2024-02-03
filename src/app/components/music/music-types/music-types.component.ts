import { Component, Input, OnInit, ViewChild } from '@angular/core';
// import { Observable } from 'rxjs';
import { Composition } from '../../../model/composition';
import { CompositionServiceService } from '../../../services/composition-service.service';


@Component({
  selector: 'app-music-types',
  templateUrl: './music-types.component.html',
  styleUrl: './music-types.component.css'
})
export class MusicTypesComponent {


  @Input() compositions: Composition[] = [];




  typeCountResults: { type: string; count: number }[] = [];


  constructor(private compositionService: CompositionServiceService   
    ){
  /*
      compositionService.getCompostitions()
      .subscribe({
        next: (compositionArray) => {
          this.compositions = compositionArray;
          this.countTypes(); // Call countTypes after data is loaded
        }
      });
*/
  }

  ngOnInit(): void {

  
    // Assuming you have a service to fetch compositions
    this.compositionService.getCompostitions().subscribe(
      (data: Composition[]) => {
      this.compositions = data;
      this.countTypes(); // Call countTypes after data is loaded
    });
  }


  countTypes() {
    // Reset the results array
    this.typeCountResults = [];

    // Use an object to count occurrences of each type
   // const typeCount = {};
    const typeCount: { [key: string]: number } = {};
    // Iterate through compositions and count occurrences
    this.compositions.forEach((composition) => {
      const type = composition.type;

      
      if (typeCount[type]) {
        // Increment count if the type is already in the object
        typeCount[type]++;
      } else {
        // Initialize count to 1 if the type is not in the object
        typeCount[type] = 1;
      }

    });

    // Convert the object to an array of objects for easier display
    for (const type in typeCount) {
      if (typeCount.hasOwnProperty(type)) {
        this.typeCountResults.push({ type, count: typeCount[type] });
      }
    }
  }
}
