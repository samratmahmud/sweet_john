import Navbar from "@/components/global/Navbar";
import React from "react";
import Profileheader from "./Profileheader";
import Profilefooter from "./Profilefooter";

function page() {
  return (
    <div className="bg-black-0">
      <Navbar />
      <Profileheader />
      <Profilefooter />
    </div>
  );
}

export default page;
