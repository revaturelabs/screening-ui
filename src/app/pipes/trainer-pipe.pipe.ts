import { Pipe, PipeTransform } from '@angular/core';
import { GambitTrainer } from '../entities/GambitTrainer';


@Pipe({
  name: 'trainerPipe'
})
export class TrainerPipePipe implements PipeTransform {
  /**
   * Logic to filter out Active/Inactive Trainers
   * @param {*} gamtrainers
   * @param {String} status
   * @returns {*}
   * @memberof TrainerPipePipe
   */
  transform(trainers: GambitTrainer[], status: String): GambitTrainer[] {
    if (status === 'ROLE_INACTIVE') {
      return trainers.filter(trainer => trainer.role.role === status);
    } else {
      return trainers.filter(trainer => trainer.role.role !== 'ROLE_INACTIVE');
    }
  }
}
