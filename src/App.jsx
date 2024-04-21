import { useState } from "react";
import "./styles/components/root.scss";
import { AppContainer } from "./styles/components/App.module.scss";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar";
import ContactOptions from "./components/ContactOptions/ ContactOptions";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={AppContainer}>
      <Header />
      <NavBar />
      <main>
        <ContactOptions />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
