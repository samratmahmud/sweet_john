import React, {ReactNode} from "react";

interface linkAll {
  name: string;
  isActive?: boolean;
}

function Navlink(props: linkAll) {
  let {name, isActive} = props;
  return (
    <div className="flex items-center lg:gap-10 gap-6">
      <div
        className={`lg:text-7xl text-34 uppercase ${
          isActive ? "text-yellow-400/90" : "text-gray-50/90"
        }`}
      >
        {name}
      </div>
      {isActive && (
        <hr className="flex-grow border-yellow-400 border-t-[3px]" />
      )}
    </div>
  );
}

export default Navlink;
