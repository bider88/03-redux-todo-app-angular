import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { add } from '../todo.actions';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.txtInput = new FormControl(null, Validators.required);
  }

  add() {
    if (this.txtInput.valid) {
      const { value: text } = this.txtInput;
      this.store.dispatch(add({ text }));
      this.txtInput.reset();
    }
  }

}
