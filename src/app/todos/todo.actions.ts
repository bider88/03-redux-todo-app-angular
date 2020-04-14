import { createAction, props } from '@ngrx/store';
import { Todo } from './models/todo.model';

export const clearCompleted = createAction('[todo] Clear Completed');
export const add = createAction('[todo] add', props<{text: string}>());
export const toggle = createAction('[todo] toggle', props<{id: number}>());
export const save = createAction('[todo] save', props<Todo>());
export const clear = createAction('[todo] clear', props<{id: number}>());
export const toggleAll = createAction('[todo] toggleAll', props<{toggle: boolean}>());
