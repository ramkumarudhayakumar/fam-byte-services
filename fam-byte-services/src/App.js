import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import About from "./pages/About";
import SuccessStories from "./pages/SuccessStories";
import Careers from "./pages/Careers";
import Blogs from "./pages/Blogs";
import GenAICOEx from "./pages/GenAICOEx";
import { Footer } from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import ContactButton from "./ui/ContactButton";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/about" element={<About />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/gen-ai" element={<GenAICOEx />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <ContactButton />
      <Footer />
    </Router>
  );
}

export default App;
