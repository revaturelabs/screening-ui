export class GambitBatch {

  batchId: number;
  resourceId: number;
  trainingName: string;
  trainerId: number;
  cotrainerId: number;
  skillTypeId: number;
  addressId: number;
  location: string;
  goodGradeThreshold: number;
  borderlineGradeThreshold: number;
  startDate: Date;
  endDate: Date;
  week: number;
  noteIds: number[];
  traineeIds: number[];

  /**
   * Initialize empty batch for BAM service
   *
   */
  constructor(batchId: number = 0, resourceId: number = 0, trainingName: string = '',
              trainerId: number = 0, cotrainerId: number = 0, skillTypeId: number = 0,
              addressId: number = 0, location: string = '', goodGradeThreshold: number = 0,
              borderlineGradeThreshold: number = 0, startDate: Date = new Date(),
              endDate: Date = new Date(), week: number = 0, noteIds: number[] = [],
              traineeIds: number[] = [] ) {

      this.batchId = batchId;
      this.resourceId = resourceId;
      this.trainingName = trainingName;
      this.trainerId = trainerId;
      this.cotrainerId = cotrainerId;
      this.skillTypeId = skillTypeId;
      this.addressId = addressId;
      this.location = location;
      this.goodGradeThreshold = goodGradeThreshold;
      this.borderlineGradeThreshold = borderlineGradeThreshold;
      this.startDate = startDate;
      this.endDate = endDate;
      this.week = week;
      this.noteIds = noteIds;
      this.traineeIds = traineeIds;

  }

}
