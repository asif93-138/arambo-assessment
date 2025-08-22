import truck from "../assets/truck.png"
const MovingServices = () => {
  return (
    <div className="min-h-screen bg-[#F6F7F9] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-8">
            <span className="text-blue-600">Move</span>
            <span className="text-gray-900"> In. </span>
            <span className="text-blue-600">Settle</span>
            <span className="text-gray-900"> In. </span>
            <span className="text-blue-600">Live</span>
            <span className="text-gray-900"> Well.</span>
          </h1>

          {/* Main Illustration */}
          <div className="flex justify-center mb-16">
            <img
              src={truck}
              alt="Moving trucks with Arambo app and city skyline"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-3 md:gap-8 gap-4 max-w-6xl mx-auto">
          {/* Truck Moving */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="border-b-2 border-blue-600 w-16 mb-4"></div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Truck Moving</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Whether you're relocating a home or business, our professional truck moving service ensures secure,
              on-time delivery every time.
            </p>
            <a href="" className="text-blue-600 font-medium hover:text-blue-700 transition-colors border-b border-blue-600 hover:border-blue-700">
              Book now
            </a>
          </div>

          {/* Furniture on Demand */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-600 mb-4">Furniture on Demand</h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Our on-demand furniture service delivers stylish, high-quality pieces tailored to your space and schedule.
            </p>
            <a href="" className="text-blue-400 font-medium hover:text-blue-500 transition-colors border-b border-blue-400 hover:border-blue-500">
              Request furniture solution
            </a>
          </div>

          {/* Interior Decoration */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-600 mb-4">Interior Decoration</h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Connect with our design experts today and discover how our bespoke interior decor solutions can elevate
              your environment.
            </p>
            <a href="" className="text-blue-400 font-medium hover:text-blue-500 transition-colors border-b border-blue-400 hover:border-blue-500">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovingServices
