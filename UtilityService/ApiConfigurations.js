import axios from "axios";
import { handleApiError } from "./ApiErrors";
import { string, object, oneOf, bool } from "prop-types";

// const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const base_url = "https://greenfinite-app.herokuapp.com/api/v1/";
const axiosInstance = axios.create({
  baseURL: base_url,
});

export function publicRoute(url, method, data, config) {
  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => Promise.reject(error)
  );
  return new Promise((resolve, reject) => {
    if (method === "POST") {
      return axiosInstance
        // .post(url, data, config)
        .post(url, data)
        .then((res) => resolve(res.data))
        .catch((err) => reject(handleApiError(err)));
    }
    if (method === "GET") {
      return axiosInstance
        .get(url, config)
        .then((res) => resolve(res.data))
        .catch((err) => reject(handleApiError(err)));
    }
    if (method === "PATCH") {
      return axiosInstance
        .patch(url, data, config)
        .then((res) => resolve(res.data))
        .catch((err) => reject(handleApiError(err)));
    }
  });
}
export function privateRoute(url, data, method, config) {
  axiosInstance.interceptors.request.use(
    (config) => {
      const checkToken = localStorage.getItem("token");
      const userToken = JSON.parse(checkToken);
      config.headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin",
      };
      // This adds an authorization key to config object if a token exists.
      if (userToken) {
        config.headers.common["Authorization"] = `Bearer ${userToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  return new Promise((resolve, reject) => {
    if (method === "POST") {
      return axiosInstance
        .post(url, data, config)
        .then((res) => resolve(res.data))
        .catch((err) => reject(handleApiError(err)));
    }
    if (method === "PUT") {
      return axiosInstance
        .put(url, data, config)
        .then((res) => resolve(res.data))
        .catch((err) => reject(handleApiError(err)));
    }
    if (method === "GET") {
      return axiosInstance
        .get(url, config)
        .then((res) => resolve(res.data))
        .catch((err) => reject(handleApiError(err)));
    }
    if (method === "DELETE") {
      return axiosInstance
        .delete(url, config)
        .then((res) => resolve(res.data))
        .catch((err) => reject(handleApiError(err)));
    }
    if (method === "PATCH") {
      return axiosInstance
        .patch(url, data, config)
        .then((res) => resolve(res.data))
        .catch((err) => reject(handleApiError(err)));
    }
  });
}
function callApi(url, method, data, config, token) {
  if (token) {
    return privateRoute(url, data, method, config);
  }
  return publicRoute(url, method, data, config);
}
callApi.propTypes = {
  url: string,
  data: object,
  method: oneOf(["POST", "GET", "PATCH", "PUT", "DELETE"]),
  config: object,
  token: bool,
};
export default callApi;
