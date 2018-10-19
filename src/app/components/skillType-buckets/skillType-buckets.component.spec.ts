import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { RouterOutlet, ChildrenOutletContexts, Router } from '@angular/router';
import { SkillTypeBucketsComponent } from './skillType-buckets.component';
import { routes } from '../../app.routes';
describe('SkillTypeBucketsComponent', () => {
  let component: SkillTypeBucketsComponent;
  let fixture: ComponentFixture<SkillTypeBucketsComponent>;
  let httpClientSpyOnGet: {get: jasmine.Spy};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SkillTypeBucketsComponent,
        RouterOutlet
      ],
      providers: [
        ChildrenOutletContexts,
        Router,
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
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

  // it('getBuckets should return all buckets', () => {
  //   httpClientSpyOnGet = jasmine.createSpyObj('http',['get']);

  // });
});
