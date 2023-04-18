import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrump(props) {
    return (
        <div className='flex px-10 md:px-[250px] h-30 flex-col w-full items-center justify-center gap-y-1'>
            <h2 className='text-2xl text-gray-300 font-bold '>{props.title}</h2>
            <div className='flex justify-center items-center'>
                <Link to="/" className='text-white' >Home</Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3  group-hover:text-white text-primary items-center">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg> <span className='text-primary'>{props.link}</span>
            </div>
        </div>
    )
}

export default Breadcrump