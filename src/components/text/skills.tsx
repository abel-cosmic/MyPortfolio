import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { attraction } from "../../../utils/objects/setions";

export const SkillHeader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div
      className={` flex flex-col items-center text-center gap-4 md:w-2/3  px-4`}
    >
      <div className="flex flex-row items-end gap-4">
        <h1
          className={` text-3xl md:text-5xl font-extrabold w-full text-primary  `}
        >
          Tech stacks for 10x
          <TextTransition
            springConfig={presets.molasses}
            inline
            className="mx-2 text-[#22c55e]"
          >
            {attraction[index % attraction.length]}
          </TextTransition>{" "}
          websites
        </h1>
      </div>
      <p
        className={`  rounded-md   tracking-wide text-[#acaeb1]  text-base text-center w-2/3`}
      >
        Proficient in a Diverse Range of Tech Stacks, with a Rapid Learning
        Curve for Embracing New Technologies.
      </p>
    </div>
  );
};
