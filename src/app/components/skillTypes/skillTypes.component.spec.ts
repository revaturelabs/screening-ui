import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbTabset, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillType } from '../../entities/SkillType';
import { SkillTypesService } from '../../services/skill-types/skill-types.service';
import { Bucket } from '../../entities/Bucket';
import { Weight } from '../../entities/Weight';
import { BucketsService } from '../../services/buckets/buckets.service';
import { AlertsService } from '../../services/alert-service/alerts.service';
import { SkillTypeBucketService } from '../../services/skillTypeBucketLookup/skill-type-bucket.service';
import { SkillTypesComponent } from './skillTypes.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlService } from '../../services/urls/url.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


fdescribe('', () => {
    let component: SkillTypesComponent;
    let fixture: ComponentFixture<SkillTypesComponent>;
    let stbs: SkillTypeBucketService;
    let urlService: UrlService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SkillTypesComponent],
            imports: [FormsModule, HttpClientTestingModule],
            providers: [NgbTabset, HttpClient, HttpHandler, UrlService, BucketsService, SkillTypesService, NgbModal, AlertsService, SkillTypeBucketService, HttpTestingController]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SkillTypesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        //locationService = TestBed.get(SkillTypeBucketService);
        let track: SkillType ={
            skillTypeId: 1,
            title: "Test",
            active: true,
        }

        let weight: Weight = {
            weightId: 0,
            weightValue: 50,
            skillType: track,
            bucket: new Bucket(), 
        };
        component.skillTypeWeights.push(weight);

        let weight2: Weight = {
            weightId: 1,
            weightValue: -50,
            skillType: new SkillType(),
            bucket: new Bucket()
        };
        component.skillTypeWeights.push(weight2);

        let weight3: Weight = {
            weightId: 2,
            weightValue: 500,
            skillType: new SkillType(),
            bucket: new Bucket()
        };
        component.skillTypeWeights.push(weight3);

        let weight4: Weight = {
            weightId: 3,
            weightValue: 50,
            skillType: new SkillType(),
            bucket: new Bucket()
        };
        component.skillTypeWeights.push(weight4);
    });

    it('SkillTypes should create', () => {
        expect(component).toBeTruthy();
    });

    it('skillTypeWeights should not contain', () => {
        let weight4: Weight = {
            weightId: 3,
            weightValue: 50,
            skillType: new SkillType(),
            bucket: new Bucket()
        };

        component.removeWeight(3);
        expect(component.skillTypeWeights).not.toContain(weight4);
    });

    it("Check weight value above 100", () => {
        component.checkMinMax(component.skillTypeWeights[2]);
        expect(component.skillTypeWeights[2].weightValue).toEqual(100);
    });

    it("Check weight value below 0", () => {
        component.checkMinMax(component.skillTypeWeights[1]);
        expect(component.skillTypeWeights[1].weightValue).toEqual(0);
    });

    it("Check sum of buckets equals 100", () => {
        component.skillTypeWeights = [];
        let weight: Weight = {
            weightId: 0,
            weightValue: 50,
            skillType: new SkillType(),
            bucket: new Bucket(), 
        };
        component.skillTypeWeights.push(weight);

        let weight2: Weight = {
            weightId: 1,
            weightValue: 50,
            skillType: new SkillType(),
            bucket: new Bucket()
        };
        component.skillTypeWeights.push(weight2);
        
        component.checkBucketSum();
        expect(component.error).toBeFalsy();
    });

    it("Check sum of buckets not equals 100", () => {
        component.checkBucketSum()
        expect(component.error).toBeTruthy();

    });

    it("Check if skillTypeWeights is empty", () => {
        component.skillTypeWeights = [];
        component.checkBucketSum();
        expect(component.error).toBeFalsy();
    });

    it("check result of compare", () => {
        component.skillTypeWeights = [];
        component.checkBucketSum();
        expect(component.error).toBeFalsy();
    });

    it('returns mock with id of 3', inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
        const mockResponse = [
          {
            weightId: 3,
            weightValue: 50,
            skillType: new SkillType(),
            bucket: new Bucket()
          },
          {
            weightId: 2,
            weightValue: 500,
            skillType: new SkillType(),
            bucket: new Bucket()
          }
        ];
        stbs = TestBed.get(SkillTypeBucketService);
        urlService = TestBed.get(UrlService);
        stbs.getAllWeights().subscribe(
          actualWeights => {
            expect(actualWeights.length).toBe(1);
            expect(actualWeights[0].id).toEqual(3);
          }
        );
        let urlR = urlService.weights.getAll();
        const req = httpMock.expectOne({ method: 'GET', url: urlR });
        expect(req.request.method).toEqual('GET');
  
        req.flush(mockResponse);
        httpMock.verify();
      }));

});
