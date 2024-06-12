import { Route, Routes } from "react-router-dom";
import MainPage from "./main/main";
import Pagefooter from "../layouts/pageFooter";
import PageHeader from "../layouts/pageHeader";
import Sidemenubar from "../components/sidemenubar/sideMenubar";

export default function View() {
  return (
    <div>
      <Sidemenubar />
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
