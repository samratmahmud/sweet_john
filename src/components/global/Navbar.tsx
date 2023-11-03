"use client";
import React, {useState} from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Navlink from "../template/Navlink";
import Link from "next/link";
import {usePathname} from "next/navigation";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

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
    url: "",
  },
];

function Navbar() {
  const [Open, setOpen] = React.useState(false);
  const toggle = () => setOpen((prev) => !prev);
  const pathn = usePathname();

  return (
    <div className="max-w-[1920px] mx-auto px-10">
      <div className="py-7 flex justify-between gap-6 items-center">
        <Link href={"/"}>
          <div className="lg:text-4xl text-[32px] font-black text-yellow-400/90 uppercase">
            Sweet john
          </div>
        </Link>
        <div onClick={toggle} className="h-6 cursor-pointer">
          <img src="/picture/div.header__humb.svg" alt="" />
        </div>
      </div>
      <div className="">
        <Drawer
          style={{width: "100vw", height: "100vh"}}
          open={Open}
          onClose={toggle}
          direction="left"
        >
          <SimpleBar style={{maxHeight: "100vh"}}>
            <div className="relative">
              <img
                className="absolute top-0 bottom-0 left-1/2 opacity-50 lg:opacity-50 -translate-x-full lg:left-0 pl-7 h-full -z-10"
                src="/picture/Sweet johns.svg"
                alt=""
              />
              <div className="p-4 pt-24 pb-28 bg-black-0 min-h-screen">
                <div
                  className="absolute lg:right-20 right-8 top-8"
                  role="button"
                  onClick={toggle}
                >
                  <img src="/picture/Frame (3).svg" alt="" />
                </div>
                <div className="lg:w-1/2 px-14 mx-auto">
                  <div className="flex flex-col lg:gap-16 gap-12 mb-20">
                    {linkDetails.map((item, index) => {
                      return (
                        <div onClick={toggle} key={index}>
                          <Link href={item.url}>
                            <Navlink
                              isActive={item.url === pathn}
                              name={item.linkName}
                            />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                  <div onClick={toggle} className="flex lg:gap-12 gap-10">
                    <Link href={"https://twitter.com/"}>
                      <img
                        className="max-w-[54px] lg:max-w-none"
                        src="/picture/Frame (4).svg"
                        alt=""
                      />
                    </Link>
                    <Link href={"https://www.facebook.com/"}>
                      <img
                        className="max-w-[54px] lg:max-w-none"
                        src="/picture/Frame (5).svg"
                        alt=""
                      />
                    </Link>
                    <Link href={"https://www.instagram.com/"}>
                      <img
                        className="max-w-[54px] lg:max-w-none"
                        src="/picture/Frame (6).svg"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SimpleBar>
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;
