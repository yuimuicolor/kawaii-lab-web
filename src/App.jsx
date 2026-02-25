import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";

import HomePage from "./pages/Home/Home"
import ArtistsPage from "./pages/Artists/Artists";
import AuditionPage from "./pages/Audition/Audition";
import NoticePage from "./pages/Notice/Notice";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/artists" element={<ArtistsPage />} />
          <Route path="/audition" element={<AuditionPage />} />
          <Route path="/notice" element={<NoticePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
