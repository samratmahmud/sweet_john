import Footerlink from "@/components/common/Footerlink";
import React from "react";

let livesAll = [
  {
    pic: "/picture/idle.webp (9).png",
    new: "NEW",
    date: "2023.08.13 [SUNDAY] ",
    name: `Sweet John's new album "In Mind" digital platform`,
    title:
      "Sweet John, an indie band from Taipei, creates a unique but easy listening POP style based on Math-rock, Jazz, sampling and vivid sound design. ",
  },
  {
    pic: "/picture/idle.webp (10).png",
    new: "NEW",
    date: "2023.08.13 [SUNDAY] ",
    name: `Sweet John's new album "In Mind" digital platform`,
    title:
      "Sweet John, an indie band from Taipei, creates a unique but easy listening POP style based on Math-rock, Jazz, sampling and vivid sound design. ",
  },
  {
    pic: "/picture/idle.webp (11).png",
    new: "NEW",
    date: "2023.08.13 [SUNDAY] ",
    name: `Sweet John's new album "In Mind" digital platform`,
    title:
      "Sweet John, an indie band from Taipei, creates a unique but easy listening POP style based on Math-rock, Jazz, sampling and vivid sound design. ",
  },
  {
    pic: "/picture/idle.webp (12).png",
    new: "NEW",
    date: "2023.08.13 [SUNDAY] ",
    name: `Sweet John's new album "In Mind" digital platform`,
    title:
      "Sweet John, an indie band from Taipei, creates a unique but easy listening POP style based on Math-rock, Jazz, sampling and vivid sound design. ",
  },
  {
    pic: "/picture/idle.webp (13).png",
    new: "NEW",
    date: "2023.08.13 [SUNDAY] ",
    name: `Sweet John's new album "In Mind" digital platform`,
    title:
      "Sweet John, an indie band from Taipei, creates a unique but easy listening POP style based on Math-rock, Jazz, sampling and vivid sound design. ",
  },
  {
    pic: "/picture/idle.webp (14).png",
    new: "NEW",
    date: "2023.08.13 [SUNDAY] ",
    name: `Sweet John's new album "In Mind" digital platform`,
    title:
      "Sweet John, an indie band from Taipei, creates a unique but easy listening POP style based on Math-rock, Jazz, sampling and vivid sound design. ",
  },
];

function Live() {
  return (
    <section>
      <div className="container">
        <div className="lg:mt-44 mt-16 flex items-center lg:gap-20 gap-4 lg:mb-[90px] mb-10">
          <div className="lg:text-8xl text-6xl font-black text-gray-50/90 uppercase">
            LIVE
          </div>
          <img
            className="lg:max-h-16 max-h-6 flex-grow"
            src="/picture/Group 1171275213.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-16 lg:mb-48 mb-20">
          {livesAll.map((item, index) => (
            <div key={index} className="lg:flex items-center gap-10">
              <div className="flex-shrink-0">
                <img
                  className="w-full mb-5 lg:mb-0 rounded-lg lg:rounded-none"
                  src={item.pic}
                  alt=""
                />
              </div>
              <div className="">
                <div className="flex items-center lg:items-start lg:flex-col-reverse gap-2">
                  <div className="lg:text-xl text-lg text-neutral-400 mb-1.5">
                    {item.date}
                  </div>
                  <div className="text-xs italic text-black-0 px-1  bg-yellow-400 max-w-[38px]">
                    {item.new}
                  </div>
                </div>
                <div className="lg:text-[29px] text-xl font-bold text-gray-50 lg:mb-5 mb-3">
                  {item.name}
                </div>
                <div className="lg:text-lg text-base text-neutral-400 font-roboto">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footerlink />
    </section>
  );
}

export default Live;
