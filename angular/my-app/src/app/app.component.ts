import { Component } from '@angular/core';
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
  author = 'Daniil Prokhvatilov';
  todos:Todos = [{title:'dsadas', id:1, checked:true},
  {title:'dsadas', id:1, checked:true},
  {title:'dsadas', id:1, checked:true}]
  filterBy = 'all'

  clearComplete() {
    console.log('clearComplete');
  }

  changeFilter(filterType:string) {
    this.filterBy = filterType
  }
}
