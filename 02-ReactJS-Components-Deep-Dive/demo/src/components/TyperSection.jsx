import { useState } from "react";
import Typer from "./Typer.jsx";

export default function TyperSection() {
   const [isPaused, setIsStopped] = useState(false);

   const pauseToggleHandler = () => {
      setIsStopped((state) => !state);
   };

   return (
      <section>
         <h2>Typer</h2>

         {isPaused ? <p className="fancy-text">Typer is stopped!</p> : <Typer />}

         <button onClick={pauseToggleHandler}>{isPaused ? "Start" : "Stop"}</button>
      </section>
   );
}
