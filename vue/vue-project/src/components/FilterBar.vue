<script lang="ts">
export default {
  props: {
    currentFilterType: String, 
    todoCounter: Number
  }
}
</script>

<template>
    <div class="filterBar">
        <div class="itemCounter">
            <p>{{todoCounter}} item left</p>
        </div>
        <div class="filter">
            <button :class="{ activeFilter: currentFilterType === 'all' }" @click="$emit('change-filter-type', 'all')">All</button>
            <button :class="{ activeFilter: currentFilterType === 'active' }" @click="$emit('change-filter-type', 'active')">Active</button>
            <button :class="{ activeFilter: currentFilterType === 'completed' }" @click="$emit('change-filter-type', 'completed')">Completed</button>
        </div>
        <div @click="$emit('clear-completed')" class="clearButton">
            <p>Clear completed</p>
        </div>
    </div>
</template>

<style scoped>
.filterBar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px 8px;
}
.itemCounter {
    font-size: 15px;
}

.filter > button{
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-family: "Montserrat",sans-serif;
    font-size: 14px;
}
.clearButton {
    font-size: 15px;
    cursor: pointer;
}
.clearButton > p:hover{
    text-decoration: underline;
}

.activeFilter{
  border: 1px solid grey !important;
  border-radius: 3px;
}
</style>
