import person_img from "../assets/person-carousel.png"

import { useState } from "react"

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "William Davis",
      type: "Video testimonial",
      image: person_img,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "William Davis",
      type: "Video testimonial",
      image: person_img,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "William Davis",
      type: "Video testimonial",
      image: person_img,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="bg-[#F6F7F9] py-16 px-4">
      <div className="">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 max-w-5xl mx-auto">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
              Trusted by Satisfied
              <br />
              Customers
            </h2>
          </div>

          <div className="lg:w-1/2 lg:pl-12">
            <p className="text-gray-600 text-lg mb-8">
              Hear directly from our clients about the value we've delivered, the results we've achieved, and the
              partnerships we've built.
            </p>

            {/* Navigation Arrows */}
            <div className="text-right">
              <button
                onClick={prevSlide}
                className="btn btn-circle mx-2 btn-outline hover:btn-primary"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="btn btn-circle mx-2 btn-outline hover:btn-primary"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Testimonials Carousel */}
        <div className="carousel w-full">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`carousel-item w-full ${index === currentSlide ? "block" : "hidden"}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                {/* First Testimonial Card */}
                <div className="card bg-white shadow-lg flex-row items-center">
                  <div className="relative w-300">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt="Customer testimonial"
                      className="w-full object-cover rounded-t-2xl"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute bottom-2 left-2 flex items-center justify-center">
                      <button className="btn btn-circle btn-lg">
                        <svg className="w-6 h-6 ml-1" fill="blue" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="card-body">
                    <p className="text-gray-700 text-base leading-relaxed mb-4">"{testimonial.text}"</p>

                    <div className="flex items-center gap-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.type}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Testimonial Card (duplicate for demo) */}
                <div className="card bg-white shadow-lg flex-row items-center">
                  <div className="relative w-300">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt="Customer testimonial"
                      className="w-full object-cover rounded-t-2xl"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute  bottom-2 left-2 flex items-center justify-center">
                      <button className="btn btn-circle btn-lg">
                        <svg className="w-6 h-6 ml-1" fill="blue" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="card-body">
                    <p className="text-gray-700 text-base leading-relaxed mb-4">"{testimonial.text}"</p>

                    <div className="flex items-center gap-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.type}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-primary" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection
