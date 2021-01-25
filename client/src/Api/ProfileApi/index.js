import Axios from "axios";
const BASE_URL = "/api/user";

<<<<<<< HEAD
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
=======
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
>>>>>>> jan21
}

const config = {
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": localStorage.getItem("token"),
  },
};
<<<<<<< HEAD
export function editProfile(profile) {
  console.log(`edit profile called with company ${profile.company}`);
  const url = BASE_URL + "/profile";
  return Axios.post(url, profile, config).then((data) => data.data);
=======
export async function editProfile(profile) {
  console.log(`edit profile called with company ${profile.company}`);
  const url = BASE_URL + "/profile";
  const data = await Axios.post(url, profile, config);
  return data.data;
>>>>>>> jan21
}
