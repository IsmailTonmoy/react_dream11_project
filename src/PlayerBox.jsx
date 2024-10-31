
import Profile from "../assets/profile.png";
import { getImage } from "./utility";
export default function PlayerBox({player,onSelect}) {


  return (


    <div className="card bg-base-100 w-[340] shadow-xl">
      <figure className="px-10 pt-10 w-96 h-96 ">
        <img src={getImage(player.image)} alt="Pic" className="rounded-xl object-cover w-full h-full" />
      </figure>
      <div className="card-body">
        <div className="flex gap-2">
          <img src={Profile} alt="" />
          <h2 className="card-title">{player.name}</h2>
        </div>
 
        
      </div>
    </div>
  );
}
