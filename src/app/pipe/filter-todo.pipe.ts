import { Pipe, PipeTransform } from '@angular/core';
import { FilterType } from '../filter/filter.actions';
import { Todo } from '../todos/models/todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterTodoPipe implements PipeTransform {

  transform(values: Todo[], filter: FilterType): Todo[] {

    switch (filter) {
      case 'Pending':
        return values.filter(todo => !todo.done);
      case 'Completed':
        return values.filter(todo => todo.done);
      default:
        return [...values];
    }
  }

}
