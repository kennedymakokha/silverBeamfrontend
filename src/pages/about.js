import React from 'react'
import Layout from './layout'
import { TitleOver } from './landingComponents';
import ArrowListItem from '../components/aboutcomponents';
function About() {
    return (
        <Layout>
            {/* <Breadcrump title="About Silverbeam construction" link="about us " /> */}

            <div className='flex px-10 md:px-[250px] pb-10 mt-0 pt-40 flex-col  w-full bg-slate-100 overflow-y-hidden'>
                <div className='w-full flex'>
                    <div className='flex   w-1/4 h-full bg-red-300 '>
                        <img src='/images/photos/close-up-construction-site-excavator_1112-1210.avif' alt='' />
                    </div>
                    <div className='flex  w-3/4'>
                        <div>
                            <TitleOver title="COMPANY PROFILE" />

                            <div className='text-slate-500 text-justify'>
                                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in
                            </div>

                        </div>

                    </div>
                </div>

                <div className='w-full h-96 flex py-5'>
                    <div className='w-1/2 h-full'>
                        <TitleOver title="Mission" fontSize="18px" color="black" />
                        <div className='text-slate-500 text-justify'>
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.
                        </div>
                    </div>
                    <div className='w-1/2 h-full '>
                        <TitleOver title="Vision" fontSize="18px" color="black" />
                        <ArrowListItem />
                        <ArrowListItem />
                        <ArrowListItem />
                        <ArrowListItem />
                        <ArrowListItem />
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default About