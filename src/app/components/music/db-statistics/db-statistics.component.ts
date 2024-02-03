import { Component, Input, OnInit } from '@angular/core';
import { Composition } from '../../../model/composition';
import { CompositionServiceService } from '../../../services/composition-service.service';


@Component({
  selector: 'app-db-statistics',
  templateUrl: './db-statistics.component.html',
  styleUrl: './db-statistics.component.css'
})

export class DbStatisticsComponent {
  @Input() compositions: Composition[] = [];

  totalCount : number = 0;

  constructor(private compositionService: CompositionServiceService   
    ){
      this.compositionService.getCompostitions().subscribe(
        (data: Composition[]) => {
        this.compositions = data;
        this.totalCount = this.compositions.length;
      });
  }


}
