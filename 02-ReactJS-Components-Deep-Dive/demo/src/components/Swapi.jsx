import { useEffect, useState } from "react";

export default function Swapi() {
   const [characters, setCharacters] = useState([]);

   useEffect(() => {
      fetch("https://swapi.dev/api/people")
         .then((res) => res.json())
         .then((data) => {
            setCharacters(data.results);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   return (
      <section>
         <h2>Start Wars Characters</h2>

         <ul>{characters && characters.map((character) => <li key={character.name}>{character.name}</li>)}</ul>
      </section>
   );
}
