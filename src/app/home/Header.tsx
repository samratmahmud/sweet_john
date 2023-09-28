import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";

let news = [
  {
    date: "2023.08.13 [SUNDAY] ",
    new: "NEW",
    name: `Sweet John's new album "In Mind" digital platform online.`,
    title:
      "Last night, 600 people were online at the same time when it premiered late at night (touched) Can everyone sing after listening to it?",
    learn: "LEARN MORE",
    pic: "/picture/61640e219659e5ca92a1a36a_Feature20arrow.svg.svg",
  },
  {
    date: "2023.08.13 [SUNDAY] ",
    name: `🧡《In Mind》album pre-order starts🧡`,
    title: `Sweet John's third full creative album, "In Mind" pre-orders are officially launched!`,
    learn: "LEARN MORE",
    pic: "/picture/61640e219659e5ca92a1a36a_Feature20arrow.svg.svg",
  },
  {
    date: "2023.08.13 [SUNDAY] ",
    name: `"Accidentally Falling in Love with You" is online on all platforms!`,
    title: `Last night, 600 people were online at the same time when it premiered late at night (touched) Can everyone sing after listening to it?`,
    learn: "LEARN MORE",
    pic: "/picture/61640e219659e5ca92a1a36a_Feature20arrow.svg.svg",
  },
];
let Live = [
  {
    date: "2023.08.13 [SUNDAY] ",
    name: `Sweet John Concert 2023 Live in Hong Kong`,
    title:
      "Concert Details* Sweet John Concert 2023｜Sweet John Live in Hong Kong * Date: April 27-28, 2023 * Time: 20:00 * Venue:",
    learn: "LEARN MORE",
    pic: "/picture/61640e219659e5ca92a1a36a_Feature20arrow.svg.svg",
  },
  {
    date: "2023.08.13 [SUNDAY] ",
    name: `2022 Takao Rock Dog Beating Festival`,
    title: `Sweet John's third full creative album, "In Mind" pre-orders are officially launched!`,
    learn: "LEARN MORE",
    pic: "/picture/61640e219659e5ca92a1a36a_Feature20arrow.svg.svg",
  },
  {
    date: "2023.08.13 [SUNDAY] ",
    name: `Hehuo OUT Music Festival CHILL OUT FESTIVAL`,
    title: `Hehuo OUT Music Festival CHILL OUT FESTIVAL`,
    learn: "LEARN MORE",
    pic: "/picture/61640e219659e5ca92a1a36a_Feature20arrow.svg.svg",
  },
];

function Header() {
  return (
    <div>
      <div className="overflow-hidden lg:mt-44 mt-12">
        <div className="lg:mb-11 mb-10 px-10 flex justify-center">
          <div className="xl:text-10xl lg:text-[150px] text-8xl text-yellow-400 flex items-center font-black relative uppercase text-center">
            <img
              className="xl:h-[75px] lg:h-14 h-11 w-screen max-w-none absolute -left-[calc(100vw+40px)] translate-y-3"
              src="/picture/Group 1171275235.png"
              alt=""
            />
            Sweet john
            <img
              className="xl:h-[75px] lg:h-14 h-11 w-screen max-w-none absolute -right-[calc(100vw+40px)] translate-y-3"
              src="/picture/Group 1171275235.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <div className="lg:text-3xl text-xl text-gray-50 font-medium uppercase text-center lg:mb-12 mb-8">
            i n d i e b a n d from Taiwano|
          </div>
          <div className="border border-gray-50 py-3 text-center m-auto block max-w-[200px] lg:mb-12 mb-11">
            <Link href={""}>
              <button className="text-sm text-gray-50">VIEW PROFILE</button>
            </Link>
          </div>
          <div className="text-md font-semibold text-yellow-400 text-center mb-3">
            SCROLL DOWN
          </div>
          <div className="w-[1px] min-h-[49px] bg-gray-50 text-center m-auto lg:mb-40 mb-16"></div>
          <div className="lg:flex justify-between grid lg:gap-[132px] gap-16 lg:mb-44 mb-24">
            <div className="overflow-hidden">
              <div className="flex gap-5 items-center lg:mb-12 mb-7">
                <div className="lg:text-7xl text-6xl font-black text-gray-50/90">
                  NEWS
                </div>
                <img
                  className="lg:max-h-9 max-h-[30px] flex-grow"
                  src="/picture/Group 1171275213.png"
                  alt=""
                />
              </div>
              <div className="mb-12">
                {news.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex gap-1 mb-1.5">
                      <div className="text-xs text-neutral-400">
                        {item.date}
                      </div>
                      <div className="text-xs italic text-black-0 bg-yellow-400 max-w-[38px]">
                        {item.new}
                      </div>
                    </div>
                    <div className="lg:text-lg text-xl font-bold text-gray-50 mb-3">
                      {item.name}
                    </div>
                    <div className="lg:text-xs text-base text-neutral-400 mb-4">
                      {item.title}
                    </div>
                    <div className="inline-block">
                      <Link href={""} className="flex gap-2 items-center mb-5">
                        <div className="lg:text-sm text-base font-medium text-yellow-400">
                          {item.learn}
                        </div>
                        <div>
                          <img src={item.pic} alt="" />
                        </div>
                      </Link>
                    </div>
                    <hr className="w-full h-[1px] bg-[rgba(255,_255,_255,_0.12)] mb-6 group-last:hidden" />
                  </div>
                ))}
              </div>
              <div>
                <Link href={""}>
                  <Button name="MORE" />
                </Link>
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="flex gap-5 items-center lg:mb-12 mb-7">
                <div className="lg:text-7xl text-6xl font-black text-gray-50/90 uppercase">
                  LIVE
                </div>
                <img
                  className="lg:max-h-9 max-h-[30px] flex-grow"
                  src="/picture/Group 1171275213.png"
                  alt=""
                />
              </div>
              <div className="mb-12">
                {Live.map((item, index) => (
                  <div key={index} className="group">
                    <div className="text-xs text-neutral-400 mb-1.5">
                      {item.date}
                    </div>
                    <div className="lg:text-lg text-xl font-bold text-gray-50 mb-3">
                      {item.name}
                    </div>
                    <div className="lg:text-xs text-base text-neutral-400 mb-4">
                      {item.title}
                    </div>
                    <div className="inline-block">
                      <Link href={""} className="flex gap-2 items-center mb-5">
                        <div className="lg:text-sm text-base font-medium text-yellow-400">
                          {item.learn}
                        </div>
                        <div>
                          <img src={item.pic} alt="" />
                        </div>
                      </Link>
                    </div>
                    <hr className="w-full h-[1px] bg-[rgba(255,_255,_255,_0.12)] mb-6 group-last:hidden" />
                  </div>
                ))}
              </div>
              <div>
                <Link href={""}>
                  <Button name="MORE" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
