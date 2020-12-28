import { Component } from '@angular/core';
import { NavController, ViewWillEnter } from '@ionic/angular';
import { StatsService } from '../services/stats/stats.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements ViewWillEnter {

  public currentStats: any;

  public totalCalories: number = 0;
  public totalProteins: number = 0;
  public totalFat: number = 0;
  public totalCarbs: number = 0;
  public totalFiber: number = 0;

  public targetCalories: number = 0;
  public targetProteins: number = 0;
  public targetFat: number = 0;
  public targetCarbs: number = 0;
  public targetFiber: number = 0;

  public targetCaloriesPct: number = 0;
  public targetProteinsPct: number = 0;
  public targetFatPct: number = 0;
  public targetCarbsPct: number = 0;
  public targetFiberPct: number = 0;

  public remainingCalories: number = 0;
  public remainingProteins: number = 0;
  public remainingFat: number = 0;
  public remainingCarbs: number = 0;
  public remainingFiber: number = 0;

  public foodRecord: Array<any> = [];

  constructor(private stats: StatsService, private navController: NavController) { }

  ionViewWillEnter(): void {
    this.currentStats = this.stats.getCurrentStats();

    this.totalCalories = this.currentStats.totalCalories;
    this.totalProteins = this.currentStats.totalProteins;
    this.totalFat = this.currentStats.totalFat;
    this.totalCarbs = this.currentStats.totalCarbs;
    this.totalFiber = this.currentStats.totalFiber;

    this.targetCalories = this.currentStats.targetCalories;
    this.targetProteins = this.currentStats.targetProteins;
    this.targetFat = this.currentStats.targetFat;
    this.targetCarbs = this.currentStats.targetCarbs;
    this.targetFiber = this.currentStats.targetFiber;

    this.targetCaloriesPct = this.getPercentage(this.totalCalories, this.targetCalories);
    this.targetProteinsPct = this.getPercentage(this.totalProteins, this.targetProteins);
    this.targetFatPct = this.getPercentage(this.totalFat, this.targetFat);
    this.targetCarbsPct = this.getPercentage(this.totalCarbs, this.targetCarbs);
    this.targetFiberPct = this.getPercentage(this.totalFiber, this.targetFiber);

    this.remainingCalories = this.targetCalories - this.totalCalories;
    this.remainingProteins = this.targetProteins - this.totalProteins;
    this.remainingFat = this.targetFat - this.totalFat;
    this.remainingCarbs = this.targetCarbs - this.totalCarbs;
    this.remainingFiber = this.targetFiber - this.totalFiber;

    this.foodRecord = this.currentStats.foodRecord;
  }

  private getPercentage(value, target): number {
    return value / target;
  }

  public addFood() {
    this.navController.navigateForward('tabs/tab2/add-food');
  }
}
