import { Pipe, PipeTransform } from '@angular/core';
import { FilterType } from '../filter/filter.actions';

@Pipe({
  name: 'translateFilter'
})
export class TranslateFilterPipe implements PipeTransform {

  transform(value: FilterType): string {
    let filter = '';
    switch (value) {
      case 'All':
        filter = 'Todas';
        break;
      case 'Pending':
        filter = 'Pendientes';
        break;
      case 'Completed':
        filter = 'Completadas';
        break;
      default:
        filter = value;
        break;
    }
    return filter;
  }

}
