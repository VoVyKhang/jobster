import axios from "axios";

const customFetch = axios.create({
  baseUrl: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

export default customFetch;
