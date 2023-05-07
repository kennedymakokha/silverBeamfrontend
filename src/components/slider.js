import React from 'react'
import Swipe from 'react-easy-swipe';
import { Categorycard } from '../pages/landingComponents';
import { CarouselData } from './CarouselData';


function Slider({ setPaused, currentSlide, setcurrentSlide }) {
    return (

        <div className="relative">
            <div className=" h-[100vh]  flex flex-col  ">
                <div className='h-full w-full relative'>
                    <div className="bg-black w-full h-full  relative z-0 ">
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
                                        onMouseEnter={() => {
                                            setPaused(false);
                                        }}
                                        onMouseLeave={() => {
                                            setPaused(false);
                                        }}
                                    />
                                );
                            })}

                        </Swipe>

                        <div class="absolute md:-bottom-[24vh] -bottom-[118.5vh]  flex w-full h-[400px] px-2 self-center z-10 justify-center items-center">
                            <div className='md:w-2/3 w-full flex flex-col md:flex-row gap-x-5 md:gap-y-0 gap-y-5 h-full'>
                                <Categorycard description="We offer tailor-made, professional civil construction services that meet  set standards by the client and regularitory authorities " title="Professional Team" img='/images/photos/male-builder-uniform-jeans-gloves-holding-helmet-his-hand-front-view.avif' />
                                <Categorycard img="/images/photos/construction-silhouette.avif" title="Construction" description="" />
                                <Categorycard img="/images/photos/heavy-machines-construction-workers-working-building.avif" title="Bridge" description=" We offer tailor-made, professional civil construction services that meet  set standards by the client and regularitory authorities" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' absolute z-20  overflow-x-hidden absolute md:-bottom-[40vh] -bottom-[210vh] flex justify-center items-center w-full m-3'>
                    <div className='flex ease-in-out duration-300 hover:ease-in justify-center items-center px-5 py-2 w-auto  bg-gradient-to-t from-black to-slate-600 text-white font-bold rounded-[45px]'>
                        View More
                    </div>
                </div>
            </div >
            <div className="absolute inset-0 bg-gray-900 opacity-30"></div>
            <div className="absolute md:inset-0 top-[30vh] flex items-center w-full justify-between px-[50px] ">

                <div className=''>
                    <h1 className="md:text-5xl text-3xl font-bold text-white">{CarouselData[currentSlide]?.title}</h1>
                    <div className="flex justify-center items-center md:my-5 my:0 ">
                        <div className="h-1 w-20 bg-primary transition duration-150 ease-in-out hover:ease-in "></div>
                    </div>
                    <h1 className="font-thin   text-slate-100">{CarouselData[currentSlide]?.subtitle}</h1>


                </div>

            </div>

        </div>


    )
}

export default Slider