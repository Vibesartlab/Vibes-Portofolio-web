import { Link } from "react-router-dom";
import { siteContent } from "../data/siteContent";

export default function GenericCategoryPage({ category }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">{category.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {category.subcategories.map((sub, idx) => (
          <Link
            to={sub.path}
            key={idx}
            className="block border border-gray-200 hover:shadow-lg rounded-lg overflow-hidden"
          >
            <img src={sub.images[0]} alt={sub.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{sub.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
