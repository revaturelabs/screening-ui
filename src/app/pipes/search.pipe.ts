import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { ScheduledScreening } from '../entities/ScheduleScreening';

@Pipe({
    name: 'searchPipe'
})
/**
 * @author Shane Sistoza
 * @author Patrick Kennedy
 * @batch 1712-Steve
 *
 * A filter to sort through a list.
 *
 */
@Injectable()
export class SearchPipe implements PipeTransform {

    /**
     * The method that will return a filtered array based on search term.
     *  1. If the field param is all. It will search through the entire properties of a single object.
     *  2. Allowed CSV param for field param. Note it will display nothing if no matches.
     * @param items items to be filtered (array)
     * @param field the field of the array to be filtered on.
     * @param value the term being searched.
     */
    transform(SS: ScheduledScreening[], searchText = ""): ScheduledScreening[] {
        if (!SS){
            return [];
        }
        if(searchText){
            searchText = searchText.toLowerCase();
        }
        
        if(!searchText){
            return SS;
        }
        return SS.filter (SS => {
            const searchNumber: number = +searchText;
            let search: boolean;
            let name = SS.candidate.firstname +" "+ SS.candidate.lastname;
            search = name.toLowerCase().includes(searchText) 
                || SS.candidate.skillTypeName.toLowerCase().includes(searchText);
        
            return search;
        })
    }
}
