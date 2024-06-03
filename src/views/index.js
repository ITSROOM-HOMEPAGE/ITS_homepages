import { Route, Routes } from "react-router-dom";
import MainPage from "./main/main";
import PageHeader from "../layouts/pageHeader";
import Pagefooter from "../layouts/pageFooter";
import { FloatButton } from "antd";

export default function View() {
  return (
    <div>
      <PageHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <FloatButton.BackTop />
      <Pagefooter />
    </div>
  );
}
