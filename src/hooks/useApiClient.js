import { useState } from "react";
import axios from "axios";
import { isAfter } from "date-fns";
import { toast } from "react-hot-toast";
import { apiBaseUrl, defaultError, sessionExpired } from "../constants";
import { useLoading } from "../context/LoadingContext";
import { useNavigate } from "react-router-dom";

export const useApiClient = () => {
  const { setLoading } = useLoading();
  const navigate = useNavigate();

  const [apiClient] = useState(() => {
    const instance = axios.create({
      baseURL: apiBaseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });

    instance.interceptors.request.use(
      (config) => {
        const authDataString = localStorage.getItem("auth");

        if (authDataString) {
          const authData = JSON.parse(authDataString);
          const { token, expirationDate } = authData;

          const currentDate = new Date();
          const tokenDate = new Date(expirationDate);

          if (isAfter(currentDate, tokenDate)) {
            toast.error(sessionExpired);
            localStorage.removeItem("auth");
            navigate("/login");
          }
          config.headers.Authorization = `Bearer ${token}`;
        }
        setLoading(true);
        return config;
      },
      (error) => {
        setLoading(false);
        return Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      (response) => {
        setLoading(false);
        return response;
      },
      (error) => {
        setLoading(false);
        toast.error(error?.response?.data?.message || defaultError);
        localStorage.removeItem("auth");
        navigate("/login");
        return Promise.reject(error);
      }
    );

    return instance;
  });

  const get = async (path, queryParams, options) => {
    try {
      const response = await apiClient.get(path, {
        ...options,
        params: { ...queryParams },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const post = async (path, payload, options) => {
    try {
      const response = await apiClient.post(path, payload, options);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const del = async (path, options) => {
    try {
      const response = await apiClient.delete(path, options);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const put = async (path, payload, options) => {
    try {
      const response = await apiClient.put(path, payload, options);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { get, post, del, put };
};
