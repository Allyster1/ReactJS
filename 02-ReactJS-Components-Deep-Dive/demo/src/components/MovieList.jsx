import { useState } from "react";

export default function MovieList() {
   const [movies, setMovies] = useState(["The Matrix", "Man of Steel", "The Case of Christ", "Lord of the Rings"]);

   const updateMoviesHandler = () => {
      setMovies((oldMovies) => {
         //  const newMovies = oldMovies.slice(); // New refference
         const newMovies = [...oldMovies];

         const removedMovies = newMovies.shift();

         newMovies.push(removedMovies);

         return newMovies;
      });
   };

   return (
      <section>
         <h2>Movie List</h2>

         <ul>
            {/* NOTE: key should be unique, usually data comes with unique id */}
            {movies.map((movie) => (
               <li key={movie}>{movie}</li>
            ))}
         </ul>

         <button onClick={updateMoviesHandler}>Update now</button>
      </section>
   );
}
