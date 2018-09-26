import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Interfaces

// rxjs
import { Observable, BehaviorSubject, Subject } from 'rxjs';

// services
// import { ApiService } from '../util/api.service';
import { UrlService } from '../../services/urls/url.service';

// entities
import { CompleteBatch } from '../../entities/CompleteBatch';
import { stringifyDate } from '../../util/utils';

import { GambitSkillTypeService } from '../../services/skillType/gambit-skill-type.service';
import { GambitBatchService } from '../../services/batch/gambit-batch.service';
import { GambitBatch } from '../../entities/GambitBatch';
import { GambitTrainer } from '../../entities/GambitTrainer';


/**
 * this service manages calls to the web service
 * for Batch objects
 */
@Injectable()
export class BatchService {

    public listSubject: BehaviorSubject<CompleteBatch[]>;
    public batches: CompleteBatch[] = [];
    public trainer: GambitTrainer;
    public savedSubject: Subject<CompleteBatch>;
    public updatedSubject: Subject<CompleteBatch>;
    public deletedSubject: Subject<CompleteBatch>;

    constructor(public http: HttpClient,
      public gambitBatchService: GambitBatchService,
      public gambitSkillTypeService: GambitSkillTypeService,
      private urlService: UrlService) {
      this.listSubject = new BehaviorSubject([]);
      this.savedSubject = new Subject();
      this.updatedSubject = new Subject();
      this.deletedSubject = new Subject();
    }

    public getList() {
      // this.listSubject.next(data);
      return this.listSubject.asObservable();
    }

    /*
      =====================
      BEGIN: API calls
      =====================
    */

    /**
     * retrieves all training batches regardless of the trainer
     * and pushes them on the list subject
     *
     * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'STAGING', 'PANEL')")
     */
    public fetchAll(): Observable<CompleteBatch[]> {
      if (this.batches.length === 0) {
      this.http.get<any[]>(this.urlService.batches.fetchAll())
        .subscribe((results) => {
          console.log(results);
          for (const result of results) { // will need to call skill servive instead of making our own http request
            this.gambitSkillTypeService.find(result['skillTypeId']).subscribe(res => {
              this.getTrainer(result['trainerId']).subscribe((trainerRes) => {
                this.batches.push({
                  batchId: result['batchId'],
                  resourceId: result['resourceId'],
                  trainingName: result['trainingName'],
                  trainer: trainerRes,
                  cotrainer: result['cotrainerId'],
                  skillType: res,
                  trainingType: result['trainingType'],
                  addressId: result['addressId'],
                  address: result['addressId'],
                  location: result['location'],
                  goodGradeThreshold: null,
                  borderlineGradeThreshold: null,
                  startDate: result['startDate'],
                  endDate: result['endDate'],
                  week: null,
                  noteIds: result['trainees'],
                  trainees: result['trainees'],
                });
              });
            });
          }
          console.log(this.batches);
          this.listSubject.next(this.batches);
        });
      return this.listSubject.asObservable();
      }
    }

    getTrainer(trainerId: number) {
      return this.http.get<GambitTrainer>(this.urlService.trainers.fetchById(trainerId));
    }

    /**
     * retrieves the batches that belong to the currently
     * authenticated trainer and pushes them on the
     * list subject
     *
     * spring-security: @PreAuthorize("hasAnyRole('VP', 'TRAINER', 'STAGING', 'PANEL')")
     */
    public fetchAllByTrainerId(id: number) {
      this.http.get<any[]>(this.urlService.batches.fetchAllByTrainerId(id))
      .subscribe((results) => {
        for (const result of results) { // will need to call skill servive instead of making our own http request
          this.gambitSkillTypeService.find(result['skillTypeId']).subscribe(res => {
            this.batches.push({
              batchId: result['batchId'],
              resourceId: result['resourceId'],
              trainingName: result['trainingName'],
              trainer: result['trainerId'],
              cotrainer: result['cotrainerId'],
              skillType: res,
              trainingType: result['trainingType'],
              addressId: result['addressId'],
              address: result['addressId'],
              location: result['location'],
              goodGradeThreshold: null,
              borderlineGradeThreshold: null,
              startDate: result['startDate'],
              endDate: result['endDate'],
              week: null,
              noteIds: result['trainees'],
              trainees: result['trainees'],
            });
          });
        }
        this.listSubject.next(results);
      });
      return this.listSubject.asObservable();
    }

