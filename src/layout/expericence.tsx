"use client";
import { experience } from "../../utils/objects/setions";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const ExperienceSection = () => {
  return (
    <div
      id="experience"
      className="w-full bg-white/60 dark:bg-transparent md:py-20 py-6 "
    >
      <div className="flex flex-col items-center gap-4  w-full z-50 pb-10  ">
        <div className="sticky top-0 px-6 py-2  z-40 font-light text-center text-2xl leading-snug tracking-wider  backdrop-blur-2xl w-fit rounded-full">
          My Experience
        </div>
        <VerticalTimeline className="">
          <div className="flex flex-col md:w-4/5 justify-center lg:w-full w-full  gap-4 items-center">
            {experience.map((data, index) => {
              return (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work bg-transparent "
                  contentArrowStyle={{
                    borderRight: "2px solid hsl(var(--border))",
                  }}
                  date={data.timeline}
                  visible
                  contentStyle={{
                    background: "rgba(255,255,255,0.4)",
                    border: "2px solid hsl(var(--border))",
                    boxShadow: "none",

                    backdropFilter: "blur(30px)",
                  }}
                  iconStyle={{
                    background: `hsl(var(--background))`,
                    color: "hsl(var(--primary))",
                  }}
                  icon={data.icon}
                >
                  <div
                    key={index}
                    className={`flex  gap-4 items-start flex-row-reverse lg:items-center  text-black dark:text-white  w-full ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse "
                    } `}
                  >
                    <div className="flex flex-col gap-2 h-full  ">
                      <div className="text-xl font-semibold tracking-wider">
                        {data.title}
                      </div>
                      <div className="text-lg font-light tracking-wider">
                        {data.location}
                      </div>
                      <div className="text-sm font-extralight tracking-wider line-clamp-3">
                        {data.content}
                      </div>
                    </div>
                  </div>
                </VerticalTimelineElement>
              );
            })}
          </div>
        </VerticalTimeline>
      </div>
    </div>
  );
};
