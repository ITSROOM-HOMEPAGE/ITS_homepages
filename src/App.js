import { BrowserRouter, Route, Routes } from "react-router-dom";
import View from "./views";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
