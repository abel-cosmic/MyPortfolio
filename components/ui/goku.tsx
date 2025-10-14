"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

const Goku = () => {
  const { theme } = useTheme();
  return (
    <div className="fixed bottom-4 right-0 z-0 max-md:hidden">
      <Image
        src={theme === "dark" ? "/anime/goku-sleeping.png" : "/anime/goku.png"}
        alt="Anime touch"
        width={240}
        height={240}
        className="transition-opacity duration-300"
      />
    </div>
  );
};

export default Goku;
