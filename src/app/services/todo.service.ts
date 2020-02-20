import { Injectable } from '@angular/core';
import {Todo} from '../Models/todo';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  constructor(
    private loggerService: LoggerService
  ) { }
  logger() {
    this.loggerService.logger(this.todos);
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
    // this.todos = [...this.todos, todo];
    // console.log(this.todos);
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  getTodos(): Todo[] {
    return this.todos;
  }
}
