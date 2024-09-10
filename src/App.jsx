import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./parts/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"


const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;