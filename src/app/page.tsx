import Footer from "@/sections/footer/footer";
import Landing from "@/sections/landing/landing";
import WhatWeDo from "@/sections/what_we_do/wwd";

export default function Home() {
  return (
    <div className="page">
      <Landing />
      <WhatWeDo />
      <Footer />
    </div>
  );
}
