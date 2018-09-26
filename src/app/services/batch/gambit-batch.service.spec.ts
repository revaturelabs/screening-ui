// import { TestBed, inject, async } from '@angular/core/testing';

// import { GambitBatchService } from './gam-batch.service';
// import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
// import { GambitBatch } from '../../entities/GambitBatch';
// import { UrlService } from '../urls/url.service';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { Batch } from '../../../portals/Caliber/entities/Batch';
// import { environment } from '../../../../environments/environment';

// xdescribe('GambitBatchService', () => {
//   const batch = new GambitBatch();
//   this.context = environment.context;
//   batch.trainer = 100;
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [UrlService, GambitBatchService],
//       imports: [HttpClientModule,
//         HttpClientTestingModule]
//     });
//   });

//   it('batch should be created', inject([GambitBatchService], (service: GambitBatchService) => {
//     expect(service).toBeTruthy();
//   }));

//   it(`should fetchAll batches and verify the response`,
//     async(
//       inject([HttpClient, HttpTestingController, GambitBatchService],
//         (http: HttpClient, backend: HttpTestingController, service: GambitBatchService) => {
//           service.fetchAll().subscribe();

//           backend.expectOne({
//             url: `${this.context}batches`,
//             method: 'GET'
//           });
//         })
//     )
//   );

//   it(`should fetchAll batches and verify the observable`,
//     async(
//       inject([HttpClient, HttpTestingController, GambitBatchService],
//         (http: HttpClient, backend: HttpTestingController, service: GambitBatchService) => {
//           service.fetchAll().subscribe(next => {
//             expect(next).toBeTruthy();
//           });

//           backend.expectOne(`${this.context}batches`).flush({});
//         })
//     )
//   );

//   it(`should NOT fail when sending an unmatched request to fetchAll`,
//     async(
//       inject([HttpClient, HttpTestingController, GambitBatchService],
//         (http: HttpClient, backend: HttpTestingController, service: GambitBatchService) => {
//           service.fetchAll().subscribe();

//           backend.match(`${this.context}batches`);
//         })
//     )
//   );

//   it(`should fetchAllByTrainer and verify the response`,
//     async(
//       inject([HttpClient, HttpTestingController, GambitBatchService],
//         (http: HttpClient, backend: HttpTestingController, service: GambitBatchService) => {
//           service.fetchAllByTrainer().subscribe();

//           backend.expectOne({
//             url: `${this.context}batches/trainers`,
//             method: 'GET'
//           });
//         })
//     )
//   );

//   it(`should fetchAllByTrainer and verify the observable`,
//     async(
//       inject([HttpClient, HttpTestingController, GambitBatchService],
//         (http: HttpClient, backend: HttpTestingController, service: GambitBatchService) => {
//           service.fetchAllByTrainer().subscribe(next => {
//             expect(next).toBeTruthy();
//           });

//           backend.expectOne(`${this.context}batches/trainers`).flush({});
//         })
//     )
//   );

//   it(`should NOT fail when sending an unmatched request to fetchAllByTrainer`,
//     async(
//       inject([HttpClient, HttpTestingController, GambitBatchService],
//         (http: HttpClient, backend: HttpTestingController, service: GambitBatchService) => {
//           service.fetchAllByTrainer().subscribe();

//           backend.match(`${this.context}batches/trainers`);
//         })
//     )
//   );

//   it(`should fetchAllByTrainerId and verify the response`,
//     async(
//       inject([HttpClient, HttpTestingController, GambitBatchService],
//         (http: HttpClient, backend: HttpTestingController, service: GambitBatchService) => {
//           service.fetchAllByTrainerId(batch.trainer).subscribe();

//           backend.expectOne({
//             url: `${this.context}batches/trainers/${batch.trainer}`,
//             method: 'GET'
//           });
//         })
//     )
//   );

//   it(`should fetchAllByTrainerId and verify the observable`,
//     async(
//       inject([HttpClient, HttpTestingController, GambitBatchService],
//         (http: HttpClient, backend: HttpTestingController, service: GambitBatchService) => {
//           service.fetchAllByTrainerId(batch.trainer).subscribe(next => {
//             expect(next).toBeTruthy();
//           });

