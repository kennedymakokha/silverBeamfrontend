import React, { useEffect, useState } from 'react'
import { CarouselData } from '../components/CarouselData'
import Slider from '../components/slider'

import { Newscontainer, Talecontainer, TitleOver, WhyUscontainer } from './landingComponents'
import Layout from './layout'


function Landing() {

    const [currentSlide, setcurrentSlide] = useState(0)
    const [paused, setPaused] = useState(false)
    const [automatic, setAutomatic] = useState(true)

    useEffect(() => {
        if (automatic) {
            var index = currentSlide;
            const interval = setInterval(
                () => {
                    if (!paused) {
                        setcurrentSlide(index);
                        index++;
                        if (index >= CarouselData.length) index = 0;
                        if (index < 0) index = CarouselData.length - 1;
                    }
                },
                3000
            );
            return () => {
                clearInterval(interval);
            };
        }
    }, [paused]);

    return (
        <Layout>
            <Slider currentSlide={currentSlide} setPaused={setPaused} setcurrentSlide={setcurrentSlide} />

            <div className="h-full w-full bg-slate-100 md:bg-gradient-to-t from-black to-slate-600  md:pt-[400px] pt-[210vh] " >
                <div className='w-full  h-full flex bg-slate-100 flex flex-col '>
                    <div className='w-full  h-full  py-20'>
                        <h2 className="text-3xl uppercase text-center font-bold text-primary ">What we offer</h2>
                        <h4 className=" uppercase text-center font-thin  text-slate-500 ">TAILORED Contruction SERVICES</h4>
                        <div className="w-full h-full flex px-10 md:px-[250px] flex-wrap pt-10 bg-slate-100">
                            <WhyUscontainer title="CONTRACT LOGISTICS" description="s simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummyum" />
                            <WhyUscontainer title="CONTRACT LOGISTICS" description="s simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummyum" />
                            <WhyUscontainer title="CONTRACT LOGISTICS" description="s simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummyum" />

                        </div>
                    </div>


                </div>

            </div>
            <div className="h-full w-full   bg-gradient-to-t from-black to-slate-600 flex" >
                <div className='flex flex-col w-1/2 pt-20 px-10 md:px-[250px] '>
                    <div className='w-full flex' style={{ alignSelf: 'start' }}>
                        <TitleOver title="INDUSTRY SECTORS COVERAGE" />
                    </div>
                    <p className='text-white pb-4 text-justify'>We cover different industry sectors, from food and beverage, chemical, retail, durable goods and more. Check the full list.</p>
                    <Talecontainer />
                    <Talecontainer />
                    <Talecontainer />
                    <Talecontainer />
                    <Talecontainer />

                </div>

                {/* </div> */}
                <div className='flex flex-col w-1/2 bg-hero-pattern bg-no-repeat'>


                </div>
            </div>
            <div className="h-full w-full   bg-white  flex-wrap flex overflow-hidden md:px-[240px]" >
                <div className="md:w-1/3 w-full md:bg-white bg-slate-100 md:h-[400px]    p-2 pt-10 flex-col flex">
                    <TitleOver fontsize="15px" color="black" title="COMPANY NEWS" />
                    <div className='w-full h-full md:border-r border-r-dotted border-primary flex flex-col gap-y-2'>
                        <Newscontainer />
                        <Newscontainer />
                    </div>
                </div>
                <div className="md:w-1/3 w-full md:bg-white bg-slate-100 md:h-[400px]    p-2 pt-3 flex-col flex">
                    <TitleOver fontsize="15px" color="black" title="WHAT CLIENTS SAY" />
                    <div className='md:p-10  md:border-r border-r-dotted border-primary'>
                        <p className='text-slate-500'>
                            Best customer support and
                            response time I have ever seen...
                            not to mention a kick ass theme!
                            Great feeling from this purchase.
                            Thank you Pixel Industry!

                        </p>
                        <p className='font-bold'>Kennedy Makokha</p>
                        <p className='italic'>HR crafted sytems</p>
                    </div>
                </div>
                <div className="md:w-1/3 w-full  md:h-[400px]    p-2 pt-3 flex-col flex">
                    <TitleOver fontsize="15px" color="black" title="OUR LOCATIONS" />
                    <div>
                        <img src="/images/locations.jpg" alt="" />
                        <p className='text-slate-500 text-justify'>SilverBeam. covers over 150 locations all over the globe plus numerous logistic partner companies from different areas of supply chain.</p>
                    </div>
                </div>

            </div>

        </Layout >
    )
}

export default Landing