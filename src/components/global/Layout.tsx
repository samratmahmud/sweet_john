import React, {ReactNode} from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

function Layout(props: LayoutProps) {
  const {children} = props;
  return (
    <div className="bg-black-0">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
