import Navbar from "@/components/global/Navbar";
import React from "react";
import Biovideo from "./Biovideo";
import YearsBody from "@/components/template/YearsBody";
import Footerlink from "@/components/common/Footerlink";

function page() {
  return (
    <div>
      <Biovideo />
      <YearsBody />
      <Footerlink />
    </div>
  );
}

export default page;
