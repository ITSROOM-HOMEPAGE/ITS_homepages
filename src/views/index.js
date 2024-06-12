import { Route, Routes } from "react-router-dom";
import MainPage from "./main/main";
import PageHeader from "../layouts/pageHeader";
import Pagefooter from "../layouts/pageFooter";

export default function View() {
  return (
    <div>
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
