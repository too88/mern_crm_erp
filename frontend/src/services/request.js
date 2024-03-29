import { API_BASE_URL } from "@/config/serverApiConfig";
import axios from "axios";

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.withCredentials = true;

const request = {
  search: async ({ entity, options = {} }) => {
    try {
      let query = "?";
      for (const key in options) {
        query += key + "=" + options[key] + "&";
      }
      query = query.slice(0, -1);

      const response = await axios.get(entity + "/search" + query);

      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
  create: async ({ entity, jsonData }) => {
    try {
      const response = await axios.post(entity + "/create", jsonData);

      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
  update: async ({ entity, id, jsonData }) => {
    try {
      const response = await axios.patch(entity + "/update/" + id, jsonData);

      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
  delete: async ({ entity, id }) => {
    try {
      const response = await axios.delete(entity + "/delete/" + id);

      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
  list: async ({ entity, options = {} }) => {
    try {
      let query = "?";
      for (const key in options) {
        query += key + "=" + options[key] + "&";
      }

      query = query.slice(0, -1);

      const response = await axios.get(entity + "/list" + query);
      //TODO: implement success

      return response.data;
    } catch (error) {
      //TODO: implement error
      return console.log(error);
    }
  },
  patch: async ({ entity, jsonData }) => {
    try {
      const response = await axios.patch(entity, jsonData);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
  listAll: async ({ entity }) => {
    try {
      const response = await axios.get(entity + "/listAll");

      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
};

export default request;
