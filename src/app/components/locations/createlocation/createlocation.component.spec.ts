import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Dependencies } from '../../../caliber.test.module';
import { CreatelocationComponent } from './createlocation.component';


xdescribe('CreatelocationComponent', () => {
  let component: CreatelocationComponent;
  let fixture: ComponentFixture<CreatelocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatelocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
