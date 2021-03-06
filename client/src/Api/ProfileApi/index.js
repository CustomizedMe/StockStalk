import Axios from "axios";

const BASE_URL = "/api/user";

export async function getProfile(username) {
  const url = BASE_URL + `/profile/${username}`;
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  const data = await Axios.get(url, config);
  return data.data;
}

export async function getMyProfile() {
  // console.log(`my profile called for @${localStorage.getItem("username")}`);
  const url = BASE_URL + "/profile/me";
  const getconfig = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  const data = await Axios.get(url, getconfig);
  return data.data;
}

export async function editProfile(profile) {
  // console.log(`edit profile called with profile ${profile}`);
  const url = BASE_URL + "/profile";
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  const data = await Axios.post(url, profile, config);
  return data.data;
}
