"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const Goku = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ 
        y: [0, -15, 0],
        opacity: 1
      }}
      transition={{ 
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        },
        opacity: {
          duration: 1
        }
      }}
      whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
      className="cursor-target fixed bottom-4 right-0 z-0 max-md:hidden pointer-events-auto"
    >
      <Image
        src="/anime/goku-sleeping.png"
        alt="Anime touch"
        width={240}
        height={240}
        className="hidden dark:block transition-opacity duration-300"
        priority
      />
      <Image
        src="/anime/goku.png"
        alt="Anime touch"
        width={240}
        height={240}
        className="block dark:hidden transition-opacity duration-300"
        priority
      />
    </motion.div>
  );
};

export default Goku;
