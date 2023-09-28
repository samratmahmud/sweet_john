import React from "react";
import Button from "../../components/common/Button";

let allVideo = [
  {
    pic: "/picture/idle.webp (22).png",
    date: "2023.08.13 [SUNDAY] ",
    name: "Sweet John 首部 Live Session 發佈",
    title: `Sweet John, an indie band from Taipei, creates a unique but easy listening POP style based on Math-rock, Jazz, sampling and vivid sound design. 
    `,
  },
  {
    pic: "/picture/idle.webp (23).png",
    date: "2023.08.13 [SUNDAY] ",
    name: "Sweet John 首部 Live Session 發佈",
    title: `Sweet John, an indie band from Taipei, creates a unique but easy listening POP style based on Math-rock, Jazz, sampling and vivid sound design. 
    `,
  },
  {
    pic: "/picture/idle.webp (24).png",
    date: "2023.08.13 [SUNDAY] ",
    name: "Sweet John 首部 Live Session 發佈",
    title: `Sweet John, an indie band from Taipei, creates a unique but easy listening POP style based on Math-rock, Jazz, sampling and vivid sound design. 
    `,
  },
  {
    pic: "/picture/idle.webp (22).png",
    date: "2023.08.13 [SUNDAY] ",
    name: "Sweet John 首部 Live Session 發佈",
    title: `Sweet John, an indie band from Taipei, creates a unique but easy listening POP style based on Math-rock, Jazz, sampling and vivid sound design. 
    `,
  },
  {
    pic: "/picture/idle.webp (23).png",
    date: "2023.08.13 [SUNDAY] ",
    name: "Sweet John 首部 Live Session 發佈",
    title: `Sweet John, an indie band from Taipei, creates a unique but easy listening POP style based on Math-rock, Jazz, sampling and vivid sound design. 
    `,
  },
  {
    pic: "/picture/idle.webp (24).png",
    date: "2023.08.13 [SUNDAY] ",
    name: "Sweet John 首部 Live Session 發佈",
    title: `Sweet John, an indie band from Taipei, creates a unique but easy listening POP style based on Math-rock, Jazz, sampling and vivid sound design. 
    `,
  },
];

function YearsBody() {
  return (
    <div className="container mb-32">
      <div className="flex flex-col lg:pl-14 pl-8 lg:gap-28 gap-9 relative">
        <div className="w-1 lg:left-14 left-8 -top-28 bottom-6 bg-yellow-400 absolute"></div>
        {allVideo.map((item, index) => (
          <div key={index}>
            <div className="flex flex-row lg:gap-6 gap-3.5 lg:items-center">
              <div className="mt-3">
                <hr className="h-1 lg:w-[50px] w-[39px] bg-yellow-400" />
              </div>
              <div className="flex-shrink-0 hidden lg:block">
                <img className="w-full" src={item.pic} alt="" />
              </div>
              <div>
                <div className="text-lg text-yellow-400 lg:mb-0.5 mb-4">
                  {item.date}
                </div>
                <div className="lg:hidden mb-4">
                  <img className="w-full" src={item.pic} alt="" />
                </div>
                <div className="lg:text-34 text-xl font-bold text-gray-50 mb-2.5">
                  {item.name}
                </div>
                <div className="lg:text-base text-md text-neutral-400">
                  {item.title}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex items-center gap-6">
          <div className="h-1 w-[50px] bg-yellow-400"></div>
          <div className="flex-grow">
            <Button name="More" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default YearsBody;
