import { Component, OnInit, Input } from '@angular/core';
import { Covid19Model } from 'src/app/core/models/view-model';
export interface QuickStatsData {
  label: string;
  value: number;
  delta: number;
}

@Component({
  selector: 'app-quick-stats',
  templateUrl: './quick-stats.component.html',
  styleUrls: ['./quick-stats.component.scss']
})
export class QuickStatsComponent implements OnInit {
  @Input() data: Covid19Model;
  constructor() {}

  ngOnInit(): void {}
}
