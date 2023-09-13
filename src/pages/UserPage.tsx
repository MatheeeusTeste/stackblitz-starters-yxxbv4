import { useEffect, userState } from 'react';
import { getDiscoverMovies } from '../services/movidb';

export function UserPage() {
const[movies, setMovies] = userState([]);


async function handleLoadMovies() {
  const data = await getDiscoverMovies();
  setMovies(data.results);
}

useEffect(() => {
  handleLoadMovies();
}, []);

  return (
    <>
    <h1>Bem-vindo!</h1>
    <hr />
    <h2>Seus favoritos</h2>
    <hr />
    <h2>Veja outros lançamentos</h2>

    {movies?.map((movie) => {
      return <div>{movie.original_title}</div>;
    })}
    </>
  );
}