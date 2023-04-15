import React, { useEffect, useState } from 'react'
import Swipe from 'react-easy-swipe'
import { CarouselData } from '../components/CarouselData'

import { Categorycard, WhyUscard, WhyUscontainer } from './landingComponents'
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
            <div className=" h-full  flex flex-col   ">
                <div class="bg-black w-full  relative z-0 ">
                    <Swipe className='h-[142vh]' onSwipeLeft={() => console.log("first")} onSwipeRight={() => console.log("first")}>
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
                    <div class="absolute md:-bottom-[210px] -bottom-[730px]  flex w-full h-[400px] px-2 self-center z-10 justify-center items-center">
                        <div className='md:w-2/3 w-full flex flex-col md:flex-row gap-x-5 md:gap-y-0 gap-y-5 h-full'>
                            <Categorycard description="optio, eaque rerum! Provident similique accusantium " title="Construction works" img='/images/photos/male-builder-uniform-jeans-gloves-holding-helmet-his-hand-front-view.avif' />
                            <Categorycard img="/images/photos/construction-silhouette.avif" title="" description="" />
                            <Categorycard img="/images/photos/heavy-machines-construction-workers-working-building.avif" title="Bridge" description="" />
                        </div>
                    </div>

                </div>
                <div className=' absolute z-20  overflow-x-hidden absolute md:-bottom-[150px] -bottom-[900px] flex justify-center items-center w-full m-3'>
                    <div className='flex justify-center items-center px-5 py-2 w-auto  bg-gradient-to-t from-black to-slate-600 text-white font-bold rounded-[45px]'>
                        View More
                    </div>
                </div>
                <div className="h-full w-full bg-slate-100 md:bg-gradient-to-t from-black to-slate-600 pt-[400px] " >
                    <div className='w-full  h-full flex bg-slate-100 flex flex-col '>
                        <div className='w-full  h-full  pt-20'>
                            <h2 className="text-3xl uppercase text-center font-bold  ">What we offer</h2>
                            <h4 className=" uppercase text-center font-thin  text-slate-500 ">TAILORED Contruction SERVICES</h4>
                            <div className="w-full h-full flex px-10 md:px-[250px] flex-wrap pt-10 bg-slate-100">
                                <WhyUscontainer />
                                <WhyUscontainer />
                                <WhyUscontainer />
                                <WhyUscontainer />



                            </div>
                        </div>


                    </div>

                </div>

                <div className="h-20 bg-red-100 w-full">

                </div>

            </div>
        </Layout>
    )
}

export default Landing