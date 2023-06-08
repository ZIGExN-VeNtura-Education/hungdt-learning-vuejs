<template>
  <div id="login-form">
    <form @submit.prevent="executeLogin">
      <h1>Authentication</h1>
      <p>Fill out this form is login</p>
      <hr/>

      <label for="email"><b>Email</b></label>
      <input type='text' v-model="email" placeholder="Enter your mail" id="email" name="email" required/>

      <label for="psw"><b>Password</b></label>
      <input type='password' v-model="pass" placeholder='Enter your password' id='psw' name='psw' required/>

      <p>
        <button type='submit'>Login</button>
      </p>
    </form>
  </div>
</template>
<style>
body {
    background-color: white;
    color: #181818;
}
</style>
<script>
import {useSession} from '@/stores/session';
import {mapState, mapActions} from "pinia";

export default {
  data() {
    return {
      email: '',
      pass: ''
    };
  },
  computed: {
    ...mapState(useSession, ["loggedIn", "user", "notLoggedIn"])
  },
  methods: {
    ...mapActions(useSession, ["logIn"]),
    executeLogin() {
      if (this.email == "admin@test.com" && this.pass == '123123') {
        this.logIn({user: this.email});
        this.$router.push(`/index`);
      }
    }
  }
};
</script>
