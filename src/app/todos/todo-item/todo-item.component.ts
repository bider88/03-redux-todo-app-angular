import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtEdit') txtEdit: ElementRef;
  done: FormControl;
  textInput: FormControl;
  editing: boolean;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.done = new FormControl(this.todo.done);
    this.textInput = new FormControl(this.todo.text, Validators.required);

    this.done.valueChanges.subscribe(value => {
      const { id } = this.todo;
      this.store.dispatch(actions.toggle({ id }));
    });
  }

  edit() {
    this.textInput.setValue(this.todo.text);
    this.editing = true;
    setTimeout(() => this.txtEdit.nativeElement.select(), 0);
  }

  save() {
    this.editing = false;
    if (this.textInput.valid && this.textInput.value !== this.todo.text) {
      this.todo = {
        ...this.todo,
        text: this.textInput.value
      } as Todo;
      this.store.dispatch(actions.save(this.todo));
    }
  }

  deleteTodo() {
    const { id } = this.todo;
    this.store.dispatch(actions.clear({ id }));
  }

}
