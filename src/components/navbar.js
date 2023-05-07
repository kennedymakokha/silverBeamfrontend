import classNames from "classnames";
import { useState } from "react";
import MyDropdown from "./junk/dropdown";

export default function NavBar({ sticky }) {
    // const NavItems = [
    //     { title: "home", path: "/" },
    //     { title: "About US", path: "/" },
    //     { title: "Services", path: "/" },
    //     { title: "News", path: "/" },
    //     { title: "Contact", path: "/" },

    // ]
    const [navbar, setNavbar] = useState(false);

    const [currentMenuIndex, setCurrentMenuIndex] = useState(null);

    const [NavItems, setNavItems] = useState(
        [
            {
                title: "home", path: "/", children: [
                ]
            },
            {
                title: "About US", path: "", children: [
                    { title: "about us", path: "/about", state: 'false' },
                    { title: "our team", path: "/", state: 'false' },
                    // { title: "home", path: "/", state: 'false' },
                ]
            },
            {
                title: "Services", path: "", children: [
                    { title: "what we do ", path: "/services", state: 'false' },
                    // { title: "home", path: "/", state: 'false' },
                    // { title: "home", path: "/", state: 'false' }
                ]
            },
            {
                title: "News", path: "", children: [
                    { title: "dailies", path: "/", state: 'false' },
                    // { title: "home", path: "/", state: 'false' },
                    // { title: "home", path: "/", state: 'false' },
                ]
            },
            {
                title: "Contact", path: "", children: [
                    { title: "contact us", path: "/contact-us", state: 'false' },
                    // { title: "home", path: "/", state: 'false' },
                    // { title: "home", path: "/", state: 'false' },
                ]
            },

        ]
    );


    const NavItem = (props) => {

        const { data: { title, path, children, }, index } = props
        return (
            <div className="flex flex-col ">
                <MyDropdown title={title} path={path} children={children} index={index} currentMenuIndex={currentMenuIndex} setCurrentMenuIndex={setCurrentMenuIndex} />
            </div>

        )
    }

    return (

        <nav
            className={classNames("bg-black opacity-80 md:w-[70%] md:h-[70px]  h-10 items-center  flex-col flex  w-full ", { sticky })}
        >
            <div className="justify-between px-4 lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex  justify-between py-0  md:block">

                        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
                            <img src='/images/Silverbeam-logo-Final-landscape-white.png' className="md:w-[200px] w-[100px] md:h-14 h-7 mr-2" alt="Logo" />
                        </div>
                        <div

                            className={classNames("md:hidden", { sticky })}
                        >
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-0 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <div className="items-center justify-center space-y-0 md:flex md:space-x-6 md:space-y-0">
                            {NavItems.map((nav, i) => (
                                <NavItem data={nav} key={i} index={i} />
                            ))}
                        </div>
                    </div>

                </div>

            </div>


        </nav >
    );
}