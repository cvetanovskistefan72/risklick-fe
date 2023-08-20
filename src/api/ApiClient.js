import axios from "axios";
import { toast } from "react-hot-toast";
import { apiBaseUrl } from "../constants";

class ApiClient {
  constructor() {
    this.instance = axios.create({
      baseURL: apiBaseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.setupInterceptors();
  }

  setupInterceptors() {
    this.instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("TOKEN");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response) {
          if (error.response.status === 401) {
            localStorage.removeItem("TOKEN");
          } else {
            toast.error(error.response.data.message);
          }
          toast.error(error.response.data.message);
        } else {
          toast.error("Network Error");
        }
        return Promise.reject(error);
      }
    );
  }

  async get(path, queryParams, options) {
    return this.instance.get(path, {
      ...options,
      params: { ...queryParams },
    });
  }

  async post(path, payload, options) {
    return this.instance.post(path, payload, options);
  }

  async delete(path, options) {
    return this.instance.delete(path, options);
  }

  async put(path, payload, options) {
    return this.instance.put(path, payload, options);
  }
}

export default new ApiClient();