    /**
    * @overloade
    * @see save()
    *
    * transmits a batch to be saved in persistent
    * storage on the server and pushes the saved
    * object on the saved subject
    *
    * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER', 'PANEL')")
    *
    * @param batch: Batch
    */
   public create(completeBatch: CompleteBatch): Observable<GambitBatch> {
    const gambitBatch: GambitBatch = new GambitBatch();
    gambitBatch.batchId = completeBatch.batchId;
    gambitBatch.addressId = completeBatch.resourceId;
    gambitBatch.trainingName = completeBatch.trainingName;
    gambitBatch.trainerId = completeBatch.trainer.userId;

    // TODO Verify that the logic for creating cotrainers in a batch as initially null
    //       is valid. See aggregator/entities/CompleteBatch constructor for more details
    if (completeBatch.cotrainer != null ) {
      gambitBatch.cotrainerId = completeBatch.cotrainer.userId;
    } else {
      gambitBatch.cotrainerId = 0;
    }

    gambitBatch.skillTypeId = completeBatch.skillType.skillTypeId;
    gambitBatch.addressId = completeBatch.addressId;
    gambitBatch.location = completeBatch.location;
    gambitBatch.goodGradeThreshold = completeBatch.goodGradeThreshold;
    gambitBatch.borderlineGradeThreshold = completeBatch.borderlineGradeThreshold;
    gambitBatch.startDate = completeBatch.startDate;
    gambitBatch.endDate = completeBatch.endDate;
    gambitBatch.week = completeBatch.week;
    gambitBatch.noteIds = completeBatch.noteIds;

    // iterates over the GambitTrainee array in completeBatch to push ids to
    //    the GambitBatch traineeId array
    for (const trainee of completeBatch.trainees) {
      gambitBatch.traineeIds.push(trainee.traineeId);
    }

    return this.gambitBatchService.create(gambitBatch);
  }

    /**
     * transmits a Batch object to be updated and
     * pushes the updated object on th savedSubject
     *
     * spring-security: @PreAuthorize("hasAnyRole('VP', 'QC', 'TRAINER', 'PANEL')")
     *
     * @param batch: Batch
     */
    public update(completeBatch: CompleteBatch): Observable<GambitBatch> {

      const gambitBatch: GambitBatch = new GambitBatch();
      gambitBatch.batchId = completeBatch.batchId;
      gambitBatch.addressId = completeBatch.resourceId;
      gambitBatch.trainingName = completeBatch.trainingName;
      gambitBatch.trainerId = completeBatch.trainer.userId;

      // TODO Verify that the logic for creating cotrainers in a batch as initially null
      //       is valid. See aggregator/entities/CompleteBatch constructor for more details
      if (completeBatch.cotrainer != null ) {
        gambitBatch.cotrainerId = completeBatch.cotrainer.userId;
      } else {
        gambitBatch.cotrainerId = 0;
      }

      gambitBatch.skillTypeId = completeBatch.skillType.skillTypeId;
      gambitBatch.addressId = completeBatch.addressId;
      gambitBatch.location = completeBatch.location;
      gambitBatch.goodGradeThreshold = completeBatch.goodGradeThreshold;
      gambitBatch.borderlineGradeThreshold = completeBatch.borderlineGradeThreshold;
      gambitBatch.startDate = completeBatch.startDate;
      gambitBatch.endDate = completeBatch.endDate;
      gambitBatch.week = completeBatch.week;
      gambitBatch.noteIds = completeBatch.noteIds;

      // iterates over the GambitTrainee array in completeBatch to push ids to
      //    the GambitBatch traineeId array
      for (const trainee of completeBatch.trainees) {
        gambitBatch.traineeIds.push(trainee.traineeId);
      }

      return this.gambitBatchService.update(gambitBatch);
    }

    /**
    * transmits a batch object to be deleted and
    * pushes the deleted object on the deleted
    * subject
    *
    * spring-security: @PreAuthorize("hasAnyRole('VP')")
    *
    * @param batch: Batch
    */
   public delete(completeBatch: CompleteBatch): Observable<GambitBatch> {
    const gambitBatch: GambitBatch = new GambitBatch();
    gambitBatch.batchId = completeBatch.batchId;
    gambitBatch.addressId = completeBatch.resourceId;
    gambitBatch.trainingName = completeBatch.trainingName;
    gambitBatch.trainerId = completeBatch.trainer.userId;

    // TODO Verify that the logic for creating cotrainers in a batch as initially null
    //       is valid. See aggregator/entities/CompleteBatch constructor for more details
    if (completeBatch.cotrainer != null ) {
      gambitBatch.cotrainerId = completeBatch.cotrainer.userId;
    } else {
      gambitBatch.cotrainerId = 0;
    }

    gambitBatch.skillTypeId = completeBatch.skillType.skillTypeId;
    gambitBatch.addressId = completeBatch.addressId;
    gambitBatch.location = completeBatch.location;
    gambitBatch.goodGradeThreshold = completeBatch.goodGradeThreshold;
    gambitBatch.borderlineGradeThreshold = completeBatch.borderlineGradeThreshold;
    gambitBatch.startDate = completeBatch.startDate;
    gambitBatch.endDate = completeBatch.endDate;
    gambitBatch.week = completeBatch.week;
    gambitBatch.noteIds = completeBatch.noteIds;

    // iterates over the GambitTrainee array in completeBatch to push ids to
    //    the GambitBatch traineeId array
    for (const trainee of completeBatch.trainees) {
      gambitBatch.traineeIds.push(trainee.traineeId);
    }

    return this.gambitBatchService.delete(gambitBatch);

  }

    /**
     * produces a clone of the batch object that
     * has changes required for the API in order
     * to be processed
     *
     * @param batch: Batch
     *
     * @return any
     */
    // We should find a way to make this have an explicit non-any type
    protected prepareForApi(batch: CompleteBatch): any {
      const output: any = {};
      Object.assign(output, batch);

      output.startDate = stringifyDate(batch.startDate);
      output.endDate = stringifyDate(batch.endDate);

      return output;
    }
}
