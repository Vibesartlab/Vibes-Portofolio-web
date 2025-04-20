import { Link } from "react-router-dom";
import { siteContent } from "../../data/siteContent";

export function Navigation() {
  return (
     <nav className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm border-b border-gray-200 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold">My Portfolio</Link>
        <div className="space-x-6 flex items-center">
          {siteContent.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="text-gray-700 hover:text-black"
            >
              {category.name}
            </Link>
          ))}

          {/* Tambahan link manual */}
          <Link to="/about" className="text-gray-700 hover:text-black">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-black">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
