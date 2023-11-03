import React from "react";

let awards = [
  {
    pic: "/picture/fi_744970.svg",
    mobileV: "/picture/fi_744970 (1).svg",
    title:
      "“Search by a Kiss” - BERLIN INDIE FILM FESTIVAL 2022 [BEST MUSIC VIDEO]",
  },
  {
    pic: "/picture/fi_744970.svg",
    mobileV: "/picture/fi_744970 (1).svg",
    title: "Golden Melody Award (GMA) for Best Band",
  },
  {
    pic: "/picture/fi_744970.svg",
    mobileV: "/picture/fi_744970 (1).svg",
    title: "Golden Indie Music Awards for Best Rock Single “Missing You”",
  },
  {
    pic: "/picture/fi_744970.svg",
    mobileV: "/picture/fi_744970 (1).svg",
    title: "Chinese Music Media Awards for Best New Group/Band",
  },
  {
    pic: "/picture/fi_744970.svg",
    mobileV: "/picture/fi_744970 (1).svg",
    title:
      "“Sundial” - Sandplay (Short Film) Ending Theme/Song Formosa Festival of International Filmmaker Awards for Best Original Song- Sandplay (Short Film)",
  },
];

function Awards() {
  return (
    <section className="container">
      <div className="lg:text-7xl text-28 font-black text-gray-50/90 uppercase lg:mb-9 mb-5">
        Awards
      </div>
      <div className="grid md:grid-cols-2 gap-4 lg:mb-24 mb-14">
        {awards.map((item, index) => (
          <div
            key={index}
            className={`flex lg:items-center gap-4 lg:py-11 py-7 lg:px-11 px-5 ${
              index % 2 === 1 ? "" : "md:last:col-span-2"
            }`}
          >
            <div className="flex-shrink-0">
              <img className="lg:hidden" src={item.mobileV} alt="" />
              <img className="hidden lg:block" src={item.pic} alt="" />
            </div>
            <div className="lg:text-base text-xs font-medium text-gray-50 uppercase">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Awards;
