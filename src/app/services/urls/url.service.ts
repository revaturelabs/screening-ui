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
    getWeightsBySkillType: (skillTypeId: number) => `${this.weightsEndpoint}/getBySkillType/${skillTypeId}`,
    newWeight: () => `${this.weightsEndpoint}/new`,
    deleteWeight: (weightId: number) => `${this.weightsEndpoint}/delete/${weightId}`
  };

  /**
   * Endpoints for skillType
   */
  skillTypesServiceEndpoint = this.adminContext + '/skilltype';
  skillTypes = {
    findAll: () => `${this.skillTypesServiceEndpoint}`,
    findAllActive: () => `${this.skillTypesServiceEndpoint}/active`,
    findById: (id: number) => `${this.skillTypesServiceEndpoint}/${id}`,
   // findByName: (name: string) => `${this.context}/${name}`,
    save: () => `${this.skillTypesServiceEndpoint}`,
    update: (id: number) => `${this.skillTypesServiceEndpoint}/${id}`,
    delete: (id: number) => `${this.skillTypesServiceEndpoint}/${id}`, // note lowercase t in type, this is to match the request mapping

    getBucketBySkillType: (skillTypeId: number) => `${this.skillTypesServiceEndpoint}/getSkillTypeBucketsWithWeights/${skillTypeId}`,
    createSkillType: () => `${this.skillTypesServiceEndpoint}`,
    putSkillType: (skillTypeId: number) => `${this.skillTypesServiceEndpoint}/${skillTypeId}`,
    getSkillTypes: () => `${this.skillTypesServiceEndpoint}`,
    updateSkillTypeBuckets: (skillTypeId: number) => `${this.skillTypesServiceEndpoint}/${skillTypeId}`,
    setSkillTypeBuckets: () => `${this.skillTypesServiceEndpoint}/setSkillTypeBucket`,
    getSkillTypeById: (skillTypeId: number) => `${this.skillTypesServiceEndpoint}/getSkillTypeBuckets/${skillTypeId}`,

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
    `${this.reportEndpoint}/getWeeksReport?startDate=${startDate}&endDate=${endDate}`,
    getAllReports: (dateStart: string, dateEnd: string, screenerId: number): string =>
    `${this.reportEndpoint}/getWeeksReport?startDate=${dateStart}&endDate=${dateEnd}&screenerId=${screenerId}`
  };
}
