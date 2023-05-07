<script setup lang="ts">
  import { Axios } from "@/axios";

  import Input from "./InputComp.vue";
  import FilterBar from "./FilterBar.vue";
  import Item from "./ItemComp.vue";
  import { toRaw } from "vue";
</script>

<script lang="ts">
  interface Todo {
    id:number,
    title:string,
    checked:boolean,
  }

  type Todos = Todo[]
  type FilterTypes = 'all' | 'active' | 'completed'


  const axios = new Axios("http://localhost:8080/api/");

  export default {
    components: {Item},
    data() {
      return {
        todos: [] as Todos,
        currentFilterType: 'all' as FilterTypes
      }
    },
    methods:{
      changeFilterType(param: FilterTypes) {
        this.currentFilterType = param
        this.fetchTodoes()
      }, 
      async fetchTodoes() {
        this.todos = await axios.getTodos(this.currentFilterType);
      },
      async createTodo(e:any) {
        await axios.createTodo(e.target.value);
        e.target.value = ''
        this.fetchTodoes()
      },
      async deleteTodo(id:number) {
        await axios.deleteTodo(id);
        this.fetchTodoes()
      },
      async changeTodoStatus(id:number) {
        await axios.changeTodoStatus(id);
        this.fetchTodoes()
      },
      async clearCompleted() {
        await axios.clearCompleted();
        this.fetchTodoes()
      },
    },
    async beforeMount() {
      this.fetchTodoes()
    },
  } 
</script>


<template>
  <div class="todo">
    <Input @create-todo="createTodo($event)"/>
    <div v-if="todos.length > 0">
      <item
        @delete-todo="deleteTodo($event)"
        @change-todo-status="changeTodoStatus($event)"
        v-for="todo in toRaw(todos)"
        :todo="todo"
        :key="todo.id"
      />
    </div>
    <FilterBar @clear-completed="clearCompleted" @change-filter-type="changeFilterType($event)" :current-filter-type="currentFilterType" :todo-counter="todos.length" />
  </div>
</template>

<style scoped>
.todo {
  width: 500px;
  background-color: #fdfdfd;
  box-shadow: 0 4px 8px 0 rgba(34,60,80,.2);
  border-radius: 2px;
}
</style>
