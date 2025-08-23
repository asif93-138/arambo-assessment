import Marquee from "react-fast-marquee";
import sponsor_1 from "../assets/sponsor-1.png"
import sponsor_2 from "../assets/sponsor-2.png"
import sponsor_3 from "../assets/sponsor-3.png"
import sponsor_4 from "../assets/sponsor-4.png"
import sponsor_5 from "../assets/sponsor-5.png"
import sponsor_6 from "../assets/sponsor-6.png"
import sponsor_7 from "../assets/sponsor-7.png"

const SponsorLogos = () => {
    return (
        <Marquee className="md:pt-35 pt-7 bg-[#F6F7F9]" speed="100">
            <img src={sponsor_1} className="md:mx-20 mx-8" />
            <img src={sponsor_2} className="md:mx-20 mx-8" />
            <img src={sponsor_3} className="md:mx-20 mx-8" />
            <img src={sponsor_4} className="md:mx-20 mx-8" />
            <img src={sponsor_5} className="md:mx-20 mx-8" />
            <img src={sponsor_6} className="md:mx-20 mx-8" />
            <img src={sponsor_7} className="md:mx-20 mx-8" />
        </Marquee>
    );
};

export default SponsorLogos;