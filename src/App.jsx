import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;