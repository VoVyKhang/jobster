import axios from "axios";

import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice";
import { clearValues } from "./jobSlice";
import { logoutUser } from "../../features/user/userSlice";

import authHeader from "../../utils/authHeader";
import axiosClient from "../../services/api/axiosClient";

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const resp = await axiosClient.post("/jobs", job);
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    if (error.response.state === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized! Logging out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const deleteJobThunk = async (jobId, thunkAPI) => {
  thunkAPI.showLoading();
  try {
    const resp = await axiosClient.delete(`/jobs/${jobId}`);
    thunkAPI.dispatch(getAllJobs());
    return resp.data.msg;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const resp = await axiosClient.patch(`/jobs/${jobId}`, job);
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
