import React from "react";
import Profileheader from "./Profileheader";
import Profilefooter from "./Profilefooter";
import Awards from "./Awards";

function page() {
  return (
    <div>
      <Profileheader />
      <Awards />
      <Profilefooter />
    </div>
  );
}

export default page;
