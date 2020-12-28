import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatsService } from '../services/stats/stats.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.page.html',
  styleUrls: ['./add-food.page.scss'],
})
export class AddFoodPage implements OnInit {

  constructor(private navController: NavController, private stats: StatsService) { }

  ngOnInit() {
  }

  private addFood(form) {
    this.stats.registerFood(form.value.name, form.value.portion, form.value.proteins, form.value.fat, form.value.carbs, form.value.fiber);
    //this.stats.saveStats();
    this.goBack();
  }

  private goBack() {
    this.navController.navigateBack('');
  }

}
