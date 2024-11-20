import axios from "axios";

const URL = "https://api.themoviedb.org/3";
export const API = axios.create({
  baseURL: URL,
});
