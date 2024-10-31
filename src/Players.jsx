import { getPlData } from "../data/data";
import PlayerBox from "./PlayerBox";
import { useState } from "react";



export default function Players({ }) {
  const players = getPlData();
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <section className="w-11/12 mx-auto">
      <div className="pt-4 flex justify-between items-center pb-4">
        {isAvailable ? (
          <h1 className="font-bold">Available Players</h1>
        ) : (
          <h1 className="font-bold">
            Selected Players: {selectedPlayer.length}/6
          </h1>
        )}
        
      </div>
      
    </section>
  );
}
