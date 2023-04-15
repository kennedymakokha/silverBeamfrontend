import classNames from "classnames";
import useSticky from "../components/junk/useSticky";
import "./styles.css";
import NavBar from "../components/navbar";
import Swipe from "react-easy-swipe";
import { CarouselData } from "../components/CarouselData";
import { Categorycard, WhyUscard, WhyUscontainer } from "./landingComponents";
import { useState } from "react";

export default function StickyNav() {
    const { sticky, stickyRef } = useSticky();
    const [currentSlide, setcurrentSlide] = useState(0)
    const [paused, setPaused] = useState(false)
    return (
        <div className="App bg-slate-100 ">
            <header className="header hidden  md:block ">
                <h1>Header</h1>
            </header>
            <nav ref={stickyRef} className={classNames("nav flex relative z-20 ", { sticky })}>
                <NavBar sticky={sticky} />
            </nav>
            {sticky && (
                <div
                    style={{
                        height: `${stickyRef.current?.clientHeight}px`
                    }}
                />
            )}
            <main className="content bg-gradient-to-b from-black to-slate-600   ">
                <div className="h-full bg-red-400"></div>
            </main >
        </div >
    );
}
