import icon_1 from "../assets/mini-icon.png"
import icon_2 from "../assets/mini-icon-1.png"
import icon_3 from "../assets/mini-icon-2.png"
import icon_4 from "../assets/mini-icon-3.png"

const Banner = () => {
  return (
    <div className="md:relative bg-[#F6F7F9]">
      <div className="md:min-h-[85vh] text-white rounded-2xl bg-img-banner bg-cover">
        <div className="md:p-30 px-5 py-20">
          <div>
            <h1 className="md:text-5xl text-4xl md:leading-tight heading-gradient font-semibold">
              Find Your Next Space — <br />
              Modern, Elegant, Effortless.
            </h1>
            <p className="py-6 text-[#AFE4FF]">
              From stylish apartments to premium commercial spaces in<br className="hidden md:block" /> Dhaka—explore, buy, or list with confidence.
            </p>
            <div className="flex md:gap-2 gap-4 flex-col md:flex-row">
              <button className="btn">Get offers to Sell</button>
              <button className="btn btn-outline border-[#AFE4FF] hover:text-white transparent-button">
                <span>Browse Properties</span>
                <i className="fa-solid fa-arrow-right mt-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-4 md:absolute w-full px-4 md:px-10 bottom-[-70px] mt-4 md:mt-0 z-1"
      >
        <div className="p-8 bg-white rounded-xl"><img src={icon_1} /> <p>Buy Property</p></div>
        <div className="p-8 bg-white rounded-xl"><img src={icon_3} /> <p>Rent Property</p></div>
        <div className="p-8 bg-white rounded-xl"><img src={icon_2} /> <p>Commercial</p></div>
        <div className="p-8 bg-white rounded-xl"><img src={icon_4} /> <p>International</p></div>
      </div>
    </div>
  );
};

export default Banner;