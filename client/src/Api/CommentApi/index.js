import Axios from "axios";

const BASE_URL = "/api/user";

export function userComments(person) {
<<<<<<< HEAD
  console.log(`comment called for ${person}`);
  const url = BASE_URL + `/comment/${person}`;
  return Axios.get(url).then((data) => data.data);
}

const config = {
=======
  //console.log(`comment called for ${person}`);
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
>>>>>>> jan21
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": localStorage.getItem("token"),
  },
};

export function addComment(comment) {
  // console.log(`add comment called with company ${comment.symbol}`);
  // console.log(comment);
<<<<<<< HEAD
  // console.log(config.headers);
  const url = BASE_URL + "/comment/add";
  return Axios.post(url, comment, config).then((data) => data.data);
=======
  // console.log(postconfig.headers);
  const url = BASE_URL + "/comment/add";
  return Axios.post(url, comment, postconfig).then((data) => data.data);
>>>>>>> jan21
}
