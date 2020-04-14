
import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('No salir en cuarentena', false, 1),
  new Todo('Lavarse las manos', false, 2),
  new Todo('Cubrirse la boca al toser', false, 3)
];

// tslint:disable-next-line: variable-name
const _todoReducer = createReducer<Todo[], Action>(initialState,
  on(actions.add, (state, props) => [...state, new Todo(props.text)]),
  on(actions.toggle, (state, props) => {
    return state.map(todo => {
      if (todo.id === props.id) {
        return {
          ...todo,
          done: !todo.done
        } as Todo;
      }
      return todo;
    });
  }),
  on(actions.save, (state, props) => {
    return state.map(todo => {
      if (todo.id === props.id) {
        return {
          ...todo,
          text: props.text
        } as Todo;
      }
      return todo;
    });
  }),
  on(actions.clear, (state, props) => state.filter(todo => todo.id !== props.id)),
  on(actions.toggleAll, (state, props) => state.map(todo => {
    return {
      ...todo,
      done: props.toggle
    } as Todo;
  }))
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
