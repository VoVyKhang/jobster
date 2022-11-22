import axios from "axios";

import { getUserFromLocalStorage } from "../../utils/localStorage";
import { clearStore } from "../../features/user/userSlice";

const axiosClient = axios.create({
  baseUrl: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

axiosClient.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage();
  if (user) {
    config.headers.common["Authorization"] = `Bearer ${user.token}`;
  }
  return config;
});

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.state === 401) {
    thunkAPI.dispatch(clearStore());
    return thunkAPI.rejectWithValue("Unauthorized! Logging out...");
  }
  return thunkAPI.rejectWithValue(error.response.data.msg);
};

export default axiosClient;
