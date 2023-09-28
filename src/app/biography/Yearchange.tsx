import React from "react";

interface changing {
  name: string;
  isActive?: boolean;
  handelClick?: () => void;
}

function Yearchange(props: changing) {
  let {name, isActive, handelClick} = props;

  return (
    <div role="button" onClick={handelClick} className="pr-3 lg:pl-0">
      <div
        className={`${
          isActive
            ? "lg:text-4xl text-lg text-black-0 font-black uppercase lg:py-10 py-5 lg:px-4 px-2.5 bg-yellow-400 rounded-full outline lg:outline-[20px] outline-[12px] outline-[#FFC130]/30"
            : "lg:text-base text-xs text-yellow-400 font-black uppercase lg:py-[22px] py-3.5 lg:px-4 px-2 rounded-full border-[3px] border-yellow-400 inline-block"
        }`}
      >
        {name}
      </div>
    </div>
  );
}

export default Yearchange;
