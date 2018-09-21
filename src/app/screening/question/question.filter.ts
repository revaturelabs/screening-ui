import { Pipe, PipeTransform } from '@angular/core';

import { Tag} from '../entities/Tag';

@Pipe({
    name: 'tagfilter',
    pure: false
})
export class TagFilterPipe implements PipeTransform {
  transform(items: Tag[], filter: Tag): Tag[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Tag) => this.applyFilter(item, filter));
  }

  /**
   * Perform the filtering.
   *
   * @param {Tag} tag The tag to compare to the filter.
   * @param {Tag} filter The filter to apply.
   * @return {boolean} True if tag satisfies filters, false if not.
   */
  applyFilter(tag: Tag, filter: Tag): boolean {
    for (const field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (tag.tagName) {
            if (tag.tagName.toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
              return false;
            }
          } else {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (tag[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
