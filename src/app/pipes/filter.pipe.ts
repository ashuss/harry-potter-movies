import { Pipe, PipeTransform } from '@angular/core';
import { MoviesDetails } from '../movieDetails';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(items: MoviesDetails[], searchText: string, searchYear: number): MoviesDetails[] {
    if (!items) return items;
    if (!searchText && !searchYear) return items;
    if (searchText == '' && searchYear == null) return items;

    searchText = searchText.toLowerCase();

    return items.filter((it) => {
      if (searchText != "" && searchYear == null) {
        return it.title.toLowerCase().includes(searchText);
      } else if (searchText == "" && searchYear != null) {
        return it.release_date.includes(String(searchYear));
      } else {
        return (it.title.toLowerCase().includes(searchText) && it.release_date.includes(String(searchYear)));
      }

    });
  }

}
