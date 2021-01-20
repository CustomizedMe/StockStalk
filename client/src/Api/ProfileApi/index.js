import Axios from "axios";
const BASE_URL = "/api/user";

export function getProfile(user_id) {
  const url = BASE_URL + `/profile/${user_id}`;

  return Axios.get(url).then((data) => data.data);
}

export function getMyProfile() {
  const url = BASE_URL + "/profile/me";
  return Axios.get(url, {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  }).then((data) => data.data);
}

const config = {
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": localStorage.getItem("token"),
  },
};
export function editProfile(profile) {
  console.log(`edit profile called with company ${profile.company}`);
  const url = BASE_URL + "/profile";
  return Axios.post(url, profile, config).then((data) => data.data);
}
