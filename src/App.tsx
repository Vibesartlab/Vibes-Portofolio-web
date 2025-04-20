import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { siteContent } from "./data/siteContent";
import GenericCategoryPage from "./pages/GenericCategoryPage";
import SubcategoryPage from "./pages/SubcategoryPage";
import Index from "./pages/Index";
import { Navigation } from "./components/ui/Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Navigation />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Index />} />
            {siteContent.map((category) => (
              <Route
                key={category.path}
                path={category.path}
                element={<GenericCategoryPage category={category} />}
              />
            ))}
            <Route path="/:categorySlug/:subSlug" element={<SubcategoryPage />} />

            {/* ✅ Tambahkan ini */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
