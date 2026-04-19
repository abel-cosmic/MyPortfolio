"use client";
import { Download } from "lucide-react";
import { ResumePaper } from "./resume-paper";
import { useState } from "react";
import Folder from "./Folder";

const RESUME_URL =
  "https://drive.google.com/file/d/1IaGM_e_q1JAJ89EUtuuulwkvvlqAP-ln/view?usp=sharing";

export const DownloadCV = ({ title }: { title: string }) => {
  const [isFolderHovered, setIsFolderHovered] = useState(false);

  const openResume = () => {
    window.open(RESUME_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <a
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-target flex items-center gap-1 pr-6 h-12 rounded-full border border-border bg-card hover:bg-accent/50 hover:border-primary/50 transition-all duration-300 shadow-sm w-full sm:w-auto justify-center sm:justify-start cursor-pointer no-underline text-inherit"
      onMouseEnter={() => setIsFolderHovered(true)}
      onMouseLeave={() => setIsFolderHovered(false)}
    >
      {/* Pass taps through to the link on touch / coarse pointers; Folder uses stopPropagation on desktop */}
      <div className="w-[50px] h-full shrink-0 flex items-center justify-center relative pointer-events-none [@media(hover:hover)_and_(pointer:fine)]:pointer-events-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-[6px] pr-1 pl-1">
          <Folder
            size={0.2}
            color="var(--primary)"
            isHovered={isFolderHovered}
            items={[
              <ResumePaper key="1" onClick={openResume} />,
              <ResumePaper key="2" onClick={openResume} />,
              <ResumePaper key="3" onClick={openResume} />,
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col items-start -space-y-0.5 min-w-0">
        <span className="text-sm font-semibold flex items-center gap-1">
          {title}{" "}
          <Download className="h-3 w-3 text-muted-foreground inline shrink-0" />
        </span>
        <span className="text-[10px] text-muted-foreground whitespace-nowrap">
          Click anywhere to open
        </span>
      </div>
    </a>
  );
};
