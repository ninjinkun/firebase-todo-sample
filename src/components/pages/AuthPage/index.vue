<template>
  <div id="firebaseui-auth-container"></div>
</template>
<script>
import firebase from "firebase";
import firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

const uiConfig = {
  signInSuccessUrl: "/todo",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  popupMode: true
};
export default {
  name: "auth",
  mounted() {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>
