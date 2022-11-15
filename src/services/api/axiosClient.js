import axios from "axios";

const axiosClient = axios.create({
  baseUrl: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

export default axiosClient;
