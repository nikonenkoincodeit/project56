import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

export const getData = (path) => {
  return axios.get(path, {
    params: {
      limit: 20,
      skip: 20,
    },
  });
};
