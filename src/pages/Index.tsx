import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { ImageShowcase } from "../components/ImageShowcase";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50">

      <main className="mt-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Creative Designer & AI Enthusiast
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Exploring the intersection of human creativity and artificial intelligence.
                Specializing in logo design, AI-generated art, and icon collections.
              </p>
              <div className="flex space-x-4">
                <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://instagram.com" className="text-gray-600 hover:text-gray-900">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/deq0m48pk/image/upload/v1745147682/mjkloter10_Chameleon_camouflaging_on_a_tree_branch_close-up_v_423bc9d8-43ee-443d-8383-21fc9203dd79_0_uhgftt.png"
                alt="Profile"
                className="rounded-lg shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Portfolio Preview Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "AI-Generated Art", path: "/ai-art", image: "https://i.imgur.com/pzpTSYn.png"              },
              { title: "Logo Design", path: "/logos", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" },
              { title: "Icon Collections", path: "/icons", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
            ].map((category) => (
              <Link
                key={category.title}
                to={category.path}
                className="group relative rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {category.title}
                      </h3>
                      <ArrowRight className="w-6 h-6 text-white mx-auto" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Image Showcase Section */}
        <ImageShowcase />
      </main>
    </div>
  );
}
