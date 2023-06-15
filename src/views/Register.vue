<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div>
        <label for="firstname">First Name</label>
        <input type="text" id="firstname" v-model="user.firstname" required>
      </div>
      <div>
        <label for="lastname">Last Name</label>
        <input type="text" id="lastname" v-model="user.lastname" required>
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="user.email" required>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="user.password" required>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import {useUserStore} from '@/stores/user';

export default {
  data() {
    return {
      user: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
      },
    };
  },

  methods: {
    async register() {
      await useUserStore().registerUser(this.user);
      await useUserStore().loginUser({
        email: this.user.email,
        password: this.user.password,
      });
      this.$router.push('/');
    },
  },
};
</script>
