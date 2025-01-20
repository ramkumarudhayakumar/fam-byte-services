import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import About from "./pages/About";
import SuccessStories from "./pages/SuccessStories";
import Careers from "./pages/Careers";
import Blogs from "./pages/Blogs";
import GenAICOEx from "./pages/GenAICOEx";
import ContactUs from "./pages/ContactUs";
import ContactButton from "./ui/ContactButton";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import PrivacyPolicy from "./components/PrivacyPolicy";
import LoadTop from "./components/LoadTop";

function App() {
  return (
    <Router>
      <LoadTop />
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blogs" element={<Blogs />} />
          {/* <Route path="/gen-ai" element={<GenAICOEx />} /> */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
      <Footer />
      <ContactButton />
    </Router>
  );
}

export default App;
