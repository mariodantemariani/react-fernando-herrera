import axios from "axios";
import { getEnvVariables } from "../helpers";

const { VITE_API_URL } = getEnvVariables();

const calendarApi = axios.create({
  baseURL: "http://localhost:4000/api",
});

// Todo: configurar interceptores
//para añadir el token en los requests
calendarApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("token"),
  };

  return config;
});

export default calendarApi;
