import Link from "next/link";
import React from "react";

function Footerlink() {
  return (
    <div className="text-xs text-gray-50 text-center py-6">
      {" "}
      <span className="underline">
        <Link href={""}>Workaholic Inc., LTD.</Link>
      </span>
      © 2023. All rights Reserved.
    </div>
  );
}

export default Footerlink;
