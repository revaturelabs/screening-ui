import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsufficientPrivilagesComponent } from './insufficient-privilages.component';

describe('InsufficientPrivilagesComponent', () => {
  let component: InsufficientPrivilagesComponent;
  let fixture: ComponentFixture<InsufficientPrivilagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsufficientPrivilagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsufficientPrivilagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
