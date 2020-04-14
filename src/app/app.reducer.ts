import { Todo } from './todos/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';
import { FilterType } from './filter/filter.actions';
import { filterReducer } from './filter/filter.reducer';

export interface AppState {
  todos: Todo[];
  filter: FilterType;
}

export const appReducer: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
};
