import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { BucketsService } from '../../services/buckets/buckets.service';
import { SkillTypeBucketsComponent } from './skillType-buckets.component';
import { FormsModule } from '@angular/forms';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertsService } from 'src/app/services/alert-service/alerts.service';

describe('SkillTypeBucketsComponent', () => {
  let component: SkillTypeBucketsComponent;
  let fixture: ComponentFixture<SkillTypeBucketsComponent>;
  let fakeBucketsService: Partial<BucketsService>;
  let fakeAlertService:Partial<AlertsService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillTypeBucketsComponent ],
      providers:    [ {provide: BucketsService, useValue: fakeBucketsService },{
        provide:AlertsService,useValue:fakeAlertService
      } ],
      imports: [FormsModule,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTypeBucketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });
});
