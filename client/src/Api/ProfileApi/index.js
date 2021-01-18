import Axios from "axios";
const BASE_URL = "/api/user";

export function getProfile(user_id) {
  const url = BASE_URL + `/profile/${user_id}`;

  return Axios.get(url).then((data) => data.data);
}

// export function getOwnProfile
