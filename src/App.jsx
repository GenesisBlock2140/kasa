import "./app.scss";
import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Error from "./pages/Error/Error.jsx";
import About from "./pages/About/About.jsx";
import Home from "./pages/Home/Home.jsx";
import Rent from "./pages/Rent/Rent.jsx";

function App() {

  return (
    <>
      <Router>
        <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/rent/:id" element={<Rent />} />
          <Route path="*" element={<Error />} />
        </Routes>
        </main>
      </Router>
      <Footer />
    </>
  );
}

export default App;

// changer le router
// sortir footer router
