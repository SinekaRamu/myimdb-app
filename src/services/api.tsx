import axios from "axios";
import { IMovie, IUserData } from "../type";
// import { IUserData } from "../type";

const axiosInstance = axios.create({
  baseURL: "http://0.0.0.0:5001",
});

const axiosHeader = axios.create({
  baseURL: "http://0.0.0.0:5001",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const addUser = (payload: IUserData) => {
  return axiosInstance.post("/signup", payload);
};

export const getToken = (payload: IUserData) => {
  return axiosInstance.post("/login", payload);
};

export const getUser = () => {
  const token = localStorage.getItem("token");
  const headers = { Authorization: `Bearer ${token}` };
  return axiosInstance.get("/u/account", { headers });
};
export const getMovies = () => {
  return axiosHeader.get("/movies");
};

export const addMovie = (payload: IMovie) => {
  return axiosHeader.post("/movies", payload);
};
