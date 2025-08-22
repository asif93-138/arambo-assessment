import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "@heroicons/react/24/solid"
import person from "../assets/person-img.png"

export default function LocalExperts() {
  const agents = [
    {
      id: 1,
      name: "William Davis",
      role: "Video testimonial",
      rating: 4.8,
      image: person,
    },
    {
      id: 2,
      name: "William Davis",
      role: "Video testimonial",
      rating: 4.8,
      image: person,
    },
    {
      id: 3,
      name: "William Davis",
      role: "Video testimonial",
      rating: 4.8,
      image: person,
    },
    {
      id: 4,
      name: "William Davis",
      role: "Video testimonial",
      rating: 4.8,
      image: person,
    },
  ]

  return (
    <section className="py-16 px-4  mb-10 bg-[#F6F7F9]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="md:flex justify-between items-start mb-12">
          <div className="flex-1">
            <h2 className="text-4xl font-semibold text-black md:leading-tight">
              Local Experts. Real
              <br className="hidden md:block" />
              Guidance.
            </h2>
          </div>

          <div className="">
            <p className="text-gray-600 text-lg max-w-md md:ml-8 my-4 md:my-0">
              Our team of experienced real estate professionals is here to guide you
            </p>

            {/* Navigation Arrows */}
            <div className="text-right md:me-8">
              <button className="p-2 mx-1 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
                <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 mx-1 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
                <ChevronRightIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent) => (
            <div key={agent.id} className={`relative group cursor-pointer ${agent.id != 1 ? "hidden md:block" : ""}`}>
              {/* Agent Card */}
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
                    <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-800">{agent.rating}</span>
                  </div>
                </div>

                {/* Agent Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={agent.image || "/placeholder.svg"}
                    alt={agent.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Agent Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white font-semibold text-lg mb-1">{agent.name}</h3>
                  <p className="text-white/80 text-sm">{agent.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
