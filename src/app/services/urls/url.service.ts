import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Weight } from '../../entities/Weight';
import { String } from 'aws-sdk/clients/cloudhsmv2';

@Injectable()
export class UrlService {
  public readonly adminContext: string =  environment.adminContext;
  public readonly screeningContext: string =  environment.screeningContext;
  public readonly reportContext: string = environment.reportContext;

  constructor() {
  }

  /**
   * Endpoints for bucket service
   *
   * @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
   * @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
   * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
   * @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
   *
   */
  private bucketEndpoint = this.adminContext + '/bucket';
  bucket = {
    getAllBuckets: () => `${this.bucketEndpoint}`,
    getBucketById: (bucketId: number) => `${this.bucketEndpoint}/${bucketId}`,
    updateBucket: () => `${this.bucketEndpoint}`,
    createNewBucket: () => `${this.bucketEndpoint}`,
    deleteBucket: () => `${this.bucketEndpoint}`
  };

  /**
   * Endpoints for questions service
   *
   * @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
   * @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
   * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
   * @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
   */
  private questionEndpoint = (this.adminContext + '/question');
  question = {
    postQuestion: () => `${this.questionEndpoint}`,
    putQuestion: () => `${this.questionEndpoint}/update`,
    getQuestionsByBucketId: (bucketId: number) => `${this.questionEndpoint}/getByBucket/${bucketId}`,
    deactivateQuestion: (questionId: number) => `${this.questionEndpoint}/${questionId}`,
    activateQuestion: (questionId: number) => `${this.questionEndpoint}/${questionId}`,
    filteredQuestions: () => `${this.questionEndpoint}/filter`,
   };

  private questionScoringEndpoint = 'question-score-service/question';
  questionScoring = {
    scoringQuestion: () => `${this.screeningContext + this.questionScoringEndpoint}/score`,
  };

  /**
   * Endpoints for screen services
   *
   * @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
   * @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
   * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
   * @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
   */
  screening = {
    scheduledScreeningUrl: () => `${this.screeningContext}/screening/scheduled`,
    screeningUrl: () => `${this.screeningContext}/screening/`,
    screeningUrlById: id => `${this.screeningContext}/screening/${id}`
   };
  weightsEndpoint = this.adminContext + '/weight';
  weights = {
    getAll: () => `${this.weightsEndpoint}`,
    getWeightsByTrack: (trackId: number) => `${this.weightsEndpoint}/getByTrack/${trackId}`,
    newWeight: () => `${this.weightsEndpoint}/new`,
    deleteWeight: (weightId: number) => `${this.weightsEndpoint}/delete/${weightId}`
  };

  /**
   * Endpoints for track
   */
  tracksServiceEndpoint = this.adminContext + '/track';
  tracks = {
    findAll: () => `${this.tracksServiceEndpoint}`,
    findAllActive: () => `${this.tracksServiceEndpoint}/active`,
    findById: (id: number) => `${this.tracksServiceEndpoint}/${id}`,
   // findByName: (name: string) => `${this.context}/${name}`,
    save: () => `${this.tracksServiceEndpoint}`,
    update: (id: number) => `${this.tracksServiceEndpoint}/${id}`,
    delete: (id: number) => `${this.tracksServiceEndpoint}/${id}`, // note lowercase t in type, this is to match the request mapping

    getBucketByTrack: (trackId: number) => `${this.tracksServiceEndpoint}/getTrackBucketsWithWeights/${trackId}`,
    createTrack: () => `${this.tracksServiceEndpoint}`,
    putTrack: (trackId: number) => `${this.tracksServiceEndpoint}/${trackId}`,
    getTracks: () => `${this.tracksServiceEndpoint}`,
    updateTrackBuckets: (trackId: number) => `${this.tracksServiceEndpoint}/${trackId}`,
    setTrackBuckets: () => `${this.tracksServiceEndpoint}/setTrackBucket`,
    getTrackById: (trackId: number) => `${this.tracksServiceEndpoint}/getTrackBuckets/${trackId}`,

  };

  softSkillsViolation = {
    getViolationTypeURL: () => `${this.screeningContext}/violation`,
    getViolationURL: (screeningID: number) => `${this.screeningContext}/screening/${screeningID}/violations`,
    addViolationURL: () => `${this.screeningContext}/violation/new/`,
    deleteViolationURL: (violationID: number) => `${this.screeningContext}/screening/violation/delete/${violationID}`
    };

  private reportEndpoint = this.reportContext;
  reports = {
    getAllScreeners: () => `${this.reportEndpoint}/screenings`, /*Chisel was here*/
    getScreenersByPartialEmail: (partialEmail: string): string => `${this.reportEndpoint}/getEmails?email=${partialEmail}`,
    getScreenerByName: (partialName: string): string => `${this.reportEndpoint}/screenings`,
    getScreenerDataByWeeks: (startDate: string, endDate: string, email: string): string =>
    `${this.reportEndpoint}/getReportWithEmail?startDate=${startDate}&endDate=${endDate}&email=${email}`,
    getAllScreenerDataByWeeks: (startDate: string, endDate: String): string =>
    `${this.reportEndpoint}/getWeeksReport?startDate=${startDate}&endDate=${endDate}`
  };
}