//           backend.expectOne(`${this.context}batches/trainers/${batch.trainer}`).flush({});
//         })
//     )
//   );

//   it(`should NOT fail when sending an unmatched request to fetchAllByTrainerId`,
//     async(
//       inject([HttpClient, HttpTestingController, GambitBatchService],
//         (http: HttpClient, backend: HttpTestingController, service: GambitBatchService) => {
//           service.fetchAllByTrainerId(batch.trainer).subscribe();

//           backend.match(`${this.context}batches/trainers/${batch.trainer}`);
//         })
//     )
//   );

//   it(`should create a batch and verify the response`,
//     async(
//       inject([HttpClient, HttpTestingController, GambitBatchService],
//         (http: HttpClient, backend: HttpTestingController, service: GambitBatchService) => {
//           service.create(batch).subscribe();

//           backend.expectOne({
//             url: `${this.context}batches`,
//             method: 'POST'
//           });
//         })
//     )
//   );

//   it(`should create a batch and verify the observable`,
//     async(
//       inject([HttpClient, HttpTestingController, GambitBatchService],
//         (http: HttpClient, backend: HttpTestingController, service: GambitBatchService) => {
//           service.create(batch).subscribe(next => {
//             expect(next).toBeTruthy();
//           });

//           backend.expectOne(`${this.context}batches`).flush({});
//         })
//     )
//   );

//   it(`should NOT fail when sending an unmatched request to create a batch`,
//     async(
//       inject([HttpClient, HttpTestingController, GambitBatchService],
//         (http: HttpClient, backend: HttpTestingController, service: GambitBatchService) => {
//           service.create(batch).subscribe();

//           backend.match(`${this.context}batches`);
//         })
//     )
//   );

//   it(`should update a batch and verify the response`,
//     async(
//       inject([HttpClient, HttpTestingController, GambitBatchService],
//         (http: HttpClient, backend: HttpTestingController, service: GambitBatchService) => {
//           service.update(batch).subscribe();

//           backend.expectOne({
//             url: `${this.context}batches`,
//             method: 'PUT'
//           });
//         })
//     )
//   );

//   it(`should update a batch and verify the observable`,
//     async(
//       inject([HttpClient, HttpTestingController, GambitBatchService],
//         (http: HttpClient, backend: HttpTestingController, service: GambitBatchService) => {
//           service.update(batch).subscribe(next => {
//             expect(next).toBeTruthy();
//           });

//           backend.expectOne(`${this.context}batches`).flush({});
//         })
//     )
//   );

//   it(`should NOT fail when sending an unmatched request to update a batch`,
//     async(
//       inject([HttpClient, HttpTestingController, GambitBatchService],
//         (http: HttpClient, backend: HttpTestingController, service: GambitBatchService) => {
//           service.update(batch).subscribe();

//           backend.match(`${this.context}batches`);
//         })
//     )
//   );

//   it(`should delete a batch and verify the response`,
//     async(
//       inject([HttpClient, HttpTestingController, GambitBatchService],
//         (http: HttpClient, backend: HttpTestingController, service: GambitBatchService) => {
//           service.delete(batch).subscribe();

//           backend.expectOne({
//             url: `${this.context}batches/${batch.batchId}`,
//             method: 'DELETE'
//           });
//         })
//     )
//   );

//   it(`should delete a batch and verify the observable`,
//     async(
//       inject([HttpClient, HttpTestingController, GambitBatchService],
//         (http: HttpClient, backend: HttpTestingController, service: GambitBatchService) => {
//           service.delete(batch).subscribe(next => {
//             expect(next).toBeTruthy();
//           });

//           backend.expectOne(`${this.context}batches/${batch.batchId}`).flush({});
//         })
//     )
//   );

//   it(`should NOT fail when sending an unmatched request to delete a batch`,
//     async(
//       inject([HttpClient, HttpTestingController, GambitBatchService],
//         (http: HttpClient, backend: HttpTestingController, service: GambitBatchService) => {
//           service.delete(batch).subscribe();

//           backend.match(`${this.context}batches/${batch.batchId}`);
//         })
//     )
//   );
// });
