import { Component, OnInit, Input } from '@angular/core';
import { Covid19StatsModel } from 'src/app/core/models/api-response-model';
import { Covid19Model } from 'src/app/core/models/view-model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input() data: Covid19Model;

  expanded = false;
  constructor() {}

  ngOnInit(): void {}

  toggleBody() {
    return (this.expanded = !this.expanded);
  }

}
