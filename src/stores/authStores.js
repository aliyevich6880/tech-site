import { reactive } from 'vue';

// Token xotirada saqlanadi
const state = reactive({
  token: null,
  isAuthenticated: false
});

export const authStore = {
  setToken(token) {
    state.token = token;
    state.isAuthenticated = true;
  },

  getToken() {
    return state.token;
  },

  isAuth() {
    return state.isAuthenticated;
  },

  logout() {
    state.token = null;
    state.isAuthenticated = false;
  }
};

export const getAuthToken = () => state.token;
export default authStore;