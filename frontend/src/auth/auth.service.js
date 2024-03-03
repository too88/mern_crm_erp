import axios from "axios";
import { API_BASE_URL } from "@/config/serverApiConfig";

export const login = async ({ loginData }) => {
  try {
    const response = await axios.post(
      API_BASE_URL + `login?timestamp=${new Date().getTime()}`,
      loginData
    );

    const { data } = response;

    return data;
  } catch (error) {
    console.log("error AT AUTH.SERVICE", error);
  }
};

export const register = async ({ registerData }) => {
  try {
    const response = await axios.post(API_BASE_URL + `register`, registerData);

    const { data } = response;

    return data;
  } catch (error) {
    return errorHandler(error);
  }
};

export const verify = async ({ userId, emailToken }) => {
  try {
    const response = await axios.get(API_BASE_URL + `verify/${userId}/${emailToken}`);

    const { data } = response;

    return data;
  } catch (error) {
    return errorHandler(error);
  }
};

export const logout = async () => {
  axios.defaults.withCredentials = true;
  try {
    const response = await axios.post(API_BASE_URL + `logout?timestamp=${new Date().getTime()}`);
    const { data } = response;

    return data;
  } catch (error) {
    return errorHandler(error);
  }
};
