"use client";
import React, {useState} from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Navlink from "../template/Navlink";
import Link from "next/link";

const linkDetails = [
  {
    linkName: "HOME",
    url: "/",
  },
  {
    linkName: "Profile",
    url: "/profile",
  },
  {
    linkName: "Live",
    url: "/live_section",
  },
  {
    linkName: "News",
    url: "/news_section",
  },
  {
    linkName: "Music videos",
    url: "/music_section",
  },
  {
    linkName: "Biography",
    url: "/biography",
  },
  {
    linkName: "More Links",
    url: "/",
  },
];

function Navbar() {
  const [tab, setTab] = useState(0);
  const [Open, setOpen] = React.useState(false);
  const toggle = () => setOpen((prev) => !prev);
  return (
    <div className="max-w-[1920px] mx-auto px-10">
      <div className="py-7 flex justify-between gap-6 items-center">
        <Link href={"/"}>
          <div className="md:text-4xl text-[32px] font-black text-yellow-400/90 uppercase">
            Sweet john
          </div>
        </Link>
        <div onClick={toggle} className="w-16 cursor-pointer">
          <img src="/picture/menu.png" alt="" />
        </div>
      </div>
      <div className="">
        <Drawer open={Open} onClose={toggle} direction="left">
          <div className="p-4 pt-8 bg-black-0 h-screen flex flex-col justify-between">
            <div>
              <div className="text-2xl font-black text-yellow-400/90 uppercase lg:mb-24 mb-16">
                Sweet john
              </div>
              <div className="flex flex-col lg:gap-10 gap-5">
                {linkDetails.map((item, index) => (
                  <div key={index}>
                    <Link href={item.url}>
                      <Navlink
                        handelClick={() => setTab(index)}
                        isActive={tab === index}
                        name={item.linkName}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-gray-50 text-xs text-center">
              Workaholic Inc., LTD.© 2023. All rights Reserved.
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;
