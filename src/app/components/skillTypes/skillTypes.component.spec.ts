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


describe('', () => {
    let component: SkillTypesComponent;
    let fixture: ComponentFixture<SkillTypesComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ SkillTypesComponent],
        imports: [FormsModule],
        providers: [NgbTabset, HttpClient, HttpHandler, UrlService, BucketsService, SkillTypesService, NgbModal, AlertsService, SkillTypeBucketService]
      })
      .compileComponents ();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(SkillTypesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('SkillTypes should create', () => {
      expect(component).toBeTruthy();
    });
  });