import React, { useEffect, useState } from 'react'
import Swipe from 'react-easy-swipe'
import { CarouselData } from '../components/CarouselData'

import { Categorycard, Morecontainer, Newscontainer, Talecontainer, TitleOver, TitleUnder, WhyUscard, WhyUscontainer } from './landingComponents'
import Layout from './layout'


function Landing() {

    const [currentSlide, setcurrentSlide] = useState(0)
    const [paused, setPaused] = useState(false)

    useEffect(() => {
        setInterval(() => {
            if (!paused) {
                let newSlide =
                    currentSlide === CarouselData.length - 1
                        ? 0
                        : currentSlide + 1;
                setcurrentSlide(newSlide)
            }
        }, 3000);

    }, [])

    return (
        <Layout>
            <div className=" h-[82vh]  flex flex-col  ">
                <div className='h-full w-full relative'>
                    <div class="bg-black w-full h-full  relative z-0 ">
                        <Swipe className='h-full' onSwipeLeft={() => console.log("first")} onSwipeRight={() => console.log("first")}>
                            {CarouselData?.map((slide, index) => {
                                return (
                                    <img
                                        src={slide.image}
                                        alt="This is a carousel slide"
                                        key={index}
                                        className={
                                            index === currentSlide
                                                ? "block w-full h-full object-cover "
                                                : "hidden"
                                        }
                                        // onMouseEnter={() => {
                                        //     setPaused(true);
                                        // }}
                                        onMouseLeave={() => {
                                            setPaused(false);
                                        }}
                                    />
                                );
                            })}

                        </Swipe>
                        {/* -bottom-[210px] */}
                        <div class="absolute md:-bottom-[24vh] -bottom-[730px]  flex w-full h-[400px] px-2 self-center z-10 justify-center items-center">
                            <div className='md:w-2/3 w-full flex flex-col md:flex-row gap-x-5 md:gap-y-0 gap-y-5 h-full'>
                                <Categorycard description="optio, eaque rerum! Provident similique accusantium " title="Construction works" img='/images/photos/male-builder-uniform-jeans-gloves-holding-helmet-his-hand-front-view.avif' />
                                <Categorycard img="/images/photos/construction-silhouette.avif" title="" description="" />
                                <Categorycard img="/images/photos/heavy-machines-construction-workers-working-building.avif" title="Bridge" description="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' absolute z-20  overflow-x-hidden absolute md:-bottom-[40vh] -bottom-[900px] flex justify-center items-center w-full m-3'>
                    <div className='flex justify-center items-center px-5 py-2 w-auto  bg-gradient-to-t from-black to-slate-600 text-white font-bold rounded-[45px]'>
                        View More
                    </div>
                </div>
            </div >
            <div className="h-full w-full bg-slate-100 md:bg-gradient-to-t from-black to-slate-600  pt-[400px] " >
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
            <div className="h-full w-full   bg-white flex pb-10 px-10 md:px-[250px]" >
                <div className='flex flex-col w-1/3 pt-20  px-10  '>
                    <div className='w-full flex' style={{ alignSelf: 'start' }}>
                        <TitleOver fontsize="15px" color="black" title="COMPANY NEWS" />
                    </div>
                    <div className=' border-r border-r-dotted border-primary flex flex-col gap-y-2'>
                        <Newscontainer />
                        <Newscontainer />
                    </div>
                </div>
                <div className='flex flex-col w-1/3 pt-20  '>
                    <div className='w-full flex' style={{ alignSelf: 'start' }}>
                        <TitleOver fontsize="15px" color="black" title="WHAT CLIENTS SAY" />
                    </div>
                    <div className='p-10  border-r border-r-dotted border-primary'>
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
                <div className='flex flex-col w-1/3 pt-20 px-10  '>
                    <div className='w-full flex' style={{ alignSelf: 'start' }}>
                        <TitleOver fontsize="15px" color="black" title="OUR LOCATIONS" />
                    </div>
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