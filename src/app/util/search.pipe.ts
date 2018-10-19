import { Pipe, PipeTransform } from '@angular/core';
import { ScheduledScreening } from '../entities/ScheduleScreening';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {
  // the array of candidates is passed to the pipe and fed as the 'items' param.
  // the screener input in the searchbar is passed to the pipe as 'searchText'
  transform(items: ScheduledScreening[], searchText: string): any[] {
    // if there are no pending screenings, return an empty array
    if (!items) {
      return [];
    }
    // if the search bar is empty, do not change the current screenings being displayed
    if (!searchText) {
      return items;
    }
    // otherwise, convert the search text to lowercase
    searchText = searchText.toLowerCase();
    // for each item in the array...
    return items.filter(it => {
      // return only the screenings whose firstname includes the search text
      // or last name includes the search text.
      return it.candidate.firstname.toLowerCase().includes(searchText) || it.candidate.lastname.toLowerCase().includes(searchText)
      || (it.candidate.firstname.toLowerCase() + ' ' + it.candidate.lastname.toLowerCase()).includes(searchText);
    });
  }
}
