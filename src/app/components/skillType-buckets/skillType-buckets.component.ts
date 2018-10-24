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
import {ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-skill-type-buckets',
  templateUrl: './skillType-buckets.component.html',
  styleUrls: ['./skillType-buckets.component.css'],
  providers: [BucketFilterPipe]
})

export class SkillTypeBucketsComponent implements OnInit {

  /** variable to hold an array of 'Bucket' entities */
  buckets: Bucket[];
  /** variable to hold bucket being edited */
  currBucket: Bucket;
  /** variable to hold new bucket being created  */
  newBucket: Bucket = new Bucket();

  /** Modal variables */
  closeResult: string;
  dismissResult: string;

  bucketFilter: BucketFilterPipe;

  @ViewChild('create') createModalRef: ElementRef;

  constructor(
    private router: Router,
    private bucketService: BucketsService,
    private questionService: QuestionsService,
    private modalService: NgbModal,
    private alertsService: AlertsService
    ) { }

  filter: Bucket = new Bucket();
  ngOnInit() {
    this.getBuckets();
  }

  getBuckets(): void {
    this.bucketService.getAllBuckets().subscribe(buckets => {
      this.buckets = this.customSort(buckets);
    });
  }

  customSort(buckets: Bucket[]): Bucket[] {
    buckets.sort(this.compare);
    let active: Bucket[];
    let inactive: Bucket[];
    const index = buckets.indexOf(buckets.find(bucket=>bucket.isActive===false));
    active=buckets.slice(0,index).sort(this.alphabetize);
    inactive=buckets.slice(index).sort(this.alphabetize);
    buckets= index!==-1 ? active.concat(inactive) : buckets.sort(this.alphabetize);
    return buckets;
  }

  alphabetize(a:Bucket, b: Bucket) {
    if(a.bucketDescription.toUpperCase()<b.bucketDescription.toUpperCase()) {
      return -1;
    } else {
      return 1;
    }
  }

  compare(a: Bucket, b: Bucket) {
    if(a.isActive) {
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
    this.currBucket = bucket;
  }

  deleteBucket() {
    if(this.currBucket) {
      this.bucketService.deleteBucket(this.currBucket.bucketId)
      .subscribe(bucket => {
        this.getBuckets();
      });
    }
  }

  /**
   * resposible for making call for updating a bucket
   * when edited or activity toggled
   * @param bucketParam
   */
  updateBucket(bucketParam: Bucket) {
    if (!bucketParam) { bucketParam = this.currBucket; }
    if (bucketParam) {
      this.bucketService.updateBucket(bucketParam).subscribe(bucket => {
        this.getBuckets();
      });
      this.savedSuccessfully();
    }
  }

  /** Creates new bucket */
  createBucket() {
    // The server will generate the id for this new hero
    this.bucketService.createNewBucket(this.newBucket)
      .subscribe(bucket => {
        this.buckets.push(bucket);
        this.getBuckets();
      });
  }

  savedSuccessfully() {
    this.alertsService.success('Saved successfully');
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.newBucket = new Bucket();
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.newBucket.bucketDescription = '';
      this.dismissResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    //event.stopPropagation();
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
