import React from "react";
import Awards from "./Awards";
import BandMembers from "./BandMembers";
import ProfileHeader from "./ProfileHeader";

function page() {
  return (
    <div>
      <ProfileHeader />
      <Awards />
      <BandMembers />
    </div>
  );
}

export default page;
