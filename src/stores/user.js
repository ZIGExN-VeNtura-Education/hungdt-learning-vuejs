import {defineStore} from 'pinia';
import apiClient from '../api';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),

  actions: {
    async registerUser(user) {
      try {
        const response = await apiClient.post('/user/register', user);
        this.user = response.data;

        await this.loginUser({
          email: user.email,
          password: user.password,
        });
      } catch (error) {
        console.error(error);
      }
    },

    async loginUser(credentials) {
      try {
        const response = await apiClient.post('/user/login', credentials);
        this.user = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    logoutUser() {
      this.user = null;
    },
  },
});
