import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layout/Root";

import Home from "./pages/home";
import Filme from "./pages/Filme";
import Error from "./pages/Error";
import Favoritos from "./pages/Favoritos";

export default function RoutesConfig() {
  return (
    <div>
      <BrowserRouter>
        <RootLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filme/:id" element={<Filme />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </RootLayout>
      </BrowserRouter>
    </div>
  );
}
