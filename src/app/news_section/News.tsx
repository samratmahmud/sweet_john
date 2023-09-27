import Button from "@/components/common/Button";
import Footerlink from "@/components/common/Footerlink";
import Navlink from "@/components/template/Navlink";
import Link from "next/link";
import React from "react";

let newsProps = [
  {
    new: "NEW",
    date: "2023.08.13 [SUNDAY] ",
    name: `Sweet John's new album "In Mind" digital platform`,
    title:
      "Sweet John, an indie band from Taipei, creates a unique but easy listening POP style based on Math-rock, Jazz, sampling and vivid sound design. ",
  },
  {
    new: "NEW",
    date: "2023.08.13 [SUNDAY] ",
    name: `Sweet John's new album "In Mind" digital platform`,
    title:
      "Sweet John, an indie band from Taipei, creates a unique but easy listening POP style based on Math-rock, Jazz, sampling and vivid sound design. ",
  },
  {
    new: "NEW",
    date: "2023.08.13 [SUNDAY] ",
    name: `Sweet John's new album "In Mind" digital platform`,
    title:
      "Sweet John, an indie band from Taipei, creates a unique but easy listening POP style based on Math-rock, Jazz, sampling and vivid sound design. ",
  },
  {
    new: "NEW",
    date: "2023.08.13 [SUNDAY] ",
    name: `Sweet John's new album "In Mind" digital platform`,
    title:
      "Sweet John, an indie band from Taipei, creates a unique but easy listening POP style based on Math-rock, Jazz, sampling and vivid sound design. ",
  },
  {
    new: "NEW",
    date: "2023.08.13 [SUNDAY] ",
    name: `Sweet John's new album "In Mind" digital platform`,
    title:
      "Sweet John, an indie band from Taipei, creates a unique but easy listening POP style based on Math-rock, Jazz, sampling and vivid sound design. ",
  },
  {
    new: "NEW",
    date: "2023.08.13 [SUNDAY] ",
    name: `Sweet John's new album "In Mind" digital platform`,
    title:
      "Sweet John, an indie band from Taipei, creates a unique but easy listening POP style based on Math-rock, Jazz, sampling and vivid sound design. ",
  },
];

function News() {
  return (
    <div className="container">
      <div className="lg:text-8xl text-6xl font-black text-gray-50/90 lg:mt-44 mt-16 flex items-center lg:gap-11 gap-4 lg:mb-[89px] mb-14">
        NEWS
        <img
          className="lg:max-h-16 max-h-6 flex-grow"
          src="/picture/Group 1171275213.png"
          alt=""
        />
      </div>
      <div className="flex flex-col lg:gap-16 gap-20 lg:mb-16 mb-20">
        {newsProps.map((item, index) => (
          <div key={index}>
            <div className="hidden lg:block">
              <div className="text-xs italic text-black-0 px-1 mb-2 bg-yellow-400 inline-block">
                {item.new}
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="lg:text-xl text-lg text-neutral-400 mb-1.5">
                {item.date}
              </div>
              <div className="text-xs italic text-black-0 px-1 mb-2 bg-yellow-400 inline-block lg:hidden">
                {item.new}
              </div>
            </div>
            <div className="lg:text-[32px] text-xl font-bold text-gray-50 lg:mb-5 mb-3">
              {item.name}
            </div>
            <div className="lg:text-lg text-base text-neutral-400">
              {item.title}
            </div>
          </div>
        ))}
      </div>
      <div className="lg:mb-16 mb-[88px]">
        <Link href={""}>
          <Button name="MORE" />
        </Link>
      </div>
      <div>
        <Footerlink />
      </div>
    </div>
  );
}

export default News;
