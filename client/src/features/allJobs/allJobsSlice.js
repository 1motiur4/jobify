import { useEffect } from "react";
import { createSlice, createAsyncThunk, isAllOf } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import authFetch from "../../../utils/authFetch";

const initialState = {
  isLoading: true,
  jobs: [],
  totalJobs: 1,
  numOfPages: 1,
  page: 1,
};

export const getAllJobs = createAsyncThunk(
  "allJobs/getAllJobs",
  async (_, thunkAPI) => {
    let url = `/jobs`;
    try {
      const resp = await authFetch.get(url);
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.numOfPages);
    }
  }
);

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        const { jobs, totalJobs, numOfPages } = action.payload;
        state.jobs = jobs;
        state.totalJobs = totalJobs;
        state.numOfPages = numOfPages;
        console.log(state.jobs);
      })
      .addCase(getAllJobs.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});

export default allJobsSlice.reducer;
