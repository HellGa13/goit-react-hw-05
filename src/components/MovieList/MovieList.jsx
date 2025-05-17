import { Link, useLocation } from 'react-router-dom';

export default function MoviesList({ moviesList }) {
  const location = useLocation();
  return (
    <div>
      {moviesList.length > 0 && (
        <ul>
          {moviesList.map(movie => (
            <li key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                key={movie.id}
                style={{ display: 'block' }}
                state={location}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// {/* <ul className={css.list}>
//       {users.map((user) => (
//         <li key={user.id} className={css.listItem}>
//           <h3 className={css.username}>
//             {user.firstName} {user.lastName}
//           </h3>
//           <p className={css.text}>{user.email}</p>
//           <p className={css.text}>{user.phone}</p>
//           <Link
//             className={css.link}
//             to={`/dashboard/${user.id}`}
//             state={location}
//           >
//             Details
//           </Link>
//         </li>
//       ))}
//     </ul> */}