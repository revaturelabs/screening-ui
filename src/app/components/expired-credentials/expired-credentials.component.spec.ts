import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredCredentialsComponent } from './expired-credentials.component';

describe('ExpiredCredentialsComponent', () => {
  let component: ExpiredCredentialsComponent;
  let fixture: ComponentFixture<ExpiredCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiredCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
