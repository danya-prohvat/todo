<script setup lang="ts">
import searchIcon from './../assets/images/searchIcon.svg'

</script>

<script lang="ts">
export default {
  props: ['createTodo'],
}
</script>

<template>
    <div class="inputContainer">
        <div class="input">
          <div class="searchIcon">
            <img :src="searchIcon" alt="">
          </div>

          <input @keydown.enter="$emit('create-todo', $event)" placeholder="What needs to be done?" type="text">
        </div>

        <hr>
    </div>
</template>

<style scoped>
.input{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 18px 15px 8px;
}
.input > input{
    margin-left: 25px;
    width: 100%;
    border: none;
    outline: none;
}

.searchIcon > img{
  width: 34px;
}

input {
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    background-color: transparent;

}
</style>
