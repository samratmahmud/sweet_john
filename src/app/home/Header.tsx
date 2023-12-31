import Button from "@/components/common/Button";
import Link from "next/link";
import {features} from "process";
import React from "react";

const newsLive = [
  {
    name: "NEWS",
    thumbneil: "/picture/Group 1171275213.png",
    items: [
      {
        date: "2023.08.13 [SUNDAY] ",
        new: "NEW",
        title: `Sweet John's new album "In Mind" digital platform online.`,
        contain:
          "Last night, 600 people were online at the same time when it premiered late at night (touched) Can everyone sing after listening to it?",
        learn: "LEARN MORE",
        pic: "/picture/61640e219659e5ca92a1a36a_Feature20arrow.svg.svg",
      },
      {
        date: "2023.08.13 [SUNDAY] ",
        title: `🧡《In Mind》album pre-order starts🧡`,
        contain: `Sweet John's third full creative album, "In Mind" pre-orders are officially launched!`,
        learn: "LEARN MORE",
        pic: "/picture/61640e219659e5ca92a1a36a_Feature20arrow.svg.svg",
      },
      {
        date: "2023.08.13 [SUNDAY] ",
        title: `"Accidentally Falling in Love with You" is online on all platforms!`,
        contain: `Last night, 600 people were online at the same time when it premiered late at night (touched) Can everyone sing after listening to it?`,
        learn: "LEARN MORE",
        pic: "/picture/61640e219659e5ca92a1a36a_Feature20arrow.svg.svg",
      },
    ],
    button: "",
  },
  {
    name: "LIVE",
    thumbneil: "/picture/Group 1171275213.png",
    items: [
      {
        date: "2023.08.13 [SUNDAY] ",
        title: `Sweet John Concert 2023 Live in Hong Kong`,
        contain:
          "Concert Details* Sweet John Concert 2023｜Sweet John Live in Hong Kong * Date: April 27-28, 2023 * Time: 20:00 * Venue:",
        learn: "LEARN MORE",
        pic: "/picture/61640e219659e5ca92a1a36a_Feature20arrow.svg.svg",
      },
      {
        date: "2023.08.13 [SUNDAY] ",
        title: `2022 Takao Rock Dog Beating Festival`,
        contain: `Sweet John's third full creative album, "In Mind" pre-orders are officially launched!`,
        learn: "LEARN MORE",
        pic: "/picture/61640e219659e5ca92a1a36a_Feature20arrow.svg.svg",
      },
      {
        date: "2023.08.13 [SUNDAY] ",
        title: `Hehuo OUT Music Festival CHILL OUT FESTIVAL`,
        contain: `Hehuo OUT Music Festival CHILL OUT FESTIVAL`,
        learn: "LEARN MORE",
        pic: "/picture/61640e219659e5ca92a1a36a_Feature20arrow.svg.svg",
      },
    ],
    button: "",
  },
];

function Header() {
  return (
    <section>
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
          <div className="lg:text-3xl text-xl text-gray-50 font-medium uppercase text-center lg:mb-12 mb-8 font-roboto">
            i n d i e b a n d from Taiwano|
          </div>
          <div className="border border-gray-50 py-3 text-center m-auto block max-w-[200px] lg:mb-12 mb-11">
            <Link href={""}>
              <button className="text-sm text-gray-50 font-roboto">
                VIEW PROFILE
              </button>
            </Link>
          </div>
          <div className="text-md font-semibold text-yellow-400 text-center mb-3 font-roboto">
            SCROLL DOWN
          </div>
          <div className="w-[1px] min-h-[49px] bg-gray-50 text-center m-auto lg:mb-40 mb-16"></div>
          <div className="lg:flex justify-between grid lg:gap-[132px] gap-16 lg:mb-44 mb-24">
            {newsLive.map((item, index) => (
              <div key={index} className="overflow-hidden">
                <div className="flex gap-5 items-center lg:mb-12 mb-7">
                  <div className="lg:text-7xl text-6xl font-black text-gray-50/90 uppercase">
                    {item.name}
                  </div>
                  <img
                    className="lg:max-h-9 max-h-[30px] flex-grow"
                    src={item.thumbneil}
                    alt=""
                  />
                </div>
                <div className="mb-12">
                  {item.items.map((feature, index) => (
                    <div key={index} className="group">
                      <div className="text-xs text-neutral-400 mb-1.5">
                        {feature.date}
                      </div>
                      <div className="lg:text-lg text-xl font-bold text-gray-50 mb-3">
                        {feature.title}
                      </div>
                      <div className="lg:text-xs text-base text-neutral-400 mb-4 font-roboto">
                        {feature.contain}
                      </div>
                      <div className="inline-block">
                        <Link
                          href={""}
                          className="flex gap-2 items-center mb-5"
                        >
                          <div className="lg:text-sm text-base font-medium text-yellow-400">
                            {feature.learn}
                          </div>
                          <div>
                            <img src={feature.pic} alt="" />
                          </div>
                        </Link>
                      </div>
                      <hr className="w-full h-[1px] bg-[rgba(255,_255,_255,_0.12)] mb-6 group-last:hidden" />
                    </div>
                  ))}
                </div>
                <Link href={item.button}>
                  <Button name="MORE" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
