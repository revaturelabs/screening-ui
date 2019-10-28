import { CategoriesService } from './categories.service';
import { Category } from '../../entities/Category';
import { defer } from 'rxjs';
import { UrlService } from '../urls/url.service';
import { inject } from '@angular/core/testing';

export function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
}

export function asyncError<T>(errorObject: any) {
    return defer(() => Promise.reject(errorObject));
}

const mockcategory: Category = {
    categoryId: 1,
    categoryDescription: 'Hi',
    isActive: true
};

const categories: Category[] = [mockcategory];

describe('CategoriesService', () => {
    const testCategory = -1;
    let httpClientSpyOnGet: { get: jasmine.Spy };
    let httpClientSpyOnPut: { put: jasmine.Spy };
    let httpClientSpyOnPost: { post: jasmine.Spy };
    let categoriesService: CategoriesService;
    // testing getAllBuckets makes http request
    it('getAllCategories should return expected categories', () => {
        httpClientSpyOnGet = jasmine.createSpyObj('http', ['get']);
        categoriesService = new CategoriesService(<any>httpClientSpyOnGet, new UrlService);

        const expectedCategories: Category[] = [mockcategory];
        httpClientSpyOnGet.get.and.returnValue(asyncData(expectedCategories));

        categoriesService.getAllCategories().subscribe(
            fetchedCategories => expect(fetchedCategories).toEqual(expectedCategories, 'expected categories'),
            fail
        );
        expect(httpClientSpyOnGet.get.calls.count()).toBe(1, 'one call');
    });
    // testing CreateNewbucket makes an Http Request
    it('createNewCategory should return new Category', () => {
        httpClientSpyOnPost = jasmine.createSpyObj('http', ['post']);
        categoriesService = new CategoriesService(<any>httpClientSpyOnPost, new UrlService);

        httpClientSpyOnPost.post.and.returnValue(asyncData(Category[0]));
        categoriesService.createNewCategory(Category[0]).subscribe(
            categoryList => expect(categoryList).toEqual(Category[0]), fail
        );
        expect(httpClientSpyOnPost.post.calls.count()).toBe(1, 'one call');
    });

    it('updateCategory should return category with updated values', () => {
        httpClientSpyOnPut = jasmine.createSpyObj('http', ['put']);
        categoriesService = new CategoriesService(<any>httpClientSpyOnPut, new UrlService);

        httpClientSpyOnPut.put.and.returnValue(asyncData(mockcategory));
        categoriesService.updateCategory(mockcategory).subscribe(
            categoryList => expect(categoryList).toEqual(mockcategory), fail
        );
        expect(httpClientSpyOnPut.put.calls.count()).toBe(1, 'one call');
    });
});










