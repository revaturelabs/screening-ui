import { Pipe, PipeTransform } from '@angular/core';
import { GambitTrainee } from '../entities/GambitTrainee';


@Pipe({
  name: 'traineeSearchPipe'
})
export class TraineeSearch implements PipeTransform {

  transform(trainees: any, searchText: String): GambitTrainee[] {
    if (!trainees) {
      return [];
    } else {
      searchText = searchText.toLowerCase();

      return trainees.filter(results => {
        return results.toLowerCase().includes(searchText);
      });
    }
  }
}

