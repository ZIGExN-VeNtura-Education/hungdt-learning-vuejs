<template>
  <div>
    <h2>Home</h2>
    <template v-if="isLoggedIn">
      <UserInfo/>
    </template>
    <template v-else>
      <Login/>
      <p>Don't have an account?
        <router-link to="/register">Register</router-link>
      </p>
    </template>
  </div>
</template>

<script>
import UserInfo from './UserInfo.vue';
import Login from './Login.vue';
import {useUserStore} from '@/stores/user';

export default {
  components: {
    UserInfo,
    Login,
  },

  computed: {
    isLoggedIn() {
      return useUserStore().user !== null;
    },
  },
};
</script>
