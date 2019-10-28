import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassFailComponent } from './pass-fail.component';
import { Dependencies } from '../../screenforce.test.module';

// Author: David Gustafson

// Cannot test: Appears to be error on component side

describe('PassFailComponent', () => {
  let component: PassFailComponent;
  let fixture: ComponentFixture<PassFailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies)
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassFailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
