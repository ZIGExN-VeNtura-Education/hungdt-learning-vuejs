import {defineStore} from "pinia";

export const useSession = defineStore('authentication', {
  persist: true, state: () => {
    return {
      user: null, loggedIn: false
    };
  }, getters: {
    notLoggedIn(state) {
      return !state.loggedIn;
    }
  }, actions: {
    logIn({user}) {
      this.loggedIn = true;
      this.user = user;
    }
  }
});
