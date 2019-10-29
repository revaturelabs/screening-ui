import { Pipe, PipeTransform } from '@angular/core';

import { Category } from '../entities/Category';

 @Pipe({
     name: 'categoryFilter',
     pure: false
 })


/*
CategoryFilterPipe filters Categories based on Category.categoryCategory (name)
Used in skillTypes-category
*/
 export class CategoryFilterPipe implements PipeTransform {
     transform(items: Category[], filter: Category): Category[] {
         if (!items || !filter) {
             return items;
         }
         return items.filter((item: Category) => this.applyFilter(item, filter));
     }

// /*
// applies filter based on categoryName field.
//  */
     applyFilter(category: Category, filter: Category): boolean {
         for (const field in filter) {
             if (filter[field]) {
                 if (typeof filter[field] === 'string') {
                     return false; // return false by default -- Landon
                 } else if (typeof filter[field] === 'number') {
                     if (category[field] !== filter[field]) {
                         return false;
                     }
                 }
             }
         }
         return true;

     }
 }
