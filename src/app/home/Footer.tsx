import Button from "@/components/common/Button";
import Footerlink from "@/components/common/Footerlink";
import Link from "next/link";
import {features} from "process";
import React from "react";

const music = [
  {
    pic: "/picture/Group 1171275224.png",
    name: "Spark Fades when it's easy to get bored | Official Music Video",
    items: [
      {
        leftSide: "MUSIC",
        dot: ":",
        rightSide: "Sweet John",
      },
      {
        leftSide: "VOCAL",
        dot: ":",
        rightSide: "ikura",
      },
      {
        leftSide: "NOVEL",
        dot: ":",
        rightSide: "Akasaka Aka",
      },
      {
        leftSide: "VIDEO",
        dot: ":",
        rightSide: "Naoya Nakamura",
      },
    ],
  },
  {
    pic: "/picture/div.song__pic-img.png",
    name: "Spark Fades when it's easy to get bored | Official Music Video",
    items: [
      {
        leftSide: "MUSIC",
        dot: ":",
        rightSide: "Sweet John",
      },
      {
        leftSide: "VOCAL",
        dot: ":",
        rightSide: "ikura",
      },
      {
        leftSide: "NOVEL",
        dot: ":",
        rightSide: "Akasaka Aka",
      },
      {
        leftSide: "VIDEO",
        dot: ":",
        rightSide: "Naoya Nakamura",
      },
    ],
  },
  {
    pic: "/picture/div.song__pic-img (1).png",
    name: "Spark Fades when it's easy to get bored | Official Music Video",
    items: [
      {
        leftSide: "MUSIC",
        dot: ":",
        rightSide: "Sweet John",
      },
      {
        leftSide: "VOCAL",
        dot: ":",
        rightSide: "ikura",
      },
      {
        leftSide: "NOVEL",
        dot: ":",
        rightSide: "Akasaka Aka",
      },
      {
        leftSide: "VIDEO",
        dot: ":",
        rightSide: "Naoya Nakamura",
      },
    ],
  },
];

function Footer() {
  return (
    <section>
      <div className="container">
        <div className="flex items-center lg:gap-20 gap-2 mb-14 overflow-hidden">
          <div className="lg:text-7xl text-6xl font-black text-gray-50/90 uppercase flex-shrink-0 sp">
            Music Videos
          </div>
          <img
            className="lg:max-h-9 max-h-[30px] flex-grow"
            src="/picture/Group 1171275213.png"
            alt=""
          />
        </div>
        <div className="lg:flex justify-between grid gap-12 lg:mb-[60px] mb-10">
          {music.map((item, index) => (
            <div key={index}>
              <div className="mb-6 cursor-pointer">
                <img className="w-screen" src={item.pic} alt="" />
              </div>
              <div className="text-lg text-gray-50 font-bold max-w-[324px] mb-4">
                {item.name}
              </div>
              <div>
                {item.items?.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="text-md text-gray-50 uppercase min-w-[49px]">
                      {feature.leftSide}
                    </div>
                    <div className="text-gray-50 ml-5">{feature.dot}</div>
                    <div className="text-md text-gray-50">
                      {feature.rightSide}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="lg:mb-32 mb-20">
          <Link href={""}>
            <Button name="MORE" />
          </Link>
        </div>
      </div>
      <Footerlink />
    </section>
  );
}

export default Footer;
