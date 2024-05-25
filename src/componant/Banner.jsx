import React from 'react';
import './Banner.css';

import img3 from '../assets/picc.jpg';

const Banner = () => {
    return (
        <div className='lg:pb-5'>

            <div style={{
                backgroundImage: `url(${img3})`,
                backgroundSize: 'cover',
                // backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <div className='banner-banner flex justify-center items-center'>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                        className='text-center text-white bg-slate-700 bg-opacity-40 p-8 rounded'>
                        <h2 className='text-3xl mb-3 leading-8'>CARING FOR LIFE</h2>
                        <p className='text-lg'>Leading the way in Food recipe Excellence</p>
                    </div>
                </div>

            </div>

            {/* <div className='my-16 pt-10 lg:px-16 mx-auto lg:gap-16 gap-28 grid lg:grid-cols-2 justify-center items-center'>
                <div className='lg:mx-auto md:mx-auto justify-center items-center'>
                    <div className='w-[400px] relative'>
                        <img className='h-[350px] rounded-md' src={img1} alt="" />
                    </div>
                    <div className='absolute translate-x-[220px] -translate-y-48'>
                        <img className='w-64 h-60 rounded-md' src={img2} alt="" />
                    </div>
                </div> 
            </div> */}
        </div>
    );
};

export default Banner;