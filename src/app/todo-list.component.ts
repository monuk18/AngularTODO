import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import {NgForm} from '@angular/forms';
import { TodoToggleCompletedComponent } from './components/todo-toggle-completed/todo-toggle-completed.component';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html'
})

export class TodoListComponent implements OnInit {
  todos: Todo[];
  newTodo: Todo = new Todo();
  editing: boolean = false;
  editingTodo: Todo = new Todo();

  constructor( private todoService: TodoService, ) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodosO()
    .subscribe(todos => this.todos = todos);
   // .then(todos => this.todos = todos );
  }

  createTodo(todoForm: NgForm): void {
    this.todoService.createTodo(this.newTodo)
      .then(createTodo => {
        todoForm.reset();
        this.newTodo = new Todo();
        this.todos.unshift(createTodo)
      });
  }

  deleteTodo(id: string): void {
    this.todoService.deleteTodo(id)
    .then(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
  }

  updateTodo(todoData: Todo): void {
    console.log(todoData);
    this.todoService.updateTodo(todoData)
    .then(updatedTodo => {
      const existingTodo = this.todos.find(todo => todo.id === updatedTodo.id);
      Object.assign(existingTodo, updatedTodo);
      this.clearEditing();
    });
  }

  toggleCompleted(todoData: Todo): void {
    todoData.completed = !todoData.completed;
    this.todoService.updateTodo(todoData)
    .then(updatedTodo => {
      const existingTodo = this.todos.find(todo => todo.id === updatedTodo.id);
      Object.assign(existingTodo, updatedTodo);
    });
  }

  editTodo(todoData: Todo): void {
    this.editing = true;
    Object.assign(this.editingTodo, todoData);
  }

  clearEditing(): void {
    this.editingTodo = new Todo();
    this.editing = false;
  }

  compltedTodo(): number {
    if (this.todos !== undefined) {
      return  this.todos.filter(t => t.completed === true ).length;
    }
    return 0;
  }
}
