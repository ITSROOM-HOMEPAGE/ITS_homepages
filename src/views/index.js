import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Mainview from "./main/main";
import Pagefooter from "../layouts/pageFooter";
import PageHeader from "../layouts/pageHeader";
import Sidemenubar from "../components/sidemenubar/sideMenubar";
import Aboutview from "./about/about";
import Productview from "./product/product";
import Contentsview from "./contents/contents";
import Contactview from "./contact/contact";

export default function View() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Sidemenubar isScrolled={isScrolled} />
      <PageHeader />
      <Routes>
        <Route path="/" element={<Mainview />} />
        <Route path="/about" element={<Aboutview />} />
        <Route path="/product" element={<Productview />} />
        <Route path="/contents" element={<Contentsview />} />
        <Route path="/contact" element={<Contactview />} />
      </Routes>
      <Pagefooter />
    </div>
  );
}
