import axios from "axios";
const ApiUrl = import.meta.env.VITE_API_URL;

const apiInstance = axios.create({
  baseURL: ApiUrl,
  Accept: 'application/json',
  ContentType: 'application/json',
});

apiInstance.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem("authToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const get = async (endpoint, config = {}) => {
  return await apiInstance.get(endpoint, config);
};

export const post = async (endpoint, data, config = {}) => {
  return await apiInstance.post(endpoint, data, config);
};

export const put = async (endpoint, data) => {
  return await apiInstance.put(endpoint, data);
};

export default apiInstance;
