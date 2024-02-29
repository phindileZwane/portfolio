import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private todoList = new BehaviorSubject<any[]>([]);

  todolist$ = this.todoList.asObservable();

  constructor() {
    this.refreshTodoList()
   }

   refreshTodoList():void{
    this.todoList.next(this.getTodoList());
  }

  getTodoList(): any {
    const temp = localStorage.getItem('todoList');
    //ternary operator (short way of doing an if statement)
    return temp ? JSON.parse(temp) : [];
  }
  
  addToDoList(todos:any): string {
    localStorage.setItem("todoList", JSON.stringify(todos))
    return 'To-Do added succefully'
  }
}
