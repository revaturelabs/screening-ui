import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Weight } from '../../entities/Weight';

@Injectable()
export class UrlService {
  public readonly context: string =  environment.context;

  apiCurrentBatchesLineChart = this.context + 'all/reports/dashboard';

  apiCurrentPanelsLineChart = this.context + 'all/reports/biweeklyPanelResults';

  constructor() {
  }

  /**
   * Endpoints for bucket service
   *
   * @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
   *
   */
  private bucketEndpoint = '/bucket';
  bucket = {
    getAllBuckets: () => `${this.context + this.bucketEndpoint}`,
    getBucketById: (bucketId: number) => `${this.context + this.bucketEndpoint}/${bucketId}`,
    updateBucket: () => `${this.context + this.bucketEndpoint}`,
    createNewBucket: () => `${this.context + this.bucketEndpoint}`
  };

  /**
   * Endpoints for questions service
   *
   * @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
   */
  private questionEndpoint = (this.context + '/question');
  question = {
    postQuestion: () => `${this.questionEndpoint}`,
    putQuestion: () => `${this.questionEndpoint}`,
    getQuestionsByBucketId: (bucketId: number) => `${this.questionEndpoint}/getByBucket/${bucketId}`,
    deactivateQuestion: (questionId: number) => `${this.questionEndpoint}/${questionId}/deactivate`,
    activateQuestion: (questionId: number) => `${this.questionEndpoint}/${questionId}/activate`,
    filteredQuestions: () => `${this.questionEndpoint}/filter`,
    getAllTags: () => `${this.questionEndpoint}/tags`,
    createNewTag: () => `${this.questionEndpoint}/tags`,
    getTagsByQuestionId: (questionId: number) => `${this.questionEndpoint}/tags/question/${questionId}`
  };

  private questionScoringEndpoint = 'question-score-service/question';
  questionScoring = {
    scoringQuestion: () => `${this.context + this.questionScoringEndpoint}/score`,
  };

    // Reports Service API endpoints
    reportsStackedBarCurrentWeek = this.context + 'all/reports/batch/week/stacked-bar-current-week';
    reportsDashBoard = this.context + 'all/reports/dashboard';
    reportsBiWeeklyPanel = this.context + 'all/reports/biweeklyPanelResults';

  /**
   * Endpoints for rooms:
   * This section is being added for use in the location service
   * @author Tanhim Ahmed
   */
  room = {
    getRoomById: (roomId: number) => `${this.context}/rooms/${roomId}`,
    getAllRooms: () => `${this.context}/rooms/`,
    // getRoomsByLocationId: (locationId: number) => `${this.context}/rooms/locations/${locationId}`,
    getRoomsByBuildingId: (buildingId: number) => `${this.context}/rooms/building/${buildingId}`,
    postRoom: () => `${this.context}/rooms/`,
    putRoomById: (roomId: number) => `${this.context}/rooms/${roomId}`,
    // deleteRoomById: (roomId: number) => `${this.context}/rooms/${roomId}`
  };

  /**
   * Endpoints for screen services
   *
   * @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
   */
  screeningEndpoint = 'screening';
  screening = {
    scheduleScreening: () => `${this.context + this.screeningEndpoint}/scheduled`,
    startScreening: () => `${this.context + this.screening}/new`,
    endScreening: () => `${this.context + this.screening}/update`,
    updateScreening: () => `${this.context + this.screening}/update`,
    getScreening: id => `${this.context + this.screening}/{id}`
    // softSkills: () => `${this.context + this.screening}/`
   };

  /**
   * Endpoints for simple-trainee service
   *
   * @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
   */
  simpleTraineeEndpoint = this.context + 'trainee-service';
  simpleTrainee = {
    getAllTrainee: () => `${this.simpleTraineeEndpoint}/all/trainee/getAll/`,
  };

  /**
   * All urls associated with skills will come from this object
   */
  skills = {
    findAll: () => `${this.context}/skill`,
    findAllActive: () => `${this.context}/skill/active`,
    findById: (id: number) => `${this.context}/skill/${id}`,
    findByName: (name: string) => `${this.context}/skill/${name}`,
    save: () => `${this.context}/skill`,
    update: () => `${this.context}/skill/`,
    delete: (id: number) => `${this.context}/skill`
  };
  weightsEndpoint = this.context + '/weight';
  weights = {
    getAll: () => `${this.context}/weight`,
    getWeightsBySkillType: (skillTypeId: number) => `${this.weightsEndpoint}/getBySkillType/${skillTypeId}`,
    newWeight: () => `${this.context}/weight/new`,
    deleteWeight: (waitId: number) => `${this.context}/weight/delete/${waitId}`
  };

