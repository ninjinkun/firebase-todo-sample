<template>
  <div>
    <h2>Todo</h2>
    <div>
    <form @submit.prevent="addTodo">
      <input v-model="inputItem.text" type="text" name="text" placeholder="do something">
      <input type="submit" value="add" v-bind:disabled="!inputItem.text">
    </form>
    </div>
    <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        <span>{{ item.text }}</span><button @click="deleteTodo(item)">Delete</button>
      </li>
    </ul>
    </div>
  </div>
</template>
<script>
import uuid from "uuid/v1";
// type Item = {
//   id: 'string',
//   text: 'string'
// }
export default {
  name: "todo",
  data() {
    return {
      items: [],
      inputItem: {},
    }
  },
  methods: {
    addTodo() {
      const item = this.inputItem;
      item.id = uuid();
      this.items.push(item);
      this.inputItem = {};
    },
    deleteTodo(item) {
      this.items = this.items.filter(i => i.id !== item.id);
    }
  }
};
</script>
