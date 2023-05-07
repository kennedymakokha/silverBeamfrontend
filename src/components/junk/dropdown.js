import React from "react";
import { Link } from "react-router-dom";

export default function DropdownComponent(props) {
    const { title, path, children, currentMenuIndex, index, setCurrentMenuIndex } = props

    return (
        <div className="inline-flex bg-black text-white group  "
            // onMouseLeave={() => { setCurrentMenuIndex(null); }}
            onMouseEnter={() => setCurrentMenuIndex(index)}
        >


            <Link to={path}

                className="px-0 py-2 text-sm text-white text-[12px] font-bold uppercase  group-hover:text-primary  "
            >
                {title}
            </Link >

            <div className="relative">
                <button
                    type="button"
                    className="inline-flex items-center justify-center h-full px-2 text-gray-600 group-hover:text-primary"
                >
                    {children && children.length > 0 && <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>}
                </button>

                <div className="absolute right-0 z-10 w-40 mt-4 origin-top-right bg-black  shadow-lg"
                    MouseLeave={() => { setCurrentMenuIndex(null); }}
                    // onMouseEnter={() => setCurrentMenuIndex(index)}
                    style={{ display: children && children.length > 0 && currentMenuIndex === index ? "block" : 'none' }}>
                    <div className="p-2" MouseLeave={() => { setCurrentMenuIndex(null); }}>
                        {children.map((child, i) => (
                            <Link
                                to={child.path}
                                className="block px-4 py-2 text-sm text-gray-500 uppercase  hover:text-primary"
                            >
                                {child.title}{ }
                            </Link>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}