import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateComponent } from './candidate.component';
import { FormsModule } from '@angular/forms';
import { BucketFilterPipe } from 'src/app/pipes/skillType-buckets.filter';
import { UrlService } from 'src/app/services/urls/url.service';

describe('CandidateComponent', () => {
  let component: CandidateComponent;
  let fixture: ComponentFixture<CandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ CandidateComponent, BucketFilterPipe ],
      providers: [UrlService]
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
