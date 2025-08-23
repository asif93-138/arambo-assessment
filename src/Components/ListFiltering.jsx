import { useState } from "react"
import pro_img_1 from "../assets/property-img-1.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Inline SVG components
const MapPinIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
)

const HomeIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
)

const SparklesIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
    />
  </svg>
)

const ListFiltering = () => {
  const [selectedCategory, setSelectedCategory] = useState("Family")
  const [selectedFurnishing, setSelectedFurnishing] = useState("Furnished")

  const categories = ["Family", "Bachelor", "Women"]
  const furnishingOptions = ["Furnished", "Non-furnished"]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="max-w-7xl mx-auto md:w-4/5 w-9/10 my-30">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold text-gray-900">Hyper Filtered Listings</h2>
            <p className="text-gray-600 leading-relaxed">
              Find your ideal apartment by applying filters for bachelors, women, and families, plus options for
              furnished or non-furnished units.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold text-gray-900">Filter by</h3>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Furnishing Filter */}
            <div className="flex flex-wrap gap-3">
              {furnishingOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedFurnishing(option)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${selectedFurnishing === option
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
        <Carousel responsive={responsive} className="" infinite={true}>
          {/* Right Section - Property Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden m-5">
            {/* Property Image */}
            <div className="relative h-64 lg:h-80">
              <img
                src={pro_img_1}
                alt="Luxury kitchen interior"
                className="w-full h-full object-cover"
              />
              {/* For Sale Tags */}
              <div className="absolute top-4 right-4 space-y-2">
                <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  For Sale
                </span>
              </div>

              {/* Verified Badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white p-4">
                <div className="flex items-center gap-2">
                  <SparklesIcon className="h-5 w-5" />
                  <span className="font-medium">Verified By Arambo</span>
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="p-6 space-y-4">
              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-gray-500">৳48,000,000</span>
                <span className="text-2xl font-bold text-gray-900">৳48,000,000</span>
                <span className="text-sm text-gray-500 ml-auto">Apartment</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-600">
                <MapPinIcon className="h-5 w-5 text-blue-600" />
                <span>Gulshan 2, Dhaka</span>
              </div>

              {/* Specifications */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <HomeIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">4 Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    />
                  </svg>
                  <span className="text-gray-600">3 Baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                  <span className="text-gray-600">2370 sqft</span>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section - Property Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden m-5">
            {/* Property Image */}
            <div className="relative h-64 lg:h-80">
              <img
                src={pro_img_1}
                alt="Luxury kitchen interior"
                className="w-full h-full object-cover"
              />
              {/* For Sale Tags */}
              <div className="absolute top-4 right-4 space-y-2">
                <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  For Sale
                </span>
              </div>

              {/* Verified Badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white p-4">
                <div className="flex items-center gap-2">
                  <SparklesIcon className="h-5 w-5" />
                  <span className="font-medium">Verified By Arambo</span>
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="p-6 space-y-4">
              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-gray-500">৳48,000,000</span>
                <span className="text-2xl font-bold text-gray-900">৳48,000,000</span>
                <span className="text-sm text-gray-500 ml-auto">Apartment</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-600">
                <MapPinIcon className="h-5 w-5 text-blue-600" />
                <span>Gulshan 2, Dhaka</span>
              </div>

              {/* Specifications */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <HomeIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">4 Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    />
                  </svg>
                  <span className="text-gray-600">3 Baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                  <span className="text-gray-600">2370 sqft</span>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section - Property Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden m-5">
            {/* Property Image */}
            <div className="relative h-64 lg:h-80">
              <img
                src={pro_img_1}
                alt="Luxury kitchen interior"
                className="w-full h-full object-cover"
              />
              {/* For Sale Tags */}
              <div className="absolute top-4 right-4 space-y-2">
                <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  For Sale
                </span>
              </div>

              {/* Verified Badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white p-4">
                <div className="flex items-center gap-2">
                  <SparklesIcon className="h-5 w-5" />
                  <span className="font-medium">Verified By Arambo</span>
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="p-6 space-y-4">
              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-gray-500">৳48,000,000</span>
                <span className="text-2xl font-bold text-gray-900">৳48,000,000</span>
                <span className="text-sm text-gray-500 ml-auto">Apartment</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-600">
                <MapPinIcon className="h-5 w-5 text-blue-600" />
                <span>Gulshan 2, Dhaka</span>
              </div>

              {/* Specifications */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <HomeIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">4 Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    />
                  </svg>
                  <span className="text-gray-600">3 Baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                  <span className="text-gray-600">2370 sqft</span>
                </div>
              </div>
            </div>
          </div>
        </Carousel>

      </div>
    </div>
  )
}

export default ListFiltering
