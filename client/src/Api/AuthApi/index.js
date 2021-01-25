import Axios from "axios";

const BASE_URL = "/api/auth";

// const config = {
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

export function registerUser(user) {
  const url = BASE_URL + "/register";
  //console.log(user);
  return Axios.post(url, user);
}

export function loginUser(user) {
  const url = BASE_URL + "/login";
  return Axios.post(url, user).then((data) => data.data);
}
