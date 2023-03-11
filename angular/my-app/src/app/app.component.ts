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

  clearComplete() {
    console.log('clearComplete');
  }

  async changeFilter(filterType:string) {
    this.filterBy = filterType
    this.todos = await this.axios.getTodos(this.filterBy);
  }

  async ngOnInit() {
    this.todos = await this.axios.getTodos(this.filterBy);
  }
}


