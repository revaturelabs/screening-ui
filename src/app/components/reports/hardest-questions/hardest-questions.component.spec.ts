import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardestQuestionsComponent } from './hardest-questions.component';

describe('HardestQuestionsComponent', () => {
  let component: HardestQuestionsComponent;
  let fixture: ComponentFixture<HardestQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardestQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardestQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
