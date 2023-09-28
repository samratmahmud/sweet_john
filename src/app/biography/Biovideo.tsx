"use client";
import Yearchange from "@/app/biography/Yearchange";
import React, {useState} from "react";
import ScrollContainer from "react-indiana-drag-scroll";

const yearsChange = [
  {
    name: "2023",
    url: "/",
  },
  {
    name: "2022",
    url: "/",
  },
  {
    name: "2021",
    url: "/",
  },
  {
    name: "2020",
    url: "/",
  },
  {
    name: "2019",
    url: "/",
  },
  {
    name: "2018",
    url: "/",
  },
  {
    name: "2018",
    url: "/",
  },
];

function Biovideo() {
  let [tab, setTab] = useState(0);
  return (
    <div className="container">
      <div className="">
        <div className="lg:text-8xl text-6xl font-black text-gray-50/90 lg:mt-44 my-14 flex items-center lg:gap-11 gap-4 lg:mb-[89px] overflow-hidden uppercase">
          Biography
          <img
            className="lg:max-h-16 max-h-7 flex-grow"
            src="/picture/Group 1171275213.png"
            alt=""
          />
        </div>
        <div className="">
          <div className="mb-10">
            <img className="w-full" src="/picture/idle.webp (20).png" alt="" />
          </div>
          <ScrollContainer className="scroll-container -m-5">
            <div className="flex flex-row justify-between items-center lg:gap-28 gap-16 p-5 lg:mb-20 mb-24">
              {yearsChange.map((item, index) => (
                <Yearchange
                  key={index}
                  handelClick={() => setTab(index)}
                  isActive={tab === index}
                  name={item.name}
                />
              ))}
            </div>
          </ScrollContainer>
        </div>
      </div>
    </div>
  );
}

export default Biovideo;
