import { Component, OnInit , Input } from '@angular/core';


@Component({
  selector: 'app-todo-toggle-completed',
  templateUrl: './todo-toggle-completed.component.html',
  styleUrls: ['./todo-toggle-completed.component.css']
})
export class TodoToggleCompletedComponent implements OnInit {

  @Input()
  completed: number ;

  constructor() { }

  ngOnInit() {
  }

  hideComplted(): void {
    console.log('hideComplted');
  }
}
