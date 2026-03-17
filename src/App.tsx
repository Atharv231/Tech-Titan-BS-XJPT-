import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ScannerPage from "./pages/ScannerPage";
import ArchitecturePage from "./pages/ArchitecturePage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scanner" element={<ScannerPage />} />
        <Route path="/architecture" element={<ArchitecturePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
