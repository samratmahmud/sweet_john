import React, {ReactNode} from "react";

interface linkAll {
  name: string;
  isActive?: boolean;
  handelClick?: () => void;
}

function Navlink(props: linkAll) {
  let {name, isActive, handelClick} = props;
  return (
    <div onClick={handelClick}>
      <div
        className={`md:text-[32px] text-base uppercase ${
          isActive ? "text-yellow-400/90" : "text-gray-50/90"
        }`}
      >
        {name}
      </div>
    </div>
  );
}

export default Navlink;
