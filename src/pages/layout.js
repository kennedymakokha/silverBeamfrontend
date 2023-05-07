import classNames from "classnames";
import useSticky from "../components/junk/useSticky";
import "./styles.css";



import NavBar from "../components/navbar";
import { FooterCardcontainer, QuicklinkItem, TitleOver } from "./landingComponents";

export default function StickyNav(props) {
    const { sticky, stickyRef } = useSticky();

    return (
        <div className="App   ">
            <header className="header hidden   ">
                <p></p>
            </header>
            <nav ref={stickyRef} className={classNames("h-[0px] top-20  bg-transparent w-full flex items-center justify-center relative z-20 ", { sticky })}>
                <NavBar sticky={sticky} />
            </nav>
            {sticky && (
                <div
                    style={{
                        height: `${stickyRef.current?.clientHeight}px`
                    }}
                />
            )}
            <main className="content bg-gradient-to-b from-black to-slate-600  h-full overflow-x-hidden   ">
                {props.children}
            </main >
            {/* <div className="h-full w-full  bg-gradient-to-b from-black to-slate-600  h-full overflow-x-hidden flex px-10 md:px-[250px]" > */}
            <div className="h-full w-full  bg-gradient-to-b from-black to-slate-600 flex-wrap flex overflow-hidden py-10 md:px-[240px]" >
                <FooterCardcontainer title="NEWSLETTER SUBSCRIBE" body={
                    <div className="flex w-full flex-col ">
                        <p className="text-white text-justify">Subscribe to our newsletter and we will inform you about newest projects and promotions.</p>
                        <div className="flex py-10">
                            <input type="text" className=" h-10 w-5/6  autofocus-off" />
                            <div className="bg-primary w-1/6 h-10 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                            </div>
                        </div>
                    </div>} />
                <FooterCardcontainer title="QUICK LINKS" body={
                    <div className="flex flex-col gap-y-2 items-left justify-left ">
                        <QuicklinkItem title="about us" link="/about" />
                        <QuicklinkItem title="contact us" link="/contact-us" />
                        <QuicklinkItem title="services" link="/services" />
                    </div>
                } />
                <FooterCardcontainer title="INDUSTRY SOLUTIONS" body={
                    <div className="flex flex-col gap-y-2 ">
                        <QuicklinkItem title="about us" link="/about" />
                        <QuicklinkItem title="contact us" link="/contact-us" />
                        <QuicklinkItem title="services" link="/services" />
                    </div>
                } />
                <FooterCardcontainer title="CONTACT US" body={<div className="flex  ">
                    <div className="flex gap-x-2 ">
                        <div className="h-8 w-8 bg-gray-100"></div>

                        <div className="h-8 w-8 bg-gray-100"></div>

                        <div className="h-8 w-8 bg-gray-100"></div>

                        <div className="h-8 w-8 bg-gray-100"></div>
                    </div>
                </div>} />

            </div >
        </div >
    );
}
