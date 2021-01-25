import Axios from "axios";

const BASE_URL = "/api/user";

export function userComments(person) {
  console.log(`comment called for ${person}`);
  const url = BASE_URL + `/comment/${person}`;
  return Axios.get(url, getconfig).then((data) => data.data);
}
const getconfig = {
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": localStorage.getItem("token"),
  },
};
const postconfig = {
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": localStorage.getItem("token"),
  },
};

export function addComment(comment) {
  console.log(`add comment called with company ${comment.symbol}`);
  console.log(comment);
  console.log(postconfig.headers);
  const url = BASE_URL + "/comment/add";
  return Axios.post(url, comment, postconfig).then((data) => data.data);
}
