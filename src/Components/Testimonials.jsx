import person_img from "../assets/person-carousel.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TestimonialsSection = () => {

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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="bg-[#F6F7F9] py-16">
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
        </div>
      </div>
      {/* Testimonials Carousel */}
      <Carousel responsive={responsive} className="" infinite={true}>
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className="card bg-white shadow-lg flex-row items-center m-5 rounded-2xl">
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

            <div className="card-body py-0">
              <p className="text-gray-700 md:text-base text-xs md:leading-relaxed md:mb-4">"{testimonial.text}"</p>

              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="md:text-sm text-xs text-gray-500">{testimonial.type}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default TestimonialsSection
