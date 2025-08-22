import React from 'react';
import sponsor_1 from "../assets/sponsor-1.png"
import sponsor_2 from "../assets/sponsor-2.png"
import sponsor_3 from "../assets/sponsor-3.png"
import sponsor_4 from "../assets/sponsor-4.png"
import sponsor_5 from "../assets/sponsor-5.png"
import sponsor_6 from "../assets/sponsor-6.png"
import sponsor_7 from "../assets/sponsor-7.png"

const SponsorLogos = () => {
    return (
        <section className='bg-[#F6F7F9]'>
            <div className='pt-40 md:flex items-center justify-evenly hidden'>
                <img src={sponsor_1} />
                <img src={sponsor_2} />
                <img src={sponsor_3} />
                <img src={sponsor_4} />
                <img src={sponsor_5} />
                <img src={sponsor_6} />
                <img src={sponsor_7} />
            </div>
            <div className='md:hidden pt-7 px-5 text-center'>
                <article className='flex items-center justify-evenly mb-4'>
                    <img src={sponsor_1} />
                    <img src={sponsor_2} />
                    <img src={sponsor_3} />
                </article>
                <article className='flex items-center justify-evenly mb-4'>
                    <img src={sponsor_4} />
                    <img src={sponsor_5} />
                    <img src={sponsor_6} />
                </article>
                <article className='flex justify-center'>
                    <img src={sponsor_7} />
                </article>
            </div>
        </section>

    );
};

export default SponsorLogos;