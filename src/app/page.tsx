import AboutUs from "@/sections/about_us/AboutUs";
import Footer from "@/sections/footer/footer";
import Landing from "@/sections/landing/landing";
import WhatWeDo from "@/sections/what_we_do/wwd";
import WhyUs from "@/sections/why_us/WhyUs";

export default function Home() {
  return (
    <div className="page">
      <Landing />
      <AboutUs/>
      <WhatWeDo />
      <WhyUs/>
      <Footer />
    </div>
  );
}
