<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="credentials.email" required>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="credentials.password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/user';

export default {
  data() {
    return {
      credentials: {
        email: '',
        password: '',
      },
    };
  },

  methods: {
    login() {
      useUserStore().loginUser(this.credentials);
    },
  },
};
</script>
