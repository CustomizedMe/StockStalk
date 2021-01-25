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
export function newsFeed() {
  const url =
    "http://newsapi.org/v2/top-headlines?country=in&apiKey=fcf2844727134ba8a3ba4513467e6e1c";
  return Axios.get(url).then((data) => data.data);
}
