<template>
  <div v-if="user">
    <h2>User Info</h2>
    <p>Name: {{ user.firstname }} {{ user.lastname }}</p>
    <p>Email: {{ user.email }}</p>
    <button @click="logout">Logout</button>
  </div>
  <div v-else>
    <p>Please login to see user info.</p>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/user';

export default {
  computed: {
    user() {
      return useUserStore().user;
    },
  },

  methods: {
    logout() {
      useUserStore().logoutUser();
    },
  },
};
</script>
