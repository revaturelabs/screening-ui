import { Pipe, PipeTransform } from '@angular/core';
import { Candidate } from '../entities/Candidate';


@Pipe({
  name: 'traineeSearchPipe'
})
export class TraineeSearch implements PipeTransform {

  transform(trainees: any, searchText: String): Candidate[] {
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
