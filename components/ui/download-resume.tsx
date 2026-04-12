"use client"
import { Download } from "lucide-react";
import { ResumePaper } from "./resume-paper";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Folder from "./Folder";

export const DownloadCV = ({
    title
}: {
    title: string;
}) => {
    const { push } = useRouter();
    const [isFolderHovered, setIsFolderHovered] = useState(false);
    return (
        <div
            className="cursor-target flex items-center gap-1 pr-6 h-12 rounded-full border border-border bg-card hover:bg-accent/50 hover:border-primary/50 transition-all duration-300 shadow-sm w-full sm:w-auto justify-center sm:justify-start cursor-pointer"
            onMouseEnter={() => setIsFolderHovered(true)}
            onMouseLeave={() => setIsFolderHovered(false)}
            onClick={() => push("https://drive.google.com/file/d/15c9n9088TWLZ_IaRW7ykweaSZjHlZjyL/view?usp=sharing")}
        >
            <div className="w-[50px] h-full flex items-center justify-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-[6px] pr-1 pl-1">
                    <Folder
                        size={0.2}
                        color="var(--primary)"
                        isHovered={isFolderHovered}
                        items={[
                            <ResumePaper key="1" onClick={() => push("https://drive.google.com/file/d/15c9n9088TWLZ_IaRW7ykweaSZjHlZjyL/view?usp=sharing")} />,
                            <ResumePaper key="2" onClick={() => push("https://drive.google.com/file/d/15c9n9088TWLZ_IaRW7ykweaSZjHlZjyL/view?usp=sharing")} />,
                            <ResumePaper key="3" onClick={() => push("https://drive.google.com/file/d/15c9n9088TWLZ_IaRW7ykweaSZjHlZjyL/view?usp=sharing")} />,
                        ]}
                    />
                </div>
            </div>
            <div className="flex flex-col items-start -space-y-0.5">
                <span className="text-sm font-semibold flex items-center gap-1">{title} <Download className="h-3 w-3 text-muted-foreground inline" /></span>
                <span className="text-[10px] text-muted-foreground whitespace-nowrap">Click anywhere to open</span>
            </div>
        </div>
    );
};