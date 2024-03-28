// j'importe mes 3 composants pour pouvoir les appeler dans mes routes
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Logement from "../Logement/Logement";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import "./app.scss";

function App() {
  return (
    //Schema type pour gérer des navigation d'une page à une autre
    // le header une seule fois au dessus des routes permet de se répéter sur chaque page
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="logement/:id" element={<Logement />} />
        {/* Route pour gérer les routes non trouvées */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
