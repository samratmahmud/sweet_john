import React from "react";

interface nameProps {
  name: string;
}

function Button(props: nameProps) {
  return (
    <div>
      <div className="text-sm text-gray-50 text-center border border-gray-50 py-3 px-16 uppercase">
        {props.name}
      </div>
    </div>
  );
}

export default Button;
