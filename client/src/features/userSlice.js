import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  isLoading: false,
  user: null,
  token: null,
  userLocation: "",
  jobLocation: "",
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const resp = axios.post("/api/v1/auth/register", user);
      console.log("test");
      console.log(resp);
      // return resp;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        // const { user } = action.payload;
        // console.log(action);
        state.isLoading = false;
        // state.user = user;
        toast.success(`Hey there`);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});

export default userSlice.reducer;
