<script setup lang="ts">
  import TodoBlock from "./components/TodoBlock.vue";
</script>

<template>
  <h1 class="sectionTitle">todos</h1>

  <TodoBlock />
  
  <h6 class="sectionDescription">press Enter to add item</h6>
  <h6 class="sectionDescription">created by <span>Daniil Prokhvatilov</span></h6>
</template>

<style scoped>
.sectionTitle {
  color: #d2691e;
  font-size: 60px;
  font-weight: 200;
  text-align: center;
}
.sectionDescription {
  color: #ccc;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
}
.sectionDescription > span {
  color: #a4a4a4;
}
</style>
