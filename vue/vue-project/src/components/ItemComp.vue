<script setup lang="ts">
    import checkMarkIcon from './../assets/images/checkMarkIcon.svg'
    import removeIcon from './../assets/images/removeIcon.svg'
</script>

<script lang="ts">
    export default {
        props: ['todo'],
    }
</script>

<template>
    <div v-if="todo" class="item">
        <div class="itemContent">
            <div @click="$emit('change-todo-status', todo.id)" class="circleIcon">
                <img v-if="todo.checked" :src="checkMarkIcon" alt="">
            </div>
            <div class="textContent">
                <p>{{ todo.title }}</p>
            </div>
            <div @click="$emit('delete-todo', todo.id)" class="deleteIcon">
                <img :src="removeIcon" alt="">
            </div>
        </div>
        <hr class="hr">
    </div>
</template>

<style scoped>

.item{

}
.itemContent{
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
}
.circleIcon{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.textContent{
    margin-left: 28px;
    max-width: 370px;
    overflow: hidden;
}

.deleteIcon{
    right: 15px;
    position: absolute;
    cursor: pointer;
}

.deleteIcon > img {
    width: 22px;
    font-weight: 500;
}

.hr{
    width: 100%;
    height: 1px;
    background-color: #ccc;
    border: none;
}
</style>
