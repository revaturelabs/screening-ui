import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationsByTypeComponent } from './violations-by-type.component';

describe('ViolationsByTypeComponent', () => {
  let component: ViolationsByTypeComponent;
  let fixture: ComponentFixture<ViolationsByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViolationsByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationsByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
