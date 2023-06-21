import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

const userLocation = localStorage.getItem("location");

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: userLocation || "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJobId: "",
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: () => {
      return {
        ...initialState,
        jobLocation: userLocation || "",
      };
    },
  },
});

export const { handleChange, clearValues } = jobSlice.actions;
export default jobSlice.reducer;