  /**
   * Endpoints for skillType
   */
  skillTypesServiceEndpoint = this.context + '/skilltype';
  skillTypes = {
    findAll: () => `${this.context}`,
    findAllActive: () => `${this.context}/active`,
    findById: (id: number) => `${this.context}/${id}`,
    findByName: (name: string) => `${this.context}/${name}`,
    save: () => `${this.context}`,
    saveSkill: (skillTypeId, skillId) => `${this.context}/${skillTypeId}/skill/${skillId}`,
    saveSkillByName: (skillTypeName, skillName) =>
      `${this.context}/name/${skillTypeName}/skill/name/${skillName}`,
    update: (id: number) => `${this.context}/skillType/${id}`,
    delete: (id: number) => `${this.context}/${id}`, // note lowercase t in type, this is to match the request mapping





    getBucketBySkillType: (skillTypeId: number) => `${this.skillTypesServiceEndpoint}/getSkillTypeBucketsWithWeights/${skillTypeId}`,

    createSkillType: () => `${this.skillTypesServiceEndpoint}`,
    putSkillType: (skillTypeId: number) => `${this.skillTypesServiceEndpoint}/${skillTypeId}`,
    getSkillTypes: () => `${this.skillTypesServiceEndpoint}`,
    updateSkillTypeBuckets: () => `${this.skillTypesServiceEndpoint}/updateSkillTypeBucket`,
    setSkillTypeBuckets: () => `${this.skillTypesServiceEndpoint}/setSkillTypeBucket`,
    getSkillTypeById: (skillTypeId: number) => `${this.skillTypesServiceEndpoint}/getSkillTypeBuckets/${skillTypeId}`,

  };

  softSkillsViolation = {
    getViolationTypeURL: () => `${this.context}/violation`,
    getViolationURL: (screeningID: number) => '${this.context}/screening/${screeningID}/violations',
    addViolationURL: () => `${this.context}/screening/violation/flag/`,
    deleteViolationURL: (violationID: number) => `${this.context}/screening/violation/delete/${violationID}`,
  };

  subtopic = {
    getSubtopicByIDs: (subtopicIdList: number[]) => `${this.context}/topics/subtopics?ids=${subtopicIdList}`,
    getSubtopicByID: (subtopicId: number) => `${this.context}/topics/subtopics/${subtopicId}`,
    getSubtopics: () => `${this.context}/topics/subtopics`,
    addSubTopicName: (subtopicName: string, topicId: number, typeId: number) =>
      `${this.context}/subtopics/${typeId}/${topicId}/${subtopicName}`,
    removeSubtopic: (subtopicId: number) => `${this.context}/subtopics/${subtopicId}`,
    removeAllSubtopics: (batchId: number) => `${this.context}/subtopics/${batchId}/`,
    isPopulated: (batchId: number) => `${this.context}/subtopics/ispopulated/${batchId}/`
  };

  tagEndpoint = this.context + 'question-service/tag';
  tags = {
    getAllTags: () => `${this.tagEndpoint}/getAllTags`,
  };

  topic = {
    addTopicName: (name: string) => `${this.context}/topics/${name}`,
    changeTopicName: (name: string) => `${this.context}/topics/topic`
  };

  trainee = {
    fetchAllByBatch: (batchId: number) => `${this.context}all/trainee?batchId=${batchId}`,
    save: () => `${this.context}all/trainee/create`,
    update: () => `${this.context}all/trainee/update`,
    delete: (traineeId: number) => `${this.context}all/trainee/delete/${traineeId}`,
    fetchDroppedByBatch: (batchId: number) => `${this.context}all/trainee/`,
  };

  /**
   * Endpoints for trainees
   */
  trainees = {
    findAll: () => `${this.context}/trainees`,
    findById: (id: number) => `${this.context}/trainees/${id}`,
    findByEmail: (email: string) => `${this.context}/trainees/email?=${email}`,
    findAllByBatchAndStatus: (id: number, status: string) => `${this.context}/trainees/batch/${id}/status/${status}`,
    save: () => `${this.context}/trainees`,
    create: () => `${this.context}all/trainee/create`,
    update: () => `${this.context}/trainees`,
    delete: (traineeId: number) => `${this.context}/trainees/${traineeId}`
  };

  traineeStatus = {
    fetchAll: () => `${this.context}types/trainingstatus/all`,
  };
  /**
   * Endpoints for trainers
   */
  trainers = {
    fetchByEmail: (email: string) => `${this.context}/trainers/email/${email}/`,
    fetchAll: () => `${this.context}/trainers`,
    fetchById: (trainerId: number) => `${this.context}/trainers/${trainerId}`,
    save: () => `${this.context}/trainers`,
    update: () => `${this.context}/trainers`,
    promote: () => `${this.context}/trainers/promote`,
    getTitles: () => `${this.context}/trainers/titles`,
    getTiers: () => `${this.context}types/trainer/role/all`,
    delete: () => `${this.context}/trainers`,
  };

  trainingType = {
    fetchAll: () => `${this.context}types/training/all`,
  };

