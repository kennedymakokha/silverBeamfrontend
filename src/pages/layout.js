import classNames from "classnames";
import useSticky from "../components/junk/useSticky";
import "./styles.css";


import { useState } from "react";
import NavBar from "../components/navbar";

export default function StickyNav(props) {
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
            <main className="content bg-gradient-to-b from-black to-slate-600  h-screen flex flex-col  ">
                {props.children}
            </main >
        </div >
    );
}
