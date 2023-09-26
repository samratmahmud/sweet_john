import Navbar from "@/components/global/Navbar";
import React from "react";
import News from "./News";

function page() {
  return (
    <div className="bg-black-0">
      <Navbar />
      <News />
    </div>
  );
}

export default page;
