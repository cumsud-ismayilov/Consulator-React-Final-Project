import axios from "axios";

const Http = axios.create({
  baseURL: process.env.BaseUrl,
});

export const getBlogApi = async (url) => {
  return await Http.get(url);
};
export const postBlogApi = async (url, data) => {
  return await Http.post(url, data);
};

export const getHomeServiceApi = async (url) => {
  return await Http.get(url);
};
