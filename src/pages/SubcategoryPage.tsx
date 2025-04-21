import { useParams } from "react-router-dom";
import { siteContent } from "../data/siteContent";
import { useState } from "react";

export default function SubcategoryPage() {
  const { categorySlug, subSlug } = useParams();
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadingCollection, setLoadingCollection] = useState(false);
  const [visibleImagesCount, setVisibleImagesCount] = useState(12);

  console.log("🔥 SubcategoryPage rendered");

  const fullSubPath = `/${categorySlug}/${subSlug}`;
  let matchedSub = null;

  for (const cat of siteContent) {
    matchedSub = cat.subcategories.find((sub) => sub.path === fullSubPath);
    if (matchedSub) {
      console.log("✅ matchedSub found:", matchedSub);
      console.log("📸 matchedSub.images:", matchedSub.images);
      console.log("📊 Image count:", matchedSub.images?.length || 0);
      break;
    }
  }

  if (!matchedSub) {
    return <div className="p-8 text-xl font-semibold">Subcategory not found.</div>;
  }

  const collections = matchedSub.collections ?? [];
  const images = matchedSub.images ?? [];

  const handleCollectionClick = (collection) => {
    setLoadingCollection(true);
    setTimeout(() => {
      setSelectedCollection(collection);
      setLoadingCollection(false);
    }, 300);
  };

  const handleLoadMore = () => {
    setVisibleImagesCount((prev) => prev + 12);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">{matchedSub.name}</h1>

      {!selectedCollection ? (
        loadingCollection ? (
          <div className="text-center py-12 text-gray-500">Loading images...</div>
        ) : collections.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {collections.map((collection, idx) => (
              <div
                key={idx}
                className="aspect-square flex items-center justify-center bg-gray-100 rounded-lg shadow cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => handleCollectionClick(collection)}
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  loading="lazy"
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        ) : images.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images.slice(0, visibleImagesCount).map((url, idx) => (
                <div
                  key={idx}
                  className="aspect-square flex items-center justify-center bg-gray-100 rounded-lg shadow cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage(url)}
                >
                  <img
                    src={url}
                    alt={`Image ${idx}`}
                    loading="lazy"
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
              ))}
            </div>

            {visibleImagesCount < images.length && (
              <div className="mt-8 text-center">
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-2 rounded bg-black text-white hover:bg-gray-800 transition"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-gray-500">No collections or images available.</p>
        )
      ) : (
        <>
          <button
            className="mb-6 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
            onClick={() => setSelectedCollection(null)}
          >
            ← Back to Collections
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {selectedCollection.images.map((url, idx) => (
              <div
                key={idx}
                className="aspect-square flex items-center justify-center bg-gray-100 rounded-lg shadow cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(url)}
              >
                <img
                  src={url}
                  alt={`Image ${idx}`}
                  loading="lazy"
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </>
      )}

      {/* Modal Zoom Gambar */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Zoomed"
            className="max-w-3xl max-h-[80vh] rounded-xl shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
