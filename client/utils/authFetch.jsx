import axios from "axios";
import { logoutUser } from "../src/features/user/userSlice";

let store;

export const injectStore = _store => {
  store = _store
}

// axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
const authFetch = axios.create({
  baseURL: "/api/v1",
});

//request
authFetch.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${store.getState().user.token}`;
    console.log(store.getState().user)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//response
authFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 401) {
      store.dispatch(logoutUser());
      console.log("AUTH ERROR");
    }
    return Promise.reject(error);
  }
);

export default authFetch;
