import Axios from "axios";

const BASE_URL = "/api/";

const getconfig = () => ({
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": localStorage.getItem("token"),
  },
});

export function companyComments(company) {
  const url = BASE_URL + `user/comment/company/${company}`;
  return Axios.get(url, getconfig()).then((data) => data.data);
}

export function companyInfo(company) {
  const url = BASE_URL + `data/info/${company}`;
  return Axios.get(url).then((data) => data.data);
}

export function companyChart(company, duration) {
  const url = BASE_URL + `data/${company}/${duration} `;
  return Axios.get(url).then((data) => data.data);
}

export function compareChart(company1, company2, duration) {
  const url = BASE_URL + `data/compare/${company1}/${company2}/${duration} `;
  return Axios.get(url).then((data) => data.data);
}

export function newsFeed() {
  const url = BASE_URL + `data/news`;
  return Axios.get(url).then((data) => data.data);
}

// return Axios.get(url).then((data) => {
//   var X = data.data.articles;
//   for (var i = 0; i < X.length; i++) {
//     console.log(X[i]);
//     var newX = X[i]["content"];
//     if (!newX) continue;
//     var n = newX.indexOf("[+");
//     if (n === -1) continue;
//     else {
//       X[i].content = newX.slice(0, n);
//     }
//   }
//   data.data.articles = X;
//   console.log(data.data);
//   return data.data;
// });
