import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../src/features/user/userSlice";

const token = localStorage.getItem("token");

// axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
const authFetch = axios.create({
  baseURL: "/api/v1",
});

//request
authFetch.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${token}`;
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
      useDispatch(logoutUser());
      console.log("AUTH ERROR");
      // removeUserFromLocalStorage();
    }
    return Promise.reject(error);
  }
);

export default authFetch;
