import Footer from "@/sections/footer/footer";
import Landing from "@/sections/landing/landing";
import WhatWeDo from "@/sections/what_we_do/wwd";
import Projects from "@/sections/projects/projects";
import AboutUs from "@/sections/about_us/AboutUs";
import WhyUs from "@/sections/why_us/WhyUs";
import ContactUs from "@/sections/contact_us/ContactUs";

export default function Home() {
  return (
    <div className="page">
      <Landing />
      <AboutUs />
      <WhatWeDo />
      <WhyUs />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  );
}
