import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Logement from "../Logement/Logement";
import ErrorPage from "../ErrorPage/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="logement/:id" element={<Logement />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
