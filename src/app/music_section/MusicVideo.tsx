import Button from "@/components/common/Button";
import Footerlink from "@/components/common/Footerlink";
import Link from "next/link";
import React from "react";

let videoProps = [
  {
    pic: "/picture/idle.webp.png",
    date: "2023.08.13 [SUNDAY] ",
    name: `"Accidentally Falling in Love with You" is online on all platforms!`,
    learn: "LEARN MORE",
    tirIcon: "/picture/61640e219659e5ca92a1a36a_Feature20arrow.svg.svg",
  },
  {
    pic: "/picture/idle.webp (1).png",
    date: "2023.08.13 [SUNDAY] ",
    name: `"Accidentally Falling in Love with You" is online on all platforms!`,
    learn: "LEARN MORE",
    tirIcon: "/picture/61640e219659e5ca92a1a36a_Feature20arrow.svg.svg",
  },
  {
    pic: "/picture/idle.webp (2).png",
    date: "2023.08.13 [SUNDAY] ",
    name: `"Accidentally Falling in Love with You" is online on all platforms!`,
    learn: "LEARN MORE",
    tirIcon: "/picture/61640e219659e5ca92a1a36a_Feature20arrow.svg.svg",
  },
  {
    pic: "/picture/idle.webp (3).png",
    date: "2023.08.13 [SUNDAY] ",
    name: `"Accidentally Falling in Love with You" is online on all platforms!`,
    learn: "LEARN MORE",
    tirIcon: "/picture/61640e219659e5ca92a1a36a_Feature20arrow.svg.svg",
  },
  {
    pic: "/picture/idle.webp (4).png",
    date: "2023.08.13 [SUNDAY] ",
    name: `"Accidentally Falling in Love with You" is online on all platforms!`,
    learn: "LEARN MORE",
    tirIcon: "/picture/61640e219659e5ca92a1a36a_Feature20arrow.svg.svg",
  },
  {
    pic: "/picture/idle.webp (5).png",
    date: "2023.08.13 [SUNDAY] ",
    name: `"Accidentally Falling in Love with You" is online on all platforms!`,
    learn: "LEARN MORE",
    tirIcon: "/picture/61640e219659e5ca92a1a36a_Feature20arrow.svg.svg",
  },
  {
    pic: "/picture/idle.webp (6).png",
    date: "2023.08.13 [SUNDAY] ",
    name: `"Accidentally Falling in Love with You" is online on all platforms!`,
    learn: "LEARN MORE",
    tirIcon: "/picture/61640e219659e5ca92a1a36a_Feature20arrow.svg.svg",
  },
  {
    pic: "/picture/idle.webp (7).png",
    date: "2023.08.13 [SUNDAY] ",
    name: `"Accidentally Falling in Love with You" is online on all platforms!`,
    learn: "LEARN MORE",
    tirIcon: "/picture/61640e219659e5ca92a1a36a_Feature20arrow.svg.svg",
  },
  {
    pic: "/picture/idle.webp (8).png",
    date: "2023.08.13 [SUNDAY] ",
    name: `"Accidentally Falling in Love with You" is online on all platforms!`,
    learn: "LEARN MORE",
    tirIcon: "/picture/61640e219659e5ca92a1a36a_Feature20arrow.svg.svg",
  },
];

function MusicVideo() {
  return (
    <div className="container">
      <div className="lg:mt-44 mt-16 flex items-center lg:gap-10 gap-4 lg:mb-[106px] mb-10">
        <div className="lg:text-8xl text-6xl font-black text-gray-50">MV</div>
        <img
          className="lg:max-h-16 max-h-6 flex-grow"
          src="/picture/Group 1171275213.png"
          alt=""
        />
      </div>
      <div className="grid lg:grid-cols-3 gap-12 lg:mb-24 mb-12">
        {videoProps.map((item, index) => (
          <div key={index} className="">
            <div className="mb-6">
              <img className="w-full" src={item.pic} alt="" />
            </div>
            <div className="lg:text-xs text-md text text-neutral-400 mb-3">
              {item.date}
            </div>
            <div className="lg:text-lg text-[24px] font-bold text-gray-50 mb-6">
              {item.name}
            </div>
            <div className="inline-block">
              <Link href={""} className="flex items-center gap-2">
                <div className="lg:text-sm text-base font-medium text-yellow-400">
                  {item.learn}
                </div>
                <div>
                  <img src={item.tirIcon} alt="" />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:mb-32 mb-[60px]">
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

export default MusicVideo;
