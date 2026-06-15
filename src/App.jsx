import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"; // 1. Import Footer
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import Project from "./pages/Project";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans bg-white">
        <NavBar />
        <div className="flex-grow"> {/* This pushes the footer to the bottom */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer /> {/* 2. Add Footer here */}
      </div>
    </Router>
  );
};

export default App;