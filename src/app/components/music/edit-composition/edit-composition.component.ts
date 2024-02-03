import { Component, Input } from '@angular/core';
import { Composition } from '../../../model/composition';


@Component({
  selector: 'app-edit-composition',
  templateUrl: './edit-composition.component.html',
  styleUrl: './edit-composition.component.css'
})
export class EditCompositionComponent {

  @Input() composition:Composition = {
    type: '',
    title: '',
    composer: '',
    links: [],
    // type: '',
    uri: ''
    // liricist and uri will be undefined by default
  };

  isEditMode = true;
  editedComposition: Composition = { ...this.composition };

  editComposition() {
    this.isEditMode = true;
    this.editedComposition = { ...this.composition };
  }

  saveComposition() {
    // You can add additional validation before saving
    this.composition = { ...this.editedComposition };
    this.isEditMode = false;
  }

  cancelEdit() {
    this.isEditMode = false;
  }

}
