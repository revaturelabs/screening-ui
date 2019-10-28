import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
// refactor bucket -> category
import { Category } from '../../entities/Category';
import { UrlService } from '../urls/url.service';

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
            'Content-Type':  'application/json'
        })
    };

@Injectable()
// refactor bucket -> category
export class CategoriesService {

  /** Making an Observable */
  categorySubject = new Subject();

  private currentCategory: Category;

  constructor(
    private http: HttpClient,
    private urlService: UrlService
    ) {}

  // refactor bucket -> category
  getAllCategories(): Observable<Category[]> {
      return this.http.get<Category[]>(this.urlService.category.getAllCategories());
  }

  // refactor bucket -> category
  getCategoryById(categoryId: number) {
      return this.http.get<Category>(this.urlService.category.getCategoryById(categoryId));
  }

  // refactor bucket -> category
  updateCategory (category: Category) {
    return this.http.put<Category>(this.urlService.category.updateCategory() + '/' + category.categoryId, category, httpOptions);
  }
  // refactor bucket -> category
  // Delete bucket
  deleteCategory(category: Category) {
      return this.http.delete<Category>(this.urlService.category.deleteCategory() + '/' + category.categoryId, httpOptions );
  }

  // refactor bucket -> category
  createNewCategory(category: Category): Observable<Category> {
      return this.http.post<Category>(this.urlService.category.createNewCategory(), category, httpOptions);
  }

  // refactor bucket -> category
  setCategory(category: Category) {
     this.currentCategory = category;
  }

  // refactor bucket -> category
  getCurrentCategory(): Category {
     if (this.currentCategory != null) {
         return this.currentCategory;
     }
  }

  // refactor bucket -> category
  setName(name: string) {
      this.currentCategory.categoryDescription = name;
  }

  // refactor bucket -> category
  getName(id: number) {
      return this.currentCategory.categoryDescription;
  }

  // refactor bucket -> category
  setDescription(desc: string) {
      this.currentCategory.categoryDescription = desc;
  }

  // refactor bucket -> category
  getDescription() {
      return this.currentCategory.categoryDescription;
  }

}
