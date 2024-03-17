"use client";
import { experience } from "../../utils/objects/setions";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const ExperienceSection = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-col items-center gap-4  w-full z-50 pb-10  ">
        <div className="sticky top-0 px-6 py-2  z-40 font-light text-center text-2xl leading-snug tracking-wider  backdrop-blur-2xl w-fit rounded-full">
          My Experience
        </div>
        <VerticalTimeline>
          <div className="flex flex-col  gap-4  items-center">
            {experience.map((data, index) => {
              return (
                <>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work bg-transparent"
                    contentArrowStyle={{
                      borderRight: "4px solid  #fff",
                    }}
                    date= {data.timeline}
                    visible
                    contentStyle={{
                      background: "#fff",
                      boxShadow: "none",
                      margin: "0px",
                      backdropFilter: "blur(30px)",
                    }}
                    iconStyle={{
                      background: "#fff",
                      color: "#000",
                    }}
                    icon={data.icon}
                  >
                    <div
                      key={index}
                      className={`flex  gap-4 items-start flex-row-reverse lg:items-center  text-black px-6 w-full ${
                        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse "
                      } `}
                    >
                      <div className="flex flex-col gap-2 h-full  pl-6 pr-4 py-10">
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
                </>
              );
            })}
          </div>
        </VerticalTimeline>
      </div>
    </div>
  );
};
