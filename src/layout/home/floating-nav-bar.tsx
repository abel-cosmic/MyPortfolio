"use client";
import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { CardContainer, CardItem } from "@/components/ui/acertinity-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import dynamic from "next/dynamic";

const FloatingNavBar = ({
  menus,
}: {
  menus: {
    tip: string;
    icons: any;
    link: string;
  }[];
}) => {
  const [mobile, setMobile] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="hover:scale-105 fixed   z-50 bottom-10 left-4 transition-all  lg:left-[38%] md:left-1/3 ease-linear">
      <CardContainer className="max-md:w-full ">
        <CardItem
          translateX={mobile ? "" : "-20"}
          className={`glass-container bg-white dark:bg-black/30 bg-opacity-25 backdrop-blur-2xl border-2 max-md:border-b-0 max-md:pt-4   rounded-full  max-md:w-full max-md:items-center max-md:justify-center max-md:scale-0 shadow-xl flex flex-row gap-4 py-2 px-3`}
        >
          {menus.map((menu) => (
            <TooltipProvider key={menu.link}>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    variant={"menu"}
                    size={"menuicon"}
                    className={
                      "transition-all hover:scale-150 max-md:scale-100 ease-linear"
                    }
                    onClick={() => {
                      // Handle click logic if needed
                    }}
                  >
                    {menu.icons}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{menu.tip}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </CardItem>
      </CardContainer>
    </div>
  );
};

export default dynamic(() => Promise.resolve(FloatingNavBar), { ssr: false })