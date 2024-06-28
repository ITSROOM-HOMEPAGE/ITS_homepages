import { BrowserRouter, Route, Routes } from "react-router-dom";
import View from "./views";

export default function App() {
  return (
    <html>
      <div className="App scroll-smooth">
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<View />} />
          </Routes>
        </BrowserRouter>
      </div>
    </html>
  );
}
