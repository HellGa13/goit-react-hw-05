import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovCast } from "../../services/movieService";

export default function MovieCast() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchMovCast(movieId)
      .then((data) => setCasts(data.cast))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
   <div>
      {loading && <p>Loading...</p>}
      {casts.length > 0 &&
        casts.map(actor => (
          <div key={actor.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt="Sorry, we don't have her/his photo"
              width="168"
            />
            <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
          </div>
        ))}
      {!loading && casts.length === 0 && (
        <div>We dont have any cast info for this movie...</div>
      )}
    </div>
  );
}



