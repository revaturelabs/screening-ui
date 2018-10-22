import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
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
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';


describe('', () => {
    let component: SkillTypesComponent;
    let fixture: ComponentFixture<SkillTypesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SkillTypesComponent],
            imports: [FormsModule],
            providers: [NgbTabset, HttpClient, HttpHandler, UrlService, BucketsService, SkillTypesService, NgbModal, AlertsService, SkillTypeBucketService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SkillTypesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        let track: SkillType ={
            skillTypeId: 1,
            title: "Test",
            isActive: true,
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
});
