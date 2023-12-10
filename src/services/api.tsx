import axios from "axios";
import { IMovie } from "../type";
// import { IUserData } from "../type";

const axiosInstance = axios.create({
  baseURL: "http://0.0.0.0:5001",
});

export const addUser = () => {
  return axiosInstance.post("/signup");
};

export const getMovies = () => {
  return axiosInstance.get("/movies");
};

export const addMovie = (payload: IMovie) => {
  return axiosInstance.post("/movies", payload);
};

export const updateMovie = (payload: IMovie, movieId: number) => {
  return axiosInstance.put(`/movies/${movieId}`, payload);
};

export const deleteMovie = (movieId: number) => {
  return axiosInstance.delete(`/movies/${movieId}`);
};

export const getMovie = async (movieId: number) => {
  return axiosInstance.get(`/movies/${movieId}`);
};
