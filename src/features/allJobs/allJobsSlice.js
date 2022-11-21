import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../services/api/axiosClient";
import { toast } from "react-toastify";
import axios from "axios";

const initialFiltersState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "older", "a-z", "z-a"],
};

const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  pages: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState,
};

export const getAllJobs = createAsyncThunk(
  "allJobs/getJobs",
  async (_, thunkAPI) => {
    let url = "/jobs";
    try {
      const resp = await axiosClient.get(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("There was an error");
    }
  }
);

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {
    showLoading: (state) => (state.isLoading = true),
    hideLoading: (state) => (state.isLoading = false),
  },
  [getAllJobs.pending]: (state) => {
    state.isLoading = true;
  },
  [getAllJobs.fulfilled]: (state, { payload }) => {
    state.isLoading = false;
    state.jobs = payload.jobs;
  },
  [getAllJobs.rejected]: (state, { payload }) => {
    state.isLoading = false;
    toast.error(payload);
  },
});

export const { showLoading, hideLoading } = allJobsSlice.actions;
export default allJobsSlice.reducer;
