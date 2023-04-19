import axios from "axios";

export const baseApi = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "Content-Type": "application/json",
    Authorization: process.env.REACT_APP_TOKEN,
  },
});
