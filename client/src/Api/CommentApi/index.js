import Axios from "axios";

const BASE_URL = "/api/user";

export function userComments(person) {
  //console.log(`comment called for ${person}`);
  const url = BASE_URL + `/comment/${person}`;
  const getconfig = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  return Axios.get(url, getconfig).then((data) => data.data);
}

export function addComment(comment) {
  const url = BASE_URL + "/comment/add";
  const postconfig = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  return Axios.post(url, comment, postconfig).then((data) => data.data);
}
