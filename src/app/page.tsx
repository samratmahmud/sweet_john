import Navbar from "@/components/global/Navbar";
import Image from "next/image";
import Header from "./home/Header";
import Footer from "./home/Footer";

export default function Home() {
  return (
    <div className="bg-black-0">
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}
