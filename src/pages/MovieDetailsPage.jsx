import { useEffect, useRef, useState } from "react";
import {
  NavLink,
  useParams,
  Outlet,
  useLocation,
} from "react-router-dom";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import BackButton from "../components/BackButton/BackButton";
import { fetchMovDetails } from "../services/movieService";

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [movieInfo, setMovieInfo] = useState(null);
    const location = useLocation();
    const backLinkHref = useRef(location.state) ?? '/movies';
  
    useEffect(() => {
      setIsLoading(true);
      fetchMovDetails(movieId)
        .then(data => setMovieInfo(data))
        .finally(() => setIsLoading(false));
    }, [movieId]);
  
    return (
      <div>
        <BackButton to={backLinkHref.current} />
        {isLoading && <p>Loading info...</p>}
        {movieInfo && <MovieDetails movieInfo={movieInfo} />}
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    );
  }