import Link from "next/link";
import React from "react";

function Footerlink() {
  return (
    <div className="text-xs text-gray-50 text-center md:py-6 py-3.5 bg-[rgba(255,_255,_255,_0.12)]">
      {" "}
      <span className="underline">
        <Link href="">Workaholic Inc., LTD.</Link>
      </span>
      © 2023. All rights Reserved.
    </div>
  );
}

export default Footerlink;
