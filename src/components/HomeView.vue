<script>
import LoginForm from "./LoginForm.vue";
import Dashboard from "./Dashboard.vue";
import {mapState} from "pinia";
import {useSession} from "../stores/session";

export default {
  name: "HomeView",
  components: {Dashboard, LoginForm},
  computed: {
    ...mapState(useSession, ["loggedIn"])
  },
};
</script>
<template>
  <main>
    <LoginForm v-if="LoggedIn"/>
    <Dashboard v-else/>
  </main>
</template>
