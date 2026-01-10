import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(list: string[], searchText: string): string[] {
    if (!list || !searchText) return list

    return list.filter((item) => item.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))


  }

}
