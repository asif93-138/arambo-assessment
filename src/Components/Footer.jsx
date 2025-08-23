import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline"
import footer from "../assets/footer-bg.png"
import logo from "../assets/Frame.png"

const Footer = () => {
  return (
    <footer className="">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center py-10 pt-15 w-98/100 rounded-xl mx-auto"
        style={{
          backgroundImage: `url(${footer})`,
        }}
      >

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Move Forward?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Whether you're buying, renting, or listing—we're here to guide you every step of the way.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn btn-lg bg-white text-gray-800 hover:bg-gray-100 border-none w-80 md:w-auto rounded-lg">
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              Send Email
            </button>
            <button className="btn btn-lg bg-gray-600/60 text-white hover:bg-gray-700 border-none w-80 md:w-auto px-8 rounded-lg">
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call us
            </button>
          </div>
        </div>

        <div className="bg-white p-12 md:max-w-6xl w-9/10 mx-auto mt-15 rounded-xl">
          <div className="">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

              <div className="md:col-span-1">
                <img src={logo} />
                <p className="text-gray-600 text-sm leading-relaxed mt-5">
                  From Listing to Living—
                  <br />
                  Smarter with Arambo.
                </p>
              </div>


              <div>
                <h3 className="font-semibold text-gray-800 mb-4">For Rent</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                      Commercial
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                      Residential
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                      Land Properties
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                      Long Term
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                      Short Term
                    </a>
                  </li>
                </ul>
              </div>


              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Property</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                      For sale
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                      List a property
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                      Long-term
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                      Short-term
                    </a>
                  </li>
                </ul>
              </div>


              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                      Term of service
                    </a>
                  </li>
                </ul>
              </div>


              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Find us at</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Copyright */}
      <div className="py-4 text-center">
        <p className="font-semibold">Arambo © 2025</p>
      </div>
    </footer>
  )
}

export default Footer
