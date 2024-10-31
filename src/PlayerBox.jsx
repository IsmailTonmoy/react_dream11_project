
import Profile from "../assets/profile.png";
import Flag from '../assets/flag.png';
import { getImage } from "./utility";
export default function PlayerBox({player,onSelect}) {


  return (


    <div className="card bg-base-100 w-[340] shadow-xl">
      <figure className="pr-12 pl-5  pt-8 w-96 h-96 ">
        <img src={getImage(player.image)} alt="Pic" className="rounded-xl object-cover w-full h-full" />
      </figure>
      <div className="card-body">
        <div className="flex gap-2">
          <img src={Profile} alt="" />
          <h2 className="card-title">{player.name}</h2>
        </div>

        <div className="flex justify-between gap-24">
        <div className="flex items-center gap-2 ">
          <img src={Flag} alt="" className="w-4 "/>
          <p>{player.country}</p>

        </div>

        <p className="bg-gray-100 p-2  rounded-lg text-center ">{player.role}</p>

        </div>
        <hr />

        <h1 className="font-bold">Rating</h1>
        <div className="flex justify-between">
          <h1>Batting-type:</h1>
          <h1>{player.battingType}</h1>
        </div>
        <div className="flex justify-between">
          <h1>Bowling-type:</h1>
          <h1>{player.bowlingType}</h1>
        </div>
        <div className="flex justify-between items-center">
          <h1>Price:${player.biddingPrice}</h1>
          <button href="#" className="border p-1 rounded-lg " onClick={(e)=>onSelect(e,player)}>Choose Player</button>
        </div>
        
        
      </div>
    </div>
  );
}
