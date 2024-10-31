import { getImage } from "./utility";
import Delete from "../assets/delete.png"

export default function SelectPlayer({player,onDelete, onAvailable}){
    return (
        <div>
            <div className="border p-4 rounded-2xl flex justify-between items-center">
            <div className="flex gap-3 items-center">
            <div className=" w-24 h-24 ">
            <img src={getImage(player.image)} alt=""  className="rounded-2xl w-full h-full object-cover"/>
            </div>
            <div>
            <h1 className="font-bold">{player.name}</h1>
            <h1 className="text-gray-600 text-sm">{player.battingType}</h1>
            <h1 className="text-gray-500 text-sm">${player.biddingPrice}</h1>
            </div>
            </div>
            <button onClick={()=>onDelete(player)}>
                <img src={Delete} alt="" className="w-8" />
            </button>
        </div>
        
        </div>
        
    );
}