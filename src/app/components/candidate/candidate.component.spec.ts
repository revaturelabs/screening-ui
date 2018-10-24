import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CandidateComponent } from './candidate.component';
import { FormsModule } from '@angular/forms';

describe('CandidateComponent', () => {
  let component: CandidateComponent;
  let fixture: ComponentFixture<CandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateComponent ],
      imports: [FormsModule, NgbModule],
      providers: [NgbModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
