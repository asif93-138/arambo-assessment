import building from "../assets/building.png"

const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center md:py-20 py-10 bg-[#F6F7F9]">
      <article className="relative">
        <img src={building} className="md:w-8/10" alt="About" />
        <button type="button" className="btn absolute bottom-[5%] left-[25%] px-16 rounded-3xl">
          Learn more
          <i className="fa-solid fa-arrow-right mt-1 btn-arrow-size text-white bg-[#1946BB] p-1 rounded-full">
          </i>
        </button>
      </article>
      <div className="md:pe-20 p-8">
        <button className="btn btn-outline rounded-xl px-2 h-[25px]">About Arambo</button>
        <p className="md:text-2xl md:leading-relaxed mt-3">
          <b>At Arambo, we believe that</b> your spaces should reflect your lifestyle.
          From curated residential properties to commercial solutions, we help
          you find a place you can truly call home or grow your business.
        </p>
        <div className="mt-6 flex gap-6 flex-col md:flex-row">
          <div className='md:w-[180px] h-[170px] text-white p-6 text-right bg-img-about bg-cover rounded-2xl ' >
            <h3 className="text-4xl mb-12 text-left font-medium">50+</h3>
            <small className="">Elegant properties</small>
          </div>
          <div className="md:w-[180px] h-[170px] p-6 bg-[#DCEDF9] rounded-2xl text-[#1946BB]">
            <h3 className="text-4xl mb-10 font-medium">200+</h3>
            <article className="flex items-end">
              <small>Residential properties</small>
              <i className="fa-solid fa-arrow-right ms-10 md:ms-0 mt-1 text-xs text-white bg-[#1946BB] p-1 rounded-full"></i>
            </article>
          </div>
          <div className="md:w-[180px] h-[170px] p-6 bg-black rounded-2xl text-white">
            <h3 className="text-4xl mb-10 font-medium">100+</h3>
            <article className="flex items-end">
              <small>Commercial properties</small>
              <i className="fa-solid fa-arrow-right ms-10 md:ms-0  mt-1 text-xs text-black bg-white p-1 rounded-full"></i>
            </article>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;