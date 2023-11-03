import React from "react";

let johnDetails = [
  "Sweet John, an indie band from Taipei, creates a unique but easy listening POP style based on Math-rock, Jazz, sampling and vivid sound design. They are good at utilizing special math-rock-style catchy hooks in the melody to make an impression on the audience.",
  "Due to their uniqueness, Sweet John were nominated for many awards such as the Best Band Award in Golden Melody Awards (GMA), the best-known music award in the Chinese area, and the Best Rock Single Award in Golden Indie Music Awards (GIMA).",
  "Sweet John now performs mostly in Asia. They were invited to “Big Mountain Music Festival” in Thailand, and “City Roars Festival” in Malaysia. 2021-2022 Tour “Search by a Kiss” sells over 22,000 tickets.",
];

const streming = [
  {
    num: "22M",
    string: "Total Spotify streamings",
  },
  {
    num: "12M",
    string: "Total YouTube streamings",
  },
  {
    num: "22K",
    string: "Highest Sold Tickets",
  },
];

function ProfileHeader() {
  return (
    <div className="container">
      <div className="lg:text-8xl text-4xl font-black uppercase text-gray-50/90 lg:mt-44 mt-12 flex items-center lg:gap-11 gap-4 lg:mb-16 mb-10">
        Profile
        <img
          className="lg:max-h-16 max-h-5 flex-grow"
          src="/picture/Group 1171275213.png"
          alt=""
        />
      </div>
      <div className="lg:mb-20 mb-8">
        <img className="w-full" src="/picture/idle.webp (15).png" alt="" />
      </div>
      <div className="lg:text-7xl text-28 font-black text-gray-50 uppercase lg:mb-11 mb-3.5">
        Sweet John
      </div>
      <div className="flex flex-col gap-5 lg:mb-24 mb-16">
        {johnDetails.map((item) => (
          <div className="lg:text-lg text-base text-neutral-400 lg:max-w-[1056px] pr-2.5 lg:pr-0 font-roboto">
            {item}
          </div>
        ))}
      </div>
      <div className="lg:text-7xl text-28 font-black text-gray-50/90 uppercase lg:mb-9 mb-5">
        Milestones
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-24 gap-11 justify-between lg:py-11 py-14 lg:px-16 lg:mb-24 mb-14">
        {streming.map((item, index) => (
          <div key={index} className="text-center">
            <div className="text-54 font-black text-yellow-400 mb-2">
              {item.num}
            </div>
            <div className="text-base text-gray-50 font-medium uppercase whitespace-nowrap">
              {item.string}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileHeader;
