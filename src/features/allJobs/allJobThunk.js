import axiosClient, {
  checkForUnauthorizedResponse,
} from "../../services/api/axiosClient";

export const getAllJobsThunk = async (_, thunkAPI) => {
  const { search, page, searchStatus, searchType, sort } =
    thunkAPI.getState().allJobs;

  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
  if (search) {
    url += `&search=${search}`;
  }
  try {
    const resp = await axiosClient.get(url);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const resp = await axiosClient.get("/jobs/stats");
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
