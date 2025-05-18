import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovRev } from "../../services/movieService";

export default function MovieCast() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchMovRev(movieId)
      .then((data) => setReviews(data.results))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
   <div>
      {loading && <p>Loading...</p>}
      {reviews.length > 0 && (
        <ul>
          {reviews.map(rev => (
            <li key={rev.id}>
                  <h3>Author: {rev.author}</h3>
              <p>{rev.content}</p>
            </li>
          ))}
        </ul>
      )}
      {!loading && reviews.length === 0 && (
        <div>We dont have any reviews info for this movie...</div>
      )}
    </div>
  );
}



