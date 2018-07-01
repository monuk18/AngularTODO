import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoToggleCompletedComponent } from './todo-toggle-completed.component';

describe('TodoToggleCompletedComponent', () => {
  let component: TodoToggleCompletedComponent;
  let fixture: ComponentFixture<TodoToggleCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoToggleCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoToggleCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
