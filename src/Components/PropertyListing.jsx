import { useState } from "react"
import pro_img_1 from "../assets/property-img-1.png"
const PropertyListing = () => {
    const [activeFilter, setActiveFilter] = useState("residential")

    const properties = [
        {
            id: 1,
            image: pro_img_1,
            price: "৳48,000,000",
            type: "Apartment",
            location: "Gulshan 2, Dhaka",
            beds: 4,
            baths: 3,
            sqft: 2370,
            verified: true,
        },
        {
            id: 2,
            image: pro_img_1,
            price: "৳48,000,000",
            type: "Apartment",
            location: "Gulshan 2, Dhaka",
            beds: 4,
            baths: 3,
            sqft: 2370,
            verified: true,
        },
        {
            id: 3,
            image: pro_img_1,
            price: "৳48,000,000",
            type: "Apartment",
            location: "Gulshan 2, Dhaka",
            beds: 4,
            baths: 3,
            sqft: 2370,
            verified: false,
        },
        {
            id: 4,
            image: pro_img_1,
            price: "৳48,000,000",
            type: "Apartment",
            location: "Gulshan 2, Dhaka",
            beds: 4,
            baths: 3,
            sqft: 2370,
            verified: false,
        },
        {
            id: 5,
            image: pro_img_1,
            price: "৳48,000,000",
            type: "Apartment",
            location: "Gulshan 2, Dhaka",
            beds: 4,
            baths: 3,
            sqft: 2370,
            verified: false,
        },
        {
            id: 6,
            image: pro_img_1,
            price: "৳48,000,000",
            type: "Apartment",
            location: "Gulshan 2, Dhaka",
            beds: 4,
            baths: 3,
            sqft: 2370,
            verified: false,
        },
    ]

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">Explore Latest Properties to Buy</h1>

                {/* Filter Buttons */}
                <div className="flex bg-gray-100 rounded-full">
                    <button
                        onClick={() => setActiveFilter("residential")}
                        className={`px-6 py-2 rounded-full text-sm cursor-pointer font-medium transition-colors ${activeFilter === "residential" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                    >
                        Residential
                    </button>
                    <button
                        onClick={() => setActiveFilter("commercial")}
                        className={`px-6 py-2 rounded-full text-sm cursor-pointer font-medium transition-colors ${activeFilter === "commercial" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                    >
                        Commercial
                    </button>
                </div>
            </div>

            {/* Property Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {properties.map((property) => (
                    <div
                        key={property.id}
                        className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                    >
                        <div className="relative">
                            <img
                                src={property.image || "/placeholder.svg"}
                                alt={`Property ${property.id}`}
                                className="w-full object-cover"
                            />
                            {/* For Sale Badge */}
                            <div className="absolute top-3 right-3">
                                <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">For Sale</span>
                            </div>
                            {/* Verified Badge */}
                            {property.verified && (
                                <div className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white px-4 py-2 flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-sm font-medium">Verified By Arambo</span>
                                </div>
                            )}
                        </div>

                        <div className="p-4">
                            {/* Price and Type */}
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-xl font-bold text-blue-600">{property.price}</h2>
                                <span className="text-sm text-gray-500">{property.type}</span>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-2 mb-4">
                                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-gray-600">{property.location}</span>
                            </div>

                            {/* Property Details */}
                            <div className="flex items-center justify-between text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>
                                    <span>{property.beds} Beds</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>{property.baths} Baths</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>{property.sqft} sqft</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* See All Listing Button */}
            <div className="text-center">
                <button className="btn btn-ghost rounded-3xl mt-4">
                    See All Listing
                    <i className="fa-solid fa-arrow-right mt-1 btn-arrow-size text-white bg-[#1946BB] p-1 rounded-full"></i>
                </button>
            </div>

        </div>
    )
}

export default PropertyListing
