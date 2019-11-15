import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { CategoriesService } from "../../services/categories/categories.service";
import { TrackCategoriesComponent } from "./track-categories.component";
import { FormsModule } from "@angular/forms";
import { AlertsService } from "../../services/alert-service/alerts.service";
import { Category } from "../../entities/Category";
import { of } from "rxjs";
import { HttpClientModule } from "@angular/common/http";
import { UrlService } from "../../services/urls/url.service";

describe("TrackCategoriesComponent", () => {
  let fixture: ComponentFixture<TrackCategoriesComponent>;
  let component: TrackCategoriesComponent;
  let fakeCategoryService: CategoriesService;
  let mockcategory: Category = {
    categoryId: 1,
    categoryDescription: "Hi",
    isActive: true
  };
  let category2: Category = {
    categoryId: 2,
    categoryDescription: "Hi",
    isActive: true
  };
  let fakeBukets: Category[] = [mockcategory];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, HttpClientModule],
      declarations: [TrackCategoriesComponent],
      providers: [CategoriesService, AlertsService, UrlService]
    });
    fixture = TestBed.createComponent(TrackCategoriesComponent);
    component = fixture.componentInstance;
    fakeCategoryService = TestBed.get(CategoriesService);
  });
  it(`Checking if all categories were returned`, () => {
    spyOn(fakeCategoryService, `getAllCategories`).and.returnValues(
      of(fakeBukets)
    );
  });

  it("Checking if category is created", () => {
    spyOn(fakeCategoryService, "createNewCategory").and.returnValues(
      of(fakeBukets[0])
    );
  });
});
