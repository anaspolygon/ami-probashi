import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTHORIZATION_TOKEN}`,
  },
});

const _get = (url: string, config = {}) => {
  return apiClient.get(url, config);
};

const _delete = (url: string, config = {}) => {
  return apiClient.delete(url, config);
};

const _put = (url: string, data = {}, config = {}) => {
  return apiClient.put(url, data, config);
};

const _post = (url: string, data = {}, config = {}) => {
  return apiClient.post(url, data, config);
};

export { _get, _delete, _put, _post };
