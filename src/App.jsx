import { useState } from "react";
import "./styles/components/root.scss";
import { AppContainer } from "./styles/components/App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ContactPage from "./components/ContactPage/ContactPage";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={AppContainer}>
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route path="/" element={<HomePage menuOpen={menuOpen} />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
