import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER_URL;

const apiRequest = axios.create({
  baseURL: BASE_URL,
});

export default apiRequest;