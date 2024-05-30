import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./views/main";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
