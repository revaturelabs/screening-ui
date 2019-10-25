<<<<<<< HEAD
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SkillTypesComponent } from './skillTypes.component';
import { Dependencies } from 'src/app/caliber.test.module';
import { Bucket } from 'src/app/entities/Bucket';
import { SkillType } from 'src/app/entities/SkillType';

describe('SkillTypeBucketsComponent', () => {
  let component: SkillTypesComponent;
  let fixture: ComponentFixture<SkillTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should grab all skill types', () => {
    expect(component.grabAllSkillTypes).toBeTruthy();
  });
});
=======
describe('skillTypesComponent', ()=>{
    
})
>>>>>>> 9f992aaec9f4878c19f3226d81484f04dc80ecb1
