import Navbar from "@/components/global/Navbar";
import React from "react";
import Live from "./Live";

function page() {
  return (
    <div className="bg-black-0">
      <Navbar />
      <Live />
    </div>
  );
}

export default page;
