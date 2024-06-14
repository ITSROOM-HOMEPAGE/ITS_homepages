import { Route, Routes } from "react-router-dom";
import MainPage from "./main/main";
import Pagefooter from "../layouts/pageFooter";
import PageHeader from "../layouts/pageHeader";
import Sidemenubar from "../components/sidemenubar/sideMenubar";
import { useEffect, useState } from "react";

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
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<MainPage />} />
        <Route path="/product" element={<MainPage />} />
        <Route path="/contents" element={<MainPage />} />
        <Route path="/contact" element={<MainPage />} />
      </Routes>
      <Pagefooter />
    </div>
  );
}
