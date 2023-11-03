import Footerlink from "@/components/common/Footerlink";
import Link from "next/link";
import React from "react";

const bandMember = [
  {
    pic: "/picture/idle.webp (16).png",
    pics: "",
    name: "Genwie",
    desig: "Dr. / PG",
    twitter: "/picture/Frame.svg",
    fb: "/picture/Frame (1).svg",
    instag: "/picture/Frame (2).svg",
    title:
      "The two most interesting things in his life are probably drums and software engineering. As a drummer sitting on the stage and performing hard is actually a lazy person in private, but in order to be a professional lazy guy, he tries his best to use software thinking on solving every problems, including the big and small matters of life. As a software engineer, the most proud thing so far is to help Sweet John band create this official website. The dream is to build a robot assistant; give it my work, and give me my life.",
  },
  {
    pic: "/picture/idle.webp (17).png",
    name: "Genwie",
    desig: "Dr. / PG",
    twitter: "/picture/Frame.svg",
    fb: "/picture/Frame (1).svg",
    instag: "/picture/Frame (2).svg",
    title:
      "The two most interesting things in his life are probably drums and software engineering. As a drummer sitting on the stage and performing hard is actually a lazy person in private, but in order to be a professional lazy guy, he tries his best to use software thinking on solving every problems, including the big and small matters of life. As a software engineer, the most proud thing so far is to help Sweet John band create this official website. The dream is to build a robot assistant; give it my work, and give me my life.",
  },
  {
    pic: "/picture/idle.webp (18).png",
    name: "Genwie",
    desig: "Dr. / PG",
    twitter: "/picture/Frame.svg",
    fb: "/picture/Frame (1).svg",
    instag: "/picture/Frame (2).svg",
    title:
      "The two most interesting things in his life are probably drums and software engineering. As a drummer sitting on the stage and performing hard is actually a lazy person in private, but in order to be a professional lazy guy, he tries his best to use software thinking on solving every problems, including the big and small matters of life. As a software engineer, the most proud thing so far is to help Sweet John band create this official website. The dream is to build a robot assistant; give it my work, and give me my life.",
  },
  {
    pic: "/picture/idle.webp (19).png",
    name: "Genwie",
    desig: "Dr. / PG",
    twitter: "/picture/Frame.svg",
    fb: "/picture/Frame (1).svg",
    instag: "/picture/Frame (2).svg",
    title:
      "The two most interesting things in his life are probably drums and software engineering. As a drummer sitting on the stage and performing hard is actually a lazy person in private, but in order to be a professional lazy guy, he tries his best to use software thinking on solving every problems, including the big and small matters of life. As a software engineer, the most proud thing so far is to help Sweet John band create this official website. The dream is to build a robot assistant; give it my work, and give me my life.",
  },
];

function Profilefooter() {
  return (
    <div className="container">
      <div className="lg:text-7xl text-28 font-black text-gray-50/90 uppercase lg:mb-[74px] mb-7">
        Band Members
      </div>
      <div className="flex flex-col lg:gap-[138px] gap-16 lg:mb-40 mb-20">
        {bandMember.map((item, index) => (
          <div
            key={index}
            className="flex lg:flex-row flex-col justify-between lg:gap-11 gap-5 lg:even:flex-row-reverse"
          >
            <div className="flex-shrink-0">
              <img className="w-full" src={item.pic} alt="" />
            </div>
            <div className="flex flex-col lg:justify-between gap-4">
              <div>
                <div className="flex justify-between gap-5">
                  <div className="lg:text-[32px] text-xl font-bold text-gray-50 uppercase bottom-3">
                    {item.name}
                  </div>
                  <div className="flex gap-4">
                    <Link href={""}>
                      <img src={item.twitter} alt="" />
                    </Link>
                    <Link href={""}>
                      <img src={item.fb} alt="" />
                    </Link>
                    <Link href={""}>
                      <img src={item.instag} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="text-lg text-neutral-400 mb-4">
                  {item.desig}
                </div>
              </div>
              <div className="lg:text-lg text-base text-neutral-400 relative max-w-[626px lg:ml-7 ml-4 pr-0.5 lg:pr-0 lg:max-w-[616px]">
                {item.title}
                <div className="w-[5px] bg-yellow-400 absolute top-0 bottom-0 lg:-ml-7 -ml-4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footerlink />
    </div>
  );
}

export default Profilefooter;
