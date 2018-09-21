import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BucketsService } from '../services/buckets.service';
import { Bucket } from '../entities/Bucket';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})

/**
 * Bucket component displays and controls interactions with
 * an individual bucket, and displays the question list for that bucket.
 * Bucket component also contains route to the question component.
 */
export class BucketComponent implements OnInit {

  theBucket: Bucket;
  constructor(
    private router: Router,
    private bucketService: BucketsService,
    private modalService: NgbModal) {

  }

  ngOnInit() {
    this.setBucket();
  }

  /**
   * setBucket sets bucket in component to bucket passed by bucketService method.
   */
  setBucket() {
    this.theBucket = this.bucketService.getCurrentBucket();
  }

  /**
   * routeToBuckets() sends user back to the tabbed page showing Skill Types and Buckets tabs.
   */
  routeToAllBuckets() {
    this.bucketService.routingToAllBuckets = true;
    this.router.navigate(['Caliber/settings/screening']);
  }

}
