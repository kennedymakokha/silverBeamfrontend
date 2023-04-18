import React from 'react'

function ArrowListItem(props) {
    return (
        <div className=' text-justify px-5 items-center'>
            <div className='flex w-full  '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-bold text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                <p className='text-slate-500'>Providing high quality transportation services to all of our clients</p>
            </div>

        </div>
    )
}

export default ArrowListItem