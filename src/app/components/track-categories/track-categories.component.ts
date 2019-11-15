import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
/** component, service imports */
import { Category } from "../../entities/Category";
import { CategoriesService } from "../../services/categories/categories.service";
import { QuestionsService } from "../../services/questions/questions.service";
/** style lib. imports */
import { CategoryFilterPipe } from "../../pipes/track-categories.filter";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { AlertsService } from "../../services/alert-service/alerts.service";

@Component({
  selector: "app-track-categories",
  templateUrl: "./track-categories.component.html",
  styleUrls: ["./track-categories.component.css"]
})
export class TrackCategoriesComponent implements OnInit {
  /** variable to hold an array of 'Category' entities */
  categories: Category[];
  /** variable to hold category being edited */
  currCategory: Category;
  /** variable to hold new category being created  */
  newCategory: Category = new Category();

  /** Modal variables */
  closeResult: string;

  constructor(
    private router: Router,
    private categoryService: CategoriesService,

    private modalService: NgbModal,
    private alertsService: AlertsService
  ) {}

  filter: Category = new Category();
  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
      this.categories.sort(this.compare); // compares the categories based on them being toggled active or not
      this.categories.sort(this.compareAlphabetically); // compares the categories and sorts alphabetically
      this.categories.sort(this.compareInactiveCategories);
    });
  }

  /** used to compare categories Array to sort it based on status */
  compare(a: Category, b: Category) {
    if (a.isActive) {
      return -1;
    } else {
      return 1;
    }
  }

  /** used to compare categories Array to sorts it alphabetically */
  compareAlphabetically(a: Category, b: Category) {
    if (
      a.isActive &&
      a.categoryDescription.toLocaleLowerCase() <
        b.categoryDescription.toLocaleLowerCase()
    ) {
      return -1;
    } else {
      return 1;
    }
  }

  compareInactiveCategories(a: Category, b: Category) {
    if (
      !a.isActive &&
      !b.isActive &&
      a.categoryDescription.toLocaleLowerCase() <
        b.categoryDescription.toLocaleLowerCase()
    ) {
      return -1;
    } else {
      return 1;
    }
  }

  /** Save the selected 'category' in 'category.service' to be used in
   * 'category.component'.
   * Then route to 'category.component'.
   */
  routeToCategory(item: Category) {
    this.categoryService.setCategory(item);
    this.router.navigate(["settings/category"]);
  }

  /** Stores the value of selected category to a 'currCategory' */
  editCategory(category: Category) {
    this.currCategory = category;
  }

  /**
   * resposible for making call for updating a category
   * when edited or activity toggled
   * @param categoryParam
   */
  updateCategory(categoryParam: Category) {
    if (!categoryParam) {
      categoryParam = this.currCategory;
    }
    if (categoryParam) {
      this.categoryService.updateCategory(categoryParam).subscribe(category => {
        this.getCategories();
      });
      this.savedSuccessfully();
    }
  }

  /** Creates new category */
  createCategory() {
    // The server will generate the id for this new hero
    this.categoryService
      .createNewCategory(this.newCategory)
      .subscribe(category => {
        this.categories.push(category);
        this.getCategories();
      });
  }

  savedSuccessfully() {
    this.alertsService.success("Saved successfully");
  }

  open(content) {
    this.modalService.open(content).result.then(
      result => {
        this.newCategory = new Category();
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.newCategory.categoryDescription = "";
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
    event.stopPropagation();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
