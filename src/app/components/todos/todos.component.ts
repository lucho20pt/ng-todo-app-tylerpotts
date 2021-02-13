import { Component, Input, OnInit } from '@angular/core';
import { Todo } from './../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {

  title:string = 'Todos list';

  todos:Todo[];

  inputTodo = "";

  constructor() {
    this.todos = [
      {
        name: "text1",
        completed: false,
      },
      {
        name: "text2",
        completed: false,
      }
    ]
  }

  ngOnInit(): void {
  }

  toogleDone(id: number): void {
    // console.log("toogleDone");
    this.todos.map( (v, i) => {
      // console.log(v, i, id);
      if( i == id) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo(id: number): void{
    console.log("deleteTodo");
    this.todos = this.todos.filter( (v,i) => i !== id );
  }

  addTodo(): void {

    if( this.inputTodo !== "")

    this.todos.push({
      name: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }

}
