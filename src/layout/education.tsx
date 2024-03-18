"use client";
import Image from "next/image";

export const EducationSection = () => {
  return (
    <div id="education" className="w-[70%] mx-auto md:w-full">
      <div className="flex flex-col items-center gap-4  w-full z-50  ">
        <div className="sticky top-0 px-6 py-2  z-40 font-light text-center text-2xl leading-snug tracking-wider  backdrop-blur-2xl w-fit rounded-full">
          My Education
        </div>
        <div className="flex flex-col gap-10  w-full lg:flex-row lg:gap-10  items-center justify-center mx-auto">
          <div className="flex flex-col w-96 text-black dark:text-white   px-10 py-4 bg-white dark:bg-primary/40 dark:backdrop-blur-3xl tracking-wider">
            <div className="flex flex-row gap-2 lg:flex-row items-center md:flex-col">
              <Image
                src="https://www.heuc.edu.et/static/wp-content/uploads/2022/04/hopelogo4.png"
                width={100}
                alt="HEUC logo"
                className="bg-white p-4 w-44 h-20"
                height={100}
              />
              <div className="flex flex-col">
                <div className=" text-sm font-semibold">
                  Bachelor of Computer Science
                </div>
                <div className="text-xs font-semibold"> 2021 - present</div>
              </div>
            </div>
            <div className="flex flex-col gap-2 py-4 text-xs">
              <div className="font-semibold">Jemo Around Lebu Medihanialem</div>
              <div className="font-semibold">Addis Ababa, Ethiopia</div>
              <div>
                Cummulative GPA of 3.75 until present Major in Computer Science
              </div>
            </div>
          </div>
          <div className="flex flex-col w-96 text-black dark:text-white   px-10 py-4 bg-white dark:bg-primary/40 dark:backdrop-blur-3xl tracking-wider">
            <div className="flex flex-row gap-2 lg:flex-row items-center md:flex-col">
              <Image
                src="/newaychallenge.png"
                width={40}
                alt="HEUC logo"
                className="bg-white  p-4 w-44 h-20 object-contain"
                height={100}
              />
              <div className="w-full">
                <div className=" text-sm font-semibold">
                  Bachelor of Computer Science
                </div>
                <div className="text-xs font-semibold"> 2021 - present</div>
              </div>
            </div>
            <div className="flex flex-col gap-2 py-4 text-xs">
              <div className="font-semibold">Jemo Around Lebu Medihanialem</div>
              <div className="font-semibold">Addis Ababa, Ethiopia</div>
              <div>
                Cummulative GPA of 3.75 until present Major in Computer Science
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
