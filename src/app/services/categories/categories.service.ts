import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, Subject } from "rxjs";
import { Category } from "../../entities/Category";
import { UrlService } from "../urls/url.service";

/**
 * Imported urlservice to replace hardcoded endpoints
 *
 * @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
 *
 * @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
 *
 * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
 *
 * @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
 */

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable()
export class CategoriesService {
  /** Making an Observable */
  categorySubject = new Subject();

  private currentCategory: Category;

  constructor(private http: HttpClient, private urlService: UrlService) {}

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(
      this.urlService.category.getAllCategories()
    );
  }

  getCategoryById(categoryId: number) {
    return this.http.get<Category>(
      this.urlService.category.getCategoryById(categoryId)
    );
  }

  updateCategory(category: Category) {
    return this.http.put<Category>(
      this.urlService.category.updateCategory() + "/" + category.categoryId,
      category,
      httpOptions
    );
  }

  // Delete category
  deleteCategory(category: Category) {
    return this.http.delete<Category>(
      this.urlService.category.deleteCategory() + "/" + category.categoryId,
      httpOptions
    );
  }

  createNewCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(
      this.urlService.category.createNewCategory(),
      category,
      httpOptions
    );
  }

  setCategory(category: Category) {
    this.currentCategory = category;
  }

  getCurrentCategory(): Category {
    if (this.currentCategory != null) {
      return this.currentCategory;
    }
  }

  setName(name: string) {
    this.currentCategory.categoryDescription = name;
  }

  getName(id: number) {
    return this.currentCategory.categoryDescription;
  }

  setDescription(desc: string) {
    this.currentCategory.categoryDescription = desc;
  }

  getDescription() {
    return this.currentCategory.categoryDescription;
  }
}
