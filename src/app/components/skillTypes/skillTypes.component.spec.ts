import { async, TestBed, ComponentFixture, fakeAsync } from '@angular/core/testing';
import { SkillTypesComponent } from './skillTypes.component';
import { NgbModule, NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BucketsService } from 'src/app/services/buckets/buckets.service';
import { UrlService } from 'src/app/services/urls/url.service';
import { AlertsService } from 'src/app/services/alert-service/alerts.service';
import { SkillTypesService } from 'src/app/services/skill-types/skill-types.service';
import { SkillTypeBucketService } from 'src/app/services/skillTypeBucketLookup/skill-type-bucket.service';
import { SKILLTYPES } from 'src/app/mock-data/mock-skillTypes';
import { SkillType } from 'src/app/entities/SkillType';
import { of } from 'rxjs';

describe('skillTypesComponent', () => {

    let component: SkillTypesComponent;
    let fixture: ComponentFixture<SkillTypesComponent>;
    let fakeSkillTypeService = jasmine.createSpyObj('SkillTypesService', ['updateSkillType']);
    let mockSkillType:SkillType = {
        skillTypeId: 52,
        title: 'Java EE/Microservices',
        active: true
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgbModule, FormsModule, RouterTestingModule, HttpClientModule],
            declarations: [SkillTypesComponent],
            providers: [BucketsService, UrlService, AlertsService, FormBuilder, SkillTypesService, SkillTypeBucketService,
            NgbTabset]
        }) .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SkillTypesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`should create`, (done: DoneFn) => {
        expect(component).toBeTruthy();
        done();
    });

    it('should change track status', (done: DoneFn) => {
        //make a spy of whatever service is retrieving track infromation from database on init component.oninit
        //pass in fake track array
        //check if DOM is updated
        //check if DOM is updated dynamically
        //strucutral directive
        //once gotten dummy data make sure its listed correctly
        //identify toggle button
        //declaration inside test to c if toggle button works
        //it('should change question status', () => {
            //     component.changeQuestionStatus(QUESTIONS[0]);
            //     expect(QUESTIONS[0].isActive).toBe(false);
            //     component.changeQuestionStatus(QUESTIONS[0]);
            //     expect(QUESTIONS[0].isActive).toBe(true);
            //   });

            // Create a fake TwainService object with a `getQuote()` spy
            //const twainService = jasmine.createSpyObj('TwainService', ['getQuote']);
            // Make the spy return a synchronous Observable with the test data
            //getQuoteSpy = twainService.getQuote.and.returnValue( of(testQuote) );       
        const skillTypeChanged = fakeSkillTypeService.updateSkillType.and.returnValue(of(mockSkillType));
        expect(mockSkillType.active).toBe(false)
        
    });
});
