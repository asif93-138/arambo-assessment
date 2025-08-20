import { useState } from "react"
const SimpleSteps = () => {
    const [activeTab, setActiveTab] = useState("buyers")

    const features = [
        {
            icon: (
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
            ),
            title: "Browse Listings",
            description: "Explore verified apartments and commercial spaces in prime Dhaka locations.",
        },
        {
            icon: (
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                </svg>
            ),
            title: "Get Expert Support",
            description: "Our agents help with everything from price checks to paperwork.",
        },
        {
            icon: (
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Book a Visit",
            description: "Schedule a tour with one click—online or in person.",
        },
        {
            icon: (
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            title: "Close with Confidence",
            description: "Transparent process, no hidden fees.",
        },
    ]
    return (
        <section className="py-16 px-4 max-w-7xl w-9/10 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Column */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                            Simple steps. Real results.
                            <br />
                            Tailored for everyone.
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Our team of experienced real estate professionals is here to guide you
                        </p>
                    </div>

                    <div className="space-y-3">
                        <button
                            onClick={() => setActiveTab("buyers")}
                            className={`w-full text-left px-6 py-4 rounded-full text-lg font-medium transition-all duration-200 ${activeTab === "buyers"
                                    ? "bg-[#1946BB] text-white shadow-lg"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                For Buyers
                                {activeTab === "buyers" && (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                )}
                            </div>
                        </button>

                        <button
                            onClick={() => setActiveTab("sellers")}
                            className={`w-full text-left px-6 py-4 rounded-full text-lg font-medium transition-all duration-200 ${activeTab === "sellers"
                                    ? "bg-[#1946BB] text-white shadow-lg"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                For Sellers
                                {activeTab === "sellers" && (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                )}
                            </div>
                        </button>

                        <button
                            onClick={() => setActiveTab("renters")}
                            className={`w-full text-left px-6 py-4 rounded-full text-lg font-medium transition-all duration-200 ${activeTab === "renters"
                                    ? "bg-[#1946BB] text-white shadow-lg"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                For Renters
                                {activeTab === "renters" && (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                )}
                            </div>
                        </button>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-[#edf1fa] rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-200">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                    {feature.icon}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <button className="btn btn-ghost rounded-3xl mt-4">
                        Start Browsing Properties
                        <i className="fa-solid fa-arrow-right mt-1 btn-arrow-size text-white bg-[#1946BB] p-1 rounded-full"></i>
                    </button>
                </div>

            </div>

        </section>
    );
};

export default SimpleSteps;