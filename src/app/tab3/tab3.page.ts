import { Component } from '@angular/core';
import { StatsService } from '../services/stats/stats.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  private currentStats: any;

  public history: any;

  constructor(private stats: StatsService) {
    this.currentStats = this.stats.getCurrentStats();
    this.history = this.currentStats.history;
  }

}
