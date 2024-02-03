import { Component, Input, OnInit } from '@angular/core';
import { Composition } from '../../../model/composition';

interface TypeCount {
  [key : string]: number;
}

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrl: './type-list.component.css'
})



export class TypeListComponent {


  @Input() compositions: Composition[] = [];
  /*
  @Input() compositions:Composition = [{
    
    title: '',
    composer: '',
    links: [],
    type: '',
    uri: ''
    // liricist and uri will be undefined by default
  };
*/

  typeCountResults: { type: string; count: number }[] = [];

  ngOnInit() {
    // You can call countTypes() immediately when component initializes
    // this.countTypes();
  }

  countTypes() {
    // Reset the results array
    this.typeCountResults = [];
  

    // Use an object to count occurrences of each type
    //const typeCount = {};
    const typeCount: TypeCount = {};

    // Iterate through compositions and count occurrences
    this.compositions.forEach((composition: Composition) => {
      //const type:string = composition.type.toString();
      const type = composition.type;
      //let xtype : string = type ? type : "razno";
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
        this.typeCountResults.push({ type, count: typeCount[type as keyof typeof typeCount] });
      }
    }
  }
}
