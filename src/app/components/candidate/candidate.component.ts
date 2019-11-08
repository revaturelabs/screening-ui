import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
/**
 * @author Tucker Belton | 1903 USF | Emily Higgins
 * The component needs work however it fall outside the scope of out iteration.
 * The html does not display candidates, and the modal form that appears does not
 * actually submit the data it takes. It call completely unrelated methods.
 * Even if it did this TypeScript file does not have the functions to handle it.
 */

@Component({
  selector: "app-candidate",
  templateUrl: "./candidate.component.html",
  styleUrls: ["./candidate.component.css"]
})
export class CandidateComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  open(content) {
    this.modalService.open(content, { windowClass: "fixed-modal" });
  }
}
