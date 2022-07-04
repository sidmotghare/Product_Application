import axios from "axios";
axios.defaults.headers.common["x_auth_token"] =
  localStorage.getItem("x_auth_token");
export const GET = axios.get;
export const POST = axios.post;
export const DELETE = axios.delete;
export const PUT = axios.put;
export const BASE_URL = "http://localhost:3005/api/";
