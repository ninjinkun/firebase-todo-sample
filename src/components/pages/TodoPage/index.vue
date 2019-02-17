<template>
  <div>
    <h2 v-if="user">{{ user.displayName }}さんのTodo</h2>
    <h2 v-else>Todo</h2>
    <div>
      <form @submit.prevent="addTodo">
        <input v-model="inputItem.text" type="text" name="text" placeholder="do something">
        <input type="submit" value="add" v-bind:disabled="!inputItem.text">
      </form>
    </div>
    <div>
      <ul>
        <li v-for="item in items" :key="item.id">
          <span>{{ item.text }}</span>
          <button @click="deleteTodo(item)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import uuid from "uuid/v1";
import firebase from "firebase";
// type Item = {
//   id: 'string',
//   text: 'string'
// }
export default {
  name: "todo",
  mounted() {
    firebase.auth().onAuthStateChanged(async user => {
      if (!user) {
        this.$router.push("/auth");
        return;
      }
      this.user = user;
      this.items = await this.fetchData();
    });
  },
  data() {
    return {
      user: undefined,
      items: [],
      inputItem: {}
    };
  },
  methods: {
    async fetchData() {
      const itemsRef = await firebase
        .firestore()
        .collection("users")
        .doc(this.user.uid)
        .collection("items")
        .get();
      return itemsRef.docs.map(d => ({ ...d.data(), id: d.ref.id }));
    },
    async addTodo() {
      const item = this.inputItem;
      this.items.push(item);
      this.inputItem = {};

      const saveItem = Object.assign({}, item);
      const addedItemRef = await firebase
        .firestore()
        .collection("users")
        .doc(this.user.uid)
        .collection("items")
        .add(saveItem);

      item.id = addedItemRef.id;
    },
    async deleteTodo(item) {
      this.items = this.items.filter(i => i.id !== item.id);

      await firebase
        .firestore()
        .collection("users")
        .doc(this.user.uid)
        .collection("items")
        .doc(item.id)
        .delete();
    }
  }
};
</script>
