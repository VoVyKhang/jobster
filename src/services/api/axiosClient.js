import axios from "axios";

import { getUserFromLocalStorage } from "../../utils/localStorage";

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

export default axiosClient;
