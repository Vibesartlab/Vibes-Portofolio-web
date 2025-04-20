
import { Link } from "react-router-dom";

interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  description?: string;
}

interface PortfolioGridProps {
  items: PortfolioItem[];
  category: string;
}

export function PortfolioGrid({ items, category }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.id} className="group relative">
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
            {item.description && (
              <p className="mt-1 text-sm text-gray-500">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
