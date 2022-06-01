import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Homepage";
import About from "./pages/About";
import Projelerimiz from "./pages/Projects";
import CatProkast from "./pages/CatProkast";
import Proalci from "./pages/Proalci";
import Propiyer from "./pages/Propiyer";
import Iletisim from "./pages/Contact";
import Prokast from "./pages/Prokast";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="Projelerimiz" element={<Projelerimiz />} />
          <Route path="Hakkimizda" element={<About />} />
          <Route path="CatProkast" element={<CatProkast />} />
          <Route path="Proalci" element={<Proalci />} />
          <Route path="Propiyer" element={<Propiyer />} />
          <Route path="Prokast" element={<Prokast />} />
          <Route path="Iletisim" element={<Iletisim />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// git init
// git add .
// git status
// git commit -m 'first commit'
// git branch -M main
// git remote add origin https://github.com/your-project-directly-link */
// git push
// git push --set-upstream origin main
