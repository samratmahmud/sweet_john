import React from "react";

interface changing {
  name: string;
  isActive?: boolean;
  handelClick?: () => void;
}

function Yearchange(props: changing) {
  let {name, isActive, handelClick} = props;
  return (
    <div onClick={handelClick}>
      <div
        className={`${
          isActive
            ? "text-4xl text-black-0 font-black uppercase py-10 px-4 bg-yellow-400 rounded-full ring-0 ring-offset-[20px] ring-offset-[rgba(255,_193,_48,_0.48)]"
            : "text-base text-yellow-400 font-black uppercase py-[22px] px-4 rounded-full border-[3px] border-yellow-400 inline-block"
        }`}
      >
        {name}
      </div>
    </div>
  );
}

export default Yearchange;
