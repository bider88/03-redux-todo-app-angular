import { createReducer, on } from '@ngrx/store';
import { filter, FilterType } from './filter.actions';

export const initialState: FilterType = 'All';

// tslint:disable-next-line: variable-name
const _filterReducer = createReducer(
  initialState,
  on(filter, (state, props) => props.filter),
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
