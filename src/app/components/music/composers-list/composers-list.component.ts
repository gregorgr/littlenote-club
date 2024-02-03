import { Component, Input, OnInit } from '@angular/core';
import { Composition } from '../../../model/composition';
import { CompositionServiceService } from '../../../services/composition-service.service';



@Component({
  selector: 'app-composers-list',
  templateUrl: './composers-list.component.html',
  styleUrl: './composers-list.component.css'
})


export class ComposersListComponent implements OnInit {
  @Input() compositions: Composition[] = [];

  typeCountResults: { type: string; count: number }[] = [];

  constructor(private compositionService: CompositionServiceService   
    ){
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

      const type = composition.composer;
      if (type !== null && type !== undefined) {

        if (typeCount[type]) {
          // Increment count if the type is already in the object
          typeCount[type]++;
        } else {
          // Initialize count to 1 if the type is not in the object
          typeCount[type] = 1;
        }
        
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
