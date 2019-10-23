import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleTraineeService } from '../../services/simpleTrainee/simple-trainee.service';
import { IntroductionComponent } from './introduction.component';
import { HttpClient } from '@angular/common/http';
import { SkillTypesService } from 'src/app/services/skill-types/skill-types.service';
import { UrlService } from 'src/app/services/urls/url.service';
import { ScreeningService } from 'src/app/services/screening/screening.service';
import { SimpleTrainee } from 'src/app/entities/SimpleTrainee';
import { Observable } from 'rxjs';
import { Dependencies } from 'src/app/caliber.test.module';
//must be run by itself
/* xdescribe('IntroductionComponent', () => {
  let component: IntroductionComponent;
  let fixture: ComponentFixture<IntroductionComponent>;
  let serv: SimpleTraineeService;
  let httpClient: HttpClient;
  let urlService: UrlService;
  let skillTypesService: SkillTypesService;
  let mockserv: SimpleTraineeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionComponent);
    component = fixture.componentInstance;
    // serv = new SimpleTraineeService(httpClient, urlService, skillTypesService);
    fixture.detectChanges();
    // mockserv = TestBed.get(serv);

  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
}); */