  // BAM Endpoints
  users = {
    getUserByID: (userId: number) => `${this.context}/users/${userId}`,
    getAllUsersRoles: () => `${this.context}/users/roles`,
    getAllUsersUrl: () => `${this.context}/users`,
    getAllTrainersUrl: () => `${this.context}/users/alltrainers`,
    getAllAssociatesUrl: () => `${this.context}/users/allassociates`,
    getUsersInBatchUrl: (batchId: number) => `${this.context}/users/inbatch/${batchId}`,
    dropUserFromBatchUrl: (userId: number) => `${this.context}/users/${userId}`,
    updateUserUrl: (userId: number) => `${this.context}/users/${userId}`,
    addUserUrl: () => `${this.context}/users`,
    removeUserUrl: (userId: number) => `${this.context}/users/${userId}`,
    makeInactive: () => `${this.context}/users/inactivate`,
    addUserToBatchUrl: (batchId: number, userId: number) => `${this.context}/users/batches/${userId}/${batchId}`,
    getUsersNotInBatchUrl: () => `${this.context}/users/batches/none`,
    resetPasswordUrl: () => `${this.context}/user/reset`,
    recoverPasswordUrl: () => `${this.context}/user/recovery`
  };

  /**
   * Endpoints for unavailabilities:
   * This section is being added for use in the location service
   * @author Tanhim Ahmed
   */
  unavailability = {
    // getUnavailabilityById: (unavailabilityId: number) => `${this.context}/unavailabilities/${unavailabilityId}`,
    getAllUnavailabilities: () => `${this.context}/unavailabilities/`,
    postUnavailability: () => `${this.context}/unavailabilities/`,
    // putUnavailabilityById: (unavailabilityId: number) => `${this.context}/unavailabilities/${unavailabilityId}`,
    // deleteUnavailabilityById: (unavailabilityId: number) => `${this.context}/unavailabilities/${unavailabilityId}`
  };

  /* Reporting service API endpoints */
  apiBatchComparisonAvgEndpoint = (skill: string, training: string, startDate) =>
    environment.context + `/all/reports/compare/skill/${skill}/training/${training}/date/${startDate}`

  apifetchBatchWeekPieChart = (batchId: Number, weekId: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${weekId}/pie`

  apiPieChartCurrentWeekQCStatus = (batchId: Number) =>
    environment.context + `all/reports/batch/${batchId}/pie`

  apiAllBatchesCurrentWeekQCStackedBarChart = (batchId: Number, week: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${week}/bar-batch-week-avg`

  apiBatchWeekAvgBarChart = (batchId: Number, week: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${week}/bar-batch-week-avg`

  apiBatchWeekSortedBarChart = (batchId: Number, week: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${week}/bar-batch-weekly-sorted`

  apiBatchOverallTraineeBarChart = (batchId: Number, traineeId: Number) =>
    environment.context + `all/reports/batch/${batchId}/overall/trainee/${traineeId}/bar-batch-overall-trainee`

  apiBatchOverallBarChart = (batchId: Number) =>
    environment.context + `all/reports/batch/${batchId}/overall/bar-batch-overall`

  apiBatchWeekTraineeBarChart = (batchId: Number, weekId: Number, traineeId: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${weekId}/trainee/${traineeId}/bar-batch-week-trainee`

  apiTraineeUpToWeekLineChart = (batchId: Number, weekId: Number, traineeId: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${weekId}/trainee/${traineeId}/line-trainee-up-to-week`

  apiTraineeOverallLineChart = (batchId: Number, traineeId: Number) =>
    environment.context + `all/reports/batch/${batchId}/overall/trainee/${traineeId}/line-trainee-overall`

  apiBatchOverallLineChart = (batchId: Number) =>
    environment.context + `all/reports/batch/${batchId}/overall/line-batch-overall`

  apiTraineeUpToWeekRadarChart = (week: Number, traineeId: Number) =>
    environment.context + `all/reports/week/${week}/trainee/${traineeId}/radar-trainee-up-to-week`

  apiTraineeOverallRadarChart =  (traineeId: Number) =>
    environment.context + `all/reports/trainee/${traineeId}/radar-trainee-overall`

  apiBatchOverallRadarChart = (batchId: Number) =>
    environment.context + `all/reports/batch/${batchId}/overall/radar-batch-overall`

  apiBatchAllTraineesRadarChart = (batchId: Number) =>
    environment.context + `all/reports/batch/${batchId}/radar-batch-all-trainees`

  apiBatchWeekAverageValue = (batchId: Number, weekId: Number) =>
    environment.context + `all/assessments/average/${batchId}/${weekId}`

  apiTechnologiesForTheWeek = (batchId: Number, weekId: Number) =>
    environment.context + `all/assessments/categories/batch/${batchId}/week/${weekId}`

  apiPanelBatchAllTrainees = (batchId: Number) =>
    environment.context + `all/reports/batch/${batchId}/panel-batch-all-trainees`

  /* Evaluation service API endpoints */
  apiFetchAllQCTraineeNotes = (batchId: Number, weekId: Number) =>
    environment.context + `qc/note/trainee/${batchId}/${weekId}`

  apiFetchAllQCBatchNotes = (batchId: Number, weekId: Number) =>
    environment.context + `qc/note/batch/${batchId}/${weekId}`
}
