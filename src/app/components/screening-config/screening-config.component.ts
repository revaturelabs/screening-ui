import { Component, OnInit } from '@angular/core';
import { NgbTabset, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { SkillType } from '../../entities/SkillType';
import { SkillTypesService } from '../../services/skill-types/skill-types.service';
import { Bucket } from '../../entities/Bucket';
import { Weight } from '../../entities/Weight';
import { BucketsService } from '../../services/buckets/buckets.service';
import { AlertsService } from '../../services/alert-service/alerts.service';
import { SkillTypeBucketService } from '../../services/skillTypeBucketLookup/skill-type-bucket.service';

@Component({
  selector: 'app-screening',
  templateUrl: './screening-config.component.html',
  styleUrls: ['./screening-config.component.css']
})

export class ScreeningConfigComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private skillTypeService: SkillTypesService,
    private skillTypeBucketService: SkillTypeBucketService,
    private bucketsService: BucketsService,
    private alertsService: AlertsService,
    private tab: NgbTabset
  ) {}
  ngOnInit() {}

}
