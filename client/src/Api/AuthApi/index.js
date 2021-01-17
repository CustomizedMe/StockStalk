import Axios from "axios";

const BASE_URL = "/api/auth";

export function registerUser(user) {
  const url = BASE_URL + "/register";
  return Axios.post(url, user);
}

export function loginUser(user) {
  const url = BASE_URL + "/login";
  return Axios.post(url, user).then((data) => data.data);
}
