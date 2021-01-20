import Axios from "axios";

const BASE_URL = "/api/user";

export function userComments(person) {
  console.log(`comment called for ${person}`);
  const url = BASE_URL + `/comment/${person}`;
  return Axios.get(url).then((data) => data.data);
}
