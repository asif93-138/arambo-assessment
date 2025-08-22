import dhaka_tribune from "../assets/dhaka-tribune.png"
import channel_i from "../assets/channel-i.png"
import prothom_alo from "../assets/prothom-alo.png"

const MediaCoverage = () => {
    return (
        <div className="my-20">
            <section className='md:max-w-5xl w-9/10 mx-auto md:flex'>
                <h3 className='text-4xl font-semibold w-full'>As Seen in The Daily Star, Prothom Alo & More</h3>
                <p className='text-gray-600 mt-5 md:mt-0'>Our work has been recognized by Bangladesh's top news outlets and media channels.
                    We're proud to be shaping the future of property with trust, transparency, and national impact.
                </p>
            </section>
            <section className="md:flex mt-15 w-9/10 mx-auto">
                <div className="bg-[#F6F7F9] font-semibold md:m-2 my-5 p-5 rounded-xl">
                    <img src={dhaka_tribune} className="mb-20" />
                    <p>Arambo is Reshaping Dhaka's Rental Scene with Verified Listings & Legal Support</p>
                </div>
                <div className="bg-[#F6F7F9] font-semibold md:m-2 my-5 p-5 rounded-xl">
                    <img src={channel_i} className="mb-20" />
                    <p>Arambo is Reshaping Dhaka's Rental Scene with Verified Listings & Legal Support</p>
                </div>
                <div className="bg-[#F6F7F9] font-semibold md:m-2 my-5 p-5 rounded-xl">
                    <img src={prothom_alo} className="mb-20" />
                    <p>Arambo is Reshaping Dhaka's Rental Scene with Verified Listings & Legal Support</p>
                </div>
            </section>
        </div>
    );
};

export default MediaCoverage;