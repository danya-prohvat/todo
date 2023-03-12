import { Component } from '@angular/core';
import { Axios } from './axios';
interface Todo {
  id:number
  title:string
  checked:boolean
}
type Todos = Todo[]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  axios = new Axios("http://localhost:8080/api/");

  author = 'Daniil Prokhvatilov';
  filterBy = 'all'
  todos:Todos = []

  onKeypressEvent(event: any){
    if (event.charCode === 13) {
      this.axios.createTodo(event.target.value)
      this.fetchTodoes()
      event.target.value = '';
    }
 }

  clearComplete() {
    this.axios.clearCompleted()
    this.fetchTodoes()
  }

  deleteTodo(id:number) {
    this.axios.deleteTodo(id)
    this.fetchTodoes()
  }

  changeTodoStatus(id:number) {
    this.axios.changeTodoStatus(id)
    this.fetchTodoes()
  }

  changeFilter(filterType:string) {
    this.filterBy = filterType
    this.fetchTodoes()
  }

  ngOnInit() {
    this.fetchTodoes()
  }

  async fetchTodoes() {
    this.todos = await this.axios.getTodos(this.filterBy);
  }
}


