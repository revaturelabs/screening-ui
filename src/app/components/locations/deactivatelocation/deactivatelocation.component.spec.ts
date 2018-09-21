import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Dependencies } from '../../../caliber.test.module';
import { DeactivateLocationComponent } from './deactivatelocation.component';


xdescribe('DeactivateLocationComponent', () => {
  let component: DeactivateLocationComponent;
  let fixture: ComponentFixture<DeactivateLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivateLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
