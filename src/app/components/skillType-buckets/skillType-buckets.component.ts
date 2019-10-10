import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/** component, service imports */
import { Bucket } from '../../entities/Bucket';
import { BucketsService } from '../../services/buckets/buckets.service';
import { QuestionsService } from '../../services/questions/questions.service';
/** style lib. imports */
import { BucketFilterPipe } from '../../pipes/skillType-buckets.filter';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AlertsService } from '../../services/alert-service/alerts.service';
import { QUESTIONS } from '../../mock-data/mock-questions';
import { BUCKETS } from '../../mock-data/mock-buckets';

@Component({
  selector: 'app-skill-type-buckets',
  templateUrl: './skillType-buckets.component.html',
  styleUrls: ['./skillType-buckets.component.css']
})
export class SkillTypeBucketsComponent implements OnInit {
  /** variable to hold an array of 'Bucket' entities */
  buckets: Bucket[];
  bucket: Bucket;
  /** variable to hold bucket being edited */
  currBucket: Bucket;
  /** variable to hold new bucket being created  */
  newBucket: Bucket = new Bucket();

  /** Modal variables */
  closeResult: string;

  constructor(
    private router: Router,
    private bucketService: BucketsService,
    private questionService: QuestionsService,
    private modalService: NgbModal,
    private alertsService: AlertsService
  ) {
    // Used for diplaying mock data as buckets
    this.buckets = BUCKETS;
  }

  filter: Bucket = new Bucket();
  ngOnInit() {
    this.getBuckets();
  }

  getBuckets(): void {
    this.bucketService.getAllBuckets().subscribe(buckets => {
      console.log(buckets);
    this.buckets = buckets;
      this.buckets.sort(this.compare);
     });
  }

  /** used to compare buckets Array to sort it based on status */
  compare(a: Bucket, b: Bucket) {
    if (a.isActive) {
      return -1;
    } else {
      return 1;
    }
  }

  /** Save the selected 'bucket' in 'bucket.service' to be used in
   * 'bucket.component'.
   * Then route to 'bucket.component'.
   */
  routeToBucket(item: Bucket) {
    this.bucketService.setBucket(item);
    this.router.navigate(['settings/bucket']);
  }

  /** Stores the value of selected bucket to a 'currBucket' */
  editBucket(bucket: Bucket) {
    this.bucketService.updateBucket(bucket).subscribe(
      data => {
        this.currBucket=data;

      }
    );
  }

  /**
   * resposible for making call for updating a bucket
   * when edited or activity toggled
   * @param bucketParam
   */
  updateBucket(bucketParam: Bucket) {
    if (!bucketParam) {
      bucketParam = this.currBucket;
    }
    if (bucketParam) {
      console.log(bucketParam.isActive);
      this.bucketService.updateBucket(bucketParam).subscribe(bucket => {
        this.getBuckets();
      });
      this.savedSuccessfully();
    }
  }

  /** Creates new bucket */
  createBucket() {
    // The server will generate the id for this new hero
    this.bucketService.createNewBucket(this.newBucket).subscribe(bucket => {
      this.buckets.push(bucket);
    });
  }

  savedSuccessfully() {
    this.alertsService.success('Saved successfully');
  }

  open(content) {
    this.modalService.open(content).result.then(
      result => {
        this.newBucket = new Bucket();
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.newBucket.bucketDescription = '';
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
    event.stopPropagation();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
