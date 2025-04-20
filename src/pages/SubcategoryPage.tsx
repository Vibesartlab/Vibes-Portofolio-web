import { useParams } from "react-router-dom";
import { siteContent } from "../data/siteContent";

export default function SubcategoryPage() {
  const { categorySlug, subSlug } = useParams();

  const fullSubPath = `/${categorySlug}/${subSlug}`;
  let matchedSub = null;

  for (const cat of siteContent) {
    matchedSub = cat.subcategories.find((sub) => sub.path === fullSubPath);
    if (matchedSub) break;
  }

  if (!matchedSub) {
    return <div className="p-8 text-xl font-semibold">Subcategory not found.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">{matchedSub.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {matchedSub.images.map((url, idx) => (
          <div
            key={idx}
            className="aspect-square flex items-center justify-center bg-gray-100 rounded-lg shadow"
          >
            <img
              src={url}
              alt={matchedSub.name}
              className="object-contain max-w-full max-h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
