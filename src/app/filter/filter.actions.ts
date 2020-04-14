import { createAction, props } from '@ngrx/store';

export type FilterType = 'All' | 'Pending' | 'Completed';

export const filter = createAction('[filter] Set Filter', props<{ filter: FilterType }>());
