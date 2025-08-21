import icon_1 from "../assets/worth-icon-1.png"
import icon_2 from "../assets/worth-icon-2.png"
import icon_3 from "../assets/worth-icon-3.png"

const Worth = () => {
    return (
            <div className="max-w-7xl w-4/5 mx-auto bg-[#F6F7F9] p-15 rounded-2xl mb-10">
      
                {/* Left Column - Main Content */}
                <div className="flex gap-[15%]">
                    <h1 className="text-4xl font-semibold text-gray-900 mb-6 w-full">
                      Know Your Property's True Worth
                    </h1>
                  <div className="">
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      You get access to verified legal professionals who can review contracts, 
                      handle documentation, and guide you through every legal step of your real estate journey.
                    </p>
                    <button className="btn btn-primary px-8 py-4 text-white bg-blue-600 hover:bg-blue-700 border-none rounded-lg">
                      Know property worth
                    </button>
                  </div>
                </div>
                <div className="flex mt-5">
                  <article className="bg-white p-4 m-4 rounded-xl">
                    <img src={icon_1} />
                    <p className="mt-5"><b>Submit property details</b></p>
                    <p className="text-gray-600">Fill out a quick form with your property's location, size, type, and condition.</p>
                  </article>
                  <article className="bg-white p-4 m-4 rounded-xl">
                    <img src={icon_2} />
                    <p className="mt-5"><b>Our team reviews + runs valuation</b></p>
                    <p className="text-gray-600">Our team compares your property with similar listings and recent sales.</p>
                  </article>
                  <article className="bg-white p-4 m-4 rounded-xl">
                    <img src={icon_3} />
                    <p className="mt-5"><b>Get a clear report with price guidance</b></p>
                    <p className="text-gray-600">A verified property expert reviews your details to ensure an accurate valuation.</p>
                  </article>
                </div>
            </div>
    );
};

export default Worth;