import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Navbar from "./parts/Navbar";
import Contactbar from "./parts/Contactbar";
import Home from "./pages/Home";
import About from "./pages/About";

function AppContent() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {location.pathname === "/" && <Contactbar />}
    </>
  );
}

const App = () => {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#1C2637" }}>
      <Router>
        <AppContent />
      </Router>
    </main>
  );
};

export default App;