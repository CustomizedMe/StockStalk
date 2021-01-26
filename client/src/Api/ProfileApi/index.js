import Axios from "axios";

const BASE_URL = "/api/user";

const config = {
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": localStorage.getItem("token"),
  },
};
const getconfig = {
  headers: {
    "x-auth-token": localStorage.getItem("token"),
  },
};

export function getProfile(username) {
  const url = BASE_URL + `/profile/${username}`;
  console.log(`profile called for @${username}`);
  return Axios.get(url, config).then((data) => data.data);
}

export function getMyProfile() {
  console.log(`my profile called for @${localStorage.getItem("username")}`);
  const url = BASE_URL + "/profile/me";
  return Axios.get(url, getconfig).then((data) =>
    console.log(`data here ${data}`)
  );
}

export function editProfile(profile) {
  console.log(`edit profile called with profile ${profile}`);
  const url = BASE_URL + "/profile";
  return Axios.post(url, profile, config).then((data) => data.data);
}
