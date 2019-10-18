import { SimpleTrainee } from "../entities/SimpleTrainee";
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/urls/url.service";
import { SkillTypesService } from "../services/skill-types/skill-types.service";
import { Injectable } from "@angular/core";

const USER_OBJECT: SimpleTrainee = {
    traineeID: 1,
    firstname: 'Test',
    lastname: 'Test',
    skillTypeID: 1,
    skillTypeName: 'Test',
    schedule: null
};
@Injectable()
export class MockUser {


    constructor(
        private httpClient: HttpClient,
        private urlService: UrlService,
        private skillTypesService: SkillTypesService,
    ) { }

    private selectedCandidate: SimpleTrainee = USER_OBJECT;

    // Set the current selected candidate to the candidate input
    setSelectedCandidate(candidate: SimpleTrainee): void {
        this.selectedCandidate = USER_OBJECT;
    }

    // Return the current selected candidate
    getSelectedCandidate(): SimpleTrainee {
        return this.selectedCandidate;
    }
}
