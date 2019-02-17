<template>
  <div>
    <h2>Welcome</h2>
    <ul>
      <li>
        <router-link to="/todo">Your todo list</router-link>
      </li>
      <li>
        <router-link to="/auth">SignIn</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "index",
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$router.push("/todo");
      } else {
        this.$router.push("/auth");
      }
    });
  }
};
</script>

