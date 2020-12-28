import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const PROTEIN_CALORIES: any = 4;
const FAT_CALORIES: any = 9;
const CARB_CALORIES: any = 4;

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private currentStats: any = {
    'date': undefined,
    'totalCalories': 567,
    'totalProteins': 41.9,
    'totalFat': 7.1,
    'totalCarbs': 101,
    'totalFiber': 4.32,
    'targetCalories': 2567,
    'targetProteins': 147,
    'targetFat': 67,
    'targetCarbs': 344,
    'targetFiber': 30,
    'endTime': undefined,
    'foodRecord': [
      {
        'calories': 340,
        'carbs': 30,
        'fat': 20,
        'fiber': 20,
        'id': 1,
        'name': "Banana",
        'portion': 100,
        'proteins': 10,
        'time': "15:28"
      },
      {
        'calories': 340,
        'carbs': 30,
        'fat': 20,
        'fiber': 20,
        'id': 1,
        'name': "Banana",
        'portion': 100,
        'proteins': 10,
        'time': "15:28"
      },
      {
        'calories': 340,
        'carbs': 30,
        'fat': 20,
        'fiber': 20,
        'id': 1,
        'name': "Banana",
        'portion': 100,
        'proteins': 10,
        'time': "15:28"
      },
      {
        'calories': 340,
        'carbs': 30,
        'fat': 20,
        'fiber': 20,
        'id': 1,
        'name': "Banana",
        'portion': 100,
        'proteins': 10,
        'time': "15:28"
      },
      {
        'calories': 340,
        'carbs': 30,
        'fat': 20,
        'fiber': 20,
        'id': 1,
        'name': "Banana",
        'portion': 100,
        'proteins': 10,
        'time': "15:28"
      }
    ],
    'history': [
      {
        'date': '28/12/2020',
        'endTime': '01:45',
        'totalCalories': 567,
        'totalProteins': 41.9,
        'totalFat': 7.1,
        'totalCarbs': 101,
        'totalFiber': 4.32,
        'targetCalories': 2567,
        'targetProteins': 147,
        'targetFat': 67,
        'targetCarbs': 344,
        'targetFiber': 30,
        'foodRecord': [
          {
            'calories': 340,
            'carbs': 30,
            'fat': 20,
            'fiber': 20,
            'id': 1,
            'name': "Banana",
            'portion': 100,
            'proteins': 10,
            'time': "15:28"
          },
          {
            'calories': 340,
            'carbs': 30,
            'fat': 20,
            'fiber': 20,
            'id': 1,
            'name': "Banana",
            'portion': 100,
            'proteins': 10,
            'time': "15:28"
          },
          {
            'calories': 340,
            'carbs': 30,
            'fat': 20,
            'fiber': 20,
            'id': 1,
            'name': "Banana",
            'portion': 100,
            'proteins': 10,
            'time': "15:28"
          },
          {
            'calories': 340,
            'carbs': 30,
            'fat': 20,
            'fiber': 20,
            'id': 1,
            'name': "Banana",
            'portion': 100,
            'proteins': 10,
            'time': "15:28"
          },
          {
            'calories': 340,
            'carbs': 30,
            'fat': 20,
            'fiber': 20,
            'id': 1,
            'name': "Banana",
            'portion': 100,
            'proteins': 10,
            'time': "15:28"
          }
        ],
      },
      {
        'date': '28/12/2020',
        'endTime': '01:45',
        'totalCalories': 567,
        'totalProteins': 41.9,
        'totalFat': 7.1,
        'totalCarbs': 101,
        'totalFiber': 4.32,
        'targetCalories': 2567,
        'targetProteins': 147,
        'targetFat': 67,
        'targetCarbs': 344,
        'targetFiber': 30,
        'foodRecord': [
          {
            'calories': 340,
            'carbs': 30,
            'fat': 20,
            'fiber': 20,
            'id': 1,
            'name': "Banana",
            'portion': 100,
            'proteins': 10,
            'time': "15:28"
          },
          {
            'calories': 340,
            'carbs': 30,
            'fat': 20,
            'fiber': 20,
            'id': 1,
            'name': "Banana",
            'portion': 100,
            'proteins': 10,
            'time': "15:28"
          },
          {
            'calories': 340,
            'carbs': 30,
            'fat': 20,
            'fiber': 20,
            'id': 1,
            'name': "Banana",
            'portion': 100,
            'proteins': 10,
            'time': "15:28"
          },
          {
            'calories': 340,
            'carbs': 30,
            'fat': 20,
            'fiber': 20,
            'id': 1,
            'name': "Banana",
            'portion': 100,
            'proteins': 10,
            'time': "15:28"
          },
          {
            'calories': 340,
            'carbs': 30,
            'fat': 20,
            'fiber': 20,
            'id': 1,
            'name': "Banana",
            'portion': 100,
            'proteins': 10,
            'time': "15:28"
          }
        ],
      }
    ]
  };

  constructor(private storage: Storage) {
    storage.get('currentStats').then((stats) => {
      if (stats != null) {
        console.log('Current Stats = ', stats);
        this.currentStats = JSON.parse(stats);
      } else {
        let currentDate = new Date();
        let currentDateStr = currentDate.toLocaleDateString("pt");
        this.currentStats.date = currentDateStr;
      }
    });
  }

  public saveStats(): void {
    this.storage.set('currentStats', JSON.stringify(this.currentStats));
  }

  public registerFood(name: string, foodPortion: number, proteinGrams: number, fatGrams: number, carbGrams: number, fiberGrams: number): void {
    this.addProteins(proteinGrams);
    this.addFat(fatGrams);
    this.addCarbs(carbGrams);
    this.addFiber(fiberGrams);
    let recordId = this.currentStats.foodRecord.length + 1;
    let foodCalories = (proteinGrams * PROTEIN_CALORIES) + (fatGrams * FAT_CALORIES) + (carbGrams * CARB_CALORIES);
    let currentDate = new Date();
    let currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
    this.currentStats.foodRecord.push({
      'id': recordId,
      'name': name,
      'time': currentTime,
      'portion': foodPortion,
      'calories': foodCalories,
      'proteins': proteinGrams,
      'fat': fatGrams,
      'carbs': carbGrams,
      'fiber': fiberGrams
    });
    console.log(this.currentStats);
  }

  public unregisterFood(id: number) {
    for (let i = 0; i < this.currentStats.foodRecord.length; i++) {
      if (this.currentStats.foodRecord[i].id === id)
        this.currentStats.foodRecord.splice(i, 1);
    }
  }

  public addProteins(proteinGrams: number): void {
    this.currentStats.totalProteins += proteinGrams;
    this.currentStats.totalCalories += proteinGrams * PROTEIN_CALORIES;
  }

  public addFat(fatGrams: number): void {
    this.currentStats.totalFat += fatGrams;
    this.currentStats.totalCalories += fatGrams * FAT_CALORIES;
  }

  public addCarbs(carbGrams: number): void {
    this.currentStats.totalCarbs += carbGrams;
    this.currentStats.totalCalories += carbGrams * CARB_CALORIES;
  }

  public addFiber(fiberGrams: number): void {
    this.currentStats.totalFiber += fiberGrams;
    // Fiber doesn't have calories.
  }

  public setTargetCalories(targetCalories: number): void {
    this.currentStats.targetCalories = targetCalories;
  }

  public setTargetProteins(targetProteins: number): void {
    this.currentStats.targetProteins = targetProteins;
  }

  public setTargetFat(targetFat: number): void {
    this.currentStats.targetFat = targetFat;
  }

  public setTargetCarbs(targetCarbs: number): void {
    this.currentStats.targetCarbs = targetCarbs;
  }

  public setTargetFiber(targetFiber: number): void {
    this.currentStats.targetFiber = targetFiber;
  }

  public getCurrentStats(): any {
    return this.currentStats;
  }
}
