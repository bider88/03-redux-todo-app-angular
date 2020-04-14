import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { FilterType, filter } from '../../filter/filter.actions';
import { clearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  currentDFilter: FilterType = 'All';
  filters: FilterType[] = [ 'All', 'Pending', 'Completed' ];
  pending: number;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.currentDFilter = state.filter;
      this.pending = state.todos.filter(todo => !todo.done).length;
    });
  }

  setFilter(filterType: FilterType) {
    this.store.dispatch(filter({filter: filterType}));
  }

  clearAllCompleted() {
    this.store.dispatch(clearCompleted());
  }

}
