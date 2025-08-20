import icon_1 from "../assets/mini-icon.png"
import icon_2 from "../assets/mini-icon-1.png"
import icon_3 from "../assets/mini-icon-2.png"
import icon_4 from "../assets/mini-icon-3.png"

const Banner = () => {
  return (
    <div className="relative bg-[#F6F7F9]">
      <div className="min-h-[85vh] text-white rounded-2xl bg-img-banner">
        <div className="p-30">
          <div>
            <h1 className="text-5xl leading-tight">
              Find Your Next Space — <br />
              Modern, Elegant, Effortless.
            </h1>
            <p className="py-6 text-[#AFE4FF]">
              From stylish apartments to premium commercial spaces in<br /> Dhaka—explore, buy, or list with confidence.
            </p>
            <div className="flex gap-2">
              <button className="btn">Get offers to Sell</button>
              <button className="btn btn-outline border-[#AFE4FF] hover:text-white transparent-button">
                <span>Browse Properties</span>
                <i className="fa-solid fa-arrow-right mt-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 absolute w-full px-10 bottom-[-70px]">
        <div className="p-8 bg-white rounded-xl"><img src={icon_1} /> <p>Buy Property</p></div>
        <div className="p-8 bg-white rounded-xl"><img src={icon_3} /> <p>Rent Property</p></div>
        <div className="p-8 bg-white rounded-xl"><img src={icon_2} /> <p>Commercial</p></div>
        <div className="p-8 bg-white rounded-xl"><img src={icon_4} /> <p>International</p></div>
      </div>
    </div>
  );
};

export default Banner;