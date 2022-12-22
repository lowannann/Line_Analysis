
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Analysis from "./pages/Analysis";
import FileAnalysis from "./pages/FileAnalysis";
import Aboutus from "./pages/Aboutus";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Analysis" element={<Analysis />} />
          <Route path="FileAnalysis" element={<FileAnalysis />} />
          <Route path="Upload" element={<Upload />} />
          <Route path="Aboutus" element={<Aboutus />} />
        </Route>
      </Routes>
    </Router>
  );
}
