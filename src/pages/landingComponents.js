export const Categorycard = (props) => {
    return (
        <div class="md:w-1/3 w-full  h-full hover:bg-slate-400 bg-slate-200 flex flex-col border border-white border-2 pb-5 ">
            <div class="w-full h-1/2 relative z-0 ">
                <img src={props.img} className='h-full w-full object-fit ' alt="" />
                <div class="absolute inset-0 flex justify-center items-center z-10 ">
                    <p class="font-bold text-white text-2xl text-center cursor  hover:text-blue-300">{props.title}</p>
                </div>
            </div>
            <div className='flex text-justify justify-center items-center h-1/2  m-2 overflow-hidden'>

                {props.description.substring(1, 100) + "..."}


            </div>
        </div>
    )
}

export const WhyUscard = (props) => {
    return (
        <div className='w-1/2 md:w-full h-1/2 flex flex-wrap justify-center items-center '>
            {/* <div class="w-full h-screen bg-gray-200 flex justify-center items-center"> */}
            <div class=" w-3/4 h-3/4 relative z-0 border border-black border-dotted ">
                <div className='flex flex-col'>

                    <span className='text-xl text-center font-bold'>Safety & Quality</span>
                    <span className='text-slate-700 text-center'>Praesent pellentesque diam vitae nibh aliquam faucibus.</span>
                </div>
                <div class="absolute inset-0 flex justify-center items-center -bottom-60 z-10">
                    <div className='bg-slate-700 hover:bg-white rounded-full h-14 w-14' ></div>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}
export const WhyUscontainer = (props) => {
    return (
        <div className="md:w-1/2 w-full h-[150px] p-2 bg-slate-100">
            <div className="w-full h-full flex">
                <div className="w-1/4 h-full flex justify-center items-center border-r border-r-dotted" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                </div>
                <div className="w-2/3 h-full  items-left ">
                    <h6 className=" uppercase  font-bold   ">Contract logistics</h6>
                    <p className="text-justify p-5 ">\
                        s simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummyum
                    </p>

                </div>

            </div>

        </div>
    )
}