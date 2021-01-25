import Axios from "axios";
const BASE_URL = "/api/user";

export async function getProfile(user_id) {
  const url = BASE_URL + `/profile/${user_id}`;
  const data = await Axios.get(url, {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  });
  return data.data;
}

export async function getMyProfile() {
  const url = BASE_URL + "/profile/me";
  const data = await Axios.get(url, {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  });
  return data.data;
}

const config = {
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": localStorage.getItem("token"),
  },
};
export async function editProfile(profile) {
  console.log(`edit profile called with company ${profile.company}`);
  const url = BASE_URL + "/profile";
  const data = await Axios.post(url, profile, config);
  return data.data;
}
