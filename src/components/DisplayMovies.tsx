import { IMovie } from "../type";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

interface DisplayMovies {
  movies: IMovie[];
}

const DisplayMovies: React.FC<DisplayMovies> = ({ movies }) => {
  return (
    <div className="movie-cards">
      {movies.map((m) => (
        <div className="movie-card" key={m.id}>
          {/* {rating.map((r) => r.movie_id == m.id)} */}
          <Link to={`/movies/${m.id}`} role="button">
            <MovieCard movie={m} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DisplayMovies;
