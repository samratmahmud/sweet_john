import React from "react";

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
    <div className="container">
      <div className="flex flex-col gap-28">
        {allVideo.map((item, index) => (
          <div key={index}>
            <div className="flex flex-row gap-6 items-center relative">
              <div className="flex-shrink-0">
                <div className="h-1 w-[50px] bg-yellow-400"></div>
              </div>
              <div className="flex-shrink-0">
                <img className="w-full" src={item.pic} alt="" />
              </div>
              <div>
                <div className="text-lg text-yellow-400 mb-0.5">
                  {item.date}
                </div>
                <div className="text-34 font-bold text-gray-50 mb-2.5">
                  {item.name}
                </div>
                <div className="text-base text-neutral-400">{item.title}</div>
              </div>
            </div>
            <div className="w-1 top-0 bottom-0 bg-yellow-400 absolute"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YearsBody;
