import AboutUs from "@/sections/about_us/AboutUs";
import Landing from "@/sections/landing/landing";
import WhatWeDo from "@/sections/what_we_do/wwd";

export default function Home() {
  return (
    <div className="page">
      <Landing />
      <AboutUs/>
      <WhatWeDo />
    </div>
  );
}
