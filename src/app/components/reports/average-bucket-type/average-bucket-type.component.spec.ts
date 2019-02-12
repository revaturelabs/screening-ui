import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageBucketTypeComponent } from './average-bucket-type.component';

describe('AverageBucketTypeComponent', () => {
  let component: AverageBucketTypeComponent;
  let fixture: ComponentFixture<AverageBucketTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageBucketTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageBucketTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
