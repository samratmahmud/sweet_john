"use client";
import Footerlink from "@/components/common/Footerlink";
import Yearchange from "@/components/template/Yearchange";
import YearsBody from "@/components/template/YearsBody";
import Link from "next/link";
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
      <div className="lg:text-8xl text-6xl font-black text-gray-50/90 lg:mt-44 mt-16 flex items-center lg:gap-11 gap-4 lg:mb-[89px] mb-16 overflow-hidden uppercase">
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
        <ScrollContainer className="scroll-container">
          <div className="flex flex-row justify-between items-center gap-28 px-5 py-5">
            {yearsChange.map((item, index) => (
              <div key={index} className="">
                <Link href={item.url}>
                  <Yearchange
                    handelClick={() => setTab(index)}
                    isActive={tab === index}
                    name={item.name}
                  />
                </Link>
              </div>
            ))}
          </div>
        </ScrollContainer>
      </div>
    </div>
  );
}

export default Biovideo;
