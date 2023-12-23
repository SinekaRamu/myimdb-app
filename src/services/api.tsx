import axios from "axios";
import { IMovie, IRating, IUserData } from "../type";
// import { IUserData } from "../type";

const axiosInstance = axios.create({
  baseURL: "http://0.0.0.0:5001",
});

const setHeaders = () => {
  const token = localStorage.getItem("token");
  let headers = {};
  if (token) {
    headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }
  return headers;
};

export const addUser = (payload: IUserData) => {
  return axiosInstance.post("/signup", payload, setHeaders());
};
export const updateUser = (payload: IUserData) => {
  return axiosInstance.put("/u/account", payload, setHeaders());
};

export const getToken = (payload: IUserData) => {
  return axiosInstance.post("/login", payload, setHeaders());
};

export const getUser = () => {
  return axiosInstance.get("/u/account", setHeaders());
};
export const getMovies = (search: string, page: number, pagesize: number) => {
  return axiosInstance.get(
    `/movies?search=${search}&page=${page}&pagesize=${pagesize}`
  );
};

//MoviesApi
export const addMovie = (payload: IMovie) => {
  return axiosInstance.post("/movies", payload, setHeaders());
};

export const getMovie = async (movieId: string) => {
  return axiosInstance.get(`/movies/${movieId}`, setHeaders());
};

export const updateMovie = (payload: IMovie, movieId: number) => {
  return axiosInstance.put(`/movies/${movieId}`, payload);
};

export const deleteMovie = (movieId: number) => {
  return axiosInstance.delete(`/movies/${movieId}`);
};

export const addRating = (payload: IRating, movieId: string) => {
  return axiosInstance.post(`/movies/${movieId}/rating`, payload, setHeaders());
};
