import Axios from "axios";

const BASE_URL = "/api/";

export function companyComments(company) {
  const url = BASE_URL + `user/comment/company/${company}`;
  return Axios.get(url).then((data) => data.data);
}

export function companyInfo(company) {
  const url = BASE_URL + `data/info/${company}`;
  return Axios.get(url).then((data) => data.data);
}

export function companyChart(company, duration) {
  console.log(`chart called for ${company}`);
  const url = BASE_URL + `data/${company}/${duration} `;
  return Axios.get(url).then((data) => data.data);
}

export function compareChart(company1, company2, duration) {
  console.log(`chart called for ${company1}`);
  const url = BASE_URL + `data/compare/${company1}/${company2}/${duration} `;
  return Axios.get(url).then((data) => data.data);
}

export function newsFeed() {
  const url =
    "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fcf2844727134ba8a3ba4513467e6e1c";
  return Axios.get(url).then((data) => data.data);
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
}
