import { TestBed, inject, async } from '@angular/core/testing';

import { TrainerService } from './trainer.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { UrlService } from '../urls/url.service';
import { environment } from '../../../environments/environment';
import { GambitTrainer } from '../../entities/GambitTrainer';

xdescribe('TrainerService', () => {
  const trainer: GambitTrainer = new GambitTrainer();
  trainer.email = 'hey@stop.it';
  this.context = environment.gambitContext;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainerService, UrlService],
      imports: [HttpClientModule,
        HttpClientTestingModule]
    });
  });

  it('should be created', inject([TrainerService], (service: TrainerService) => {
    expect(service).toBeTruthy();
  }));

  it(`should fetchAll trainers and verify the response`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.fetchAll().subscribe();

          backend.expectOne({
            url: `${this.context}trainers`,
            method: 'GET'
          });
        })
    )
  );

  it(`should fetchAll trainers and verify the observable`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.fetchAll().subscribe(next => {
            expect(next).toBeTruthy();
          });

          backend.expectOne(`${this.context}trainers`).flush({});
        })
    )
  );

  it(`should NOT fail when sending an unmatched request to fetchAll`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.fetchAll().subscribe();

          backend.match(`${this.context}trainers`);
        })
    )
  );

  it(`should fetchByEmail and verify the response`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.fetchByEmail(trainer.email).subscribe();

          backend.expectOne({
            url: `${this.context}trainers/email/${trainer.email}/`,
            method: 'GET'
          });
        })
    )
  );

  it(`should fetchByEmail and verify the observable`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.fetchByEmail(trainer.email).subscribe(next => {
            expect(next).toBeTruthy();
          });

          backend.expectOne(`${this.context}trainers/email/${trainer.email}/`).flush({});
        })
    )
  );

  it(`should NOT fail when sending an unmatched request to fetchByEmail`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.fetchByEmail(trainer.email).subscribe();

          backend.match(`${this.context}trainers/email/${trainer.email}/`);
        })
    )
  );

  it(`should fetchTitles and verify the response`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.fetchTitles().subscribe();

          backend.expectOne({
            url: `${this.context}trainers/titles`,
            method: 'GET'
          });
        })
    )
  );

  it(`should fetchTitles and verify the observable`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.fetchTitles().subscribe(next => {
            expect(next).toBeTruthy();
          });

          backend.expectOne(`${this.context}trainers/titles`).flush({});
        })
    )
  );

  it(`should NOT fail when sending an unmatched request to fetchTitles`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.fetchTitles().subscribe();

          backend.match(`${this.context}trainers/titles`);
        })
    )
  );

  it(`should fetchRoles and verify the response`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.fetchRoles().subscribe();

          backend.expectOne({
            url: `${this.context}trainers/roles`,
            method: 'GET'
          });
        })
    )
  );

  it(`should fetchRoles and verify the observable`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.fetchRoles().subscribe(next => {
            expect(next).toBeTruthy();
          });

          backend.expectOne(`${this.context}trainers/roles`).flush({});
        })
    )
  );

  it(`should NOT fail when sending an unmatched request to fetchTitles`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.fetchRoles().subscribe();

          backend.match(`${this.context}trainers/roles`);
        })
    )
  );

  it(`should create a trainer and verify the response`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.create(new GambitTrainer).subscribe();

          backend.expectOne({
            url: `${this.context}trainers`,
            method: 'POST'
          });
        })
    )
  );

  it(`should create a trainer and verify the observable`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.create(trainer).subscribe(next => {
            expect(next).toBeTruthy();
          });

          backend.expectOne(`${this.context}trainers`).flush({});
        })
    )
  );

  it(`should NOT fail when sending an unmatched request to create`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.create(trainer).subscribe();

          backend.match(`${this.context}trainers`);
        })
    )
  );

  it(`should update a trainer and verify the response`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.update(trainer).subscribe();

          backend.expectOne({
            url: `${this.context}trainers`,
            method: 'PUT'
          });
        })
    )
  );

  it(`should update a trainer and verify the observable`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.update(trainer).subscribe(next => {
            expect(next).toBeTruthy();
          });

          backend.expectOne(`${this.context}trainers`).flush({});
        })
    )
  );

  it(`should NOT fail when sending an unmatched request to update`,
    async(
      inject([HttpClient, HttpTestingController, TrainerService],
        (http: HttpClient, backend: HttpTestingController, service: TrainerService) => {
          service.update(trainer).subscribe();

          backend.match(`${this.context}trainers`);
        })
    )
  );
});
