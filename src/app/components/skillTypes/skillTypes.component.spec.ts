import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { SkillTypesComponent } from './skillTypes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BucketsService } from 'src/app/services/buckets/buckets.service';
import { UrlService } from 'src/app/services/urls/url.service';
import { AlertsService } from 'src/app/services/alert-service/alerts.service';
import { SkillTypesService } from 'src/app/services/skill-types/skill-types.service';
import { SkillTypeBucketService } from 'src/app/services/skillTypeBucketLookup/skill-type-bucket.service';

describe('skillTypesComponent', () => {

    let component: SkillTypesComponent;
    let fixture: ComponentFixture<SkillTypesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgbModule, FormsModule, RouterTestingModule, HttpClientModule],
            declarations: [SkillTypesComponent],
            providers: [BucketsService, UrlService, AlertsService, FormBuilder, SkillTypesService, SkillTypeBucketService]
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
});
