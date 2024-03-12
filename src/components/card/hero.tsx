
import Image from "next/image";
import gif from "/public/My Coding - Made with Clipchamp.gif";
const HeroCard=()=>{
    return(
        <div className="border border-primary/60 rounded-xl flex flex-col w-fit">
        <div className="flex flex-row gap-2 py-2 pl-4">
          <div className="w-3 h-3 transition-all ease-linear bg-red-500 rounded-full hover:scale-125 hover:cursor-pointer"></div>
          <div className="w-3 h-3 transition-all ease-linear bg-yellow-500 rounded-full hover:scale-125 hover:cursor-pointer"></div>
          <div className="w-3 h-3 transition-all ease-linear bg-green-500 rounded-full hover:scale-125 hover:cursor-pointer"></div>
        </div>
        <Image
          src={gif}
          height="1000"
          width="1000"
          className="object-cover w-full rounded-b-xl h-44 md:h-72  md:w-full group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </div>
    )
}
export default HeroCard;