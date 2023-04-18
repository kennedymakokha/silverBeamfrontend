import { Link } from "react-router-dom"

export const Categorycard = (props) => {
    return (
        <div class="md:w-1/3 w-full  h-full hover:bg-slate-400 bg-slate-200 flex flex-col border border-white border-2 pb-5 ">
            <div class="w-full h-1/2 relative  ">
                <img src={props.img} className='h-full w-full object-fit ' alt="" />
                {/* <div class="absolute inset-0 flex justify-center items-center z-10 ">
                    <p class="font-bold text-white text-2xl text-center cursor  hover:text-blue-300">{props.title}</p>
                </div> */}
                <TitleOver title={props.title} />
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
export const TitleUnder = (props) => {
    return (
        <div>

            <h1 className="text-2xl font-bold text-primary">{props.title}</h1>
            <h1 className="font-thin   text-slate-100">{props.sub_title}</h1>
            <div className="flex justify-center items-center">
                <div className="h-1 w-20 bg-primary "></div>
            </div>

        </div>

    )
}
export const TitleOver = (props) => {
    return (
        <div className='w-full flex pb-10' style={{ alignSelf: 'start' }}>
            <div className=" flex  flex-col" >
                <div className="h-1 w-10 bg-primary mb-2" style={{ alignSelf: 'start' }}></div>
                <h1 className="text-2xl font-bold text-primary" style={{ fontSize: props.fontsize && props.fontsize, color: props.color && props.color }}>{props.title}</h1>
            </div>
        </div>

    )
}
export const WhyUscontainer = (props) => {
    return (
        <div className="md:w-1/2 w-full h-[150px] p-2 flex">
            <div className="w-1/4 h-full flex justify-center items-center border-r border-r-dotted border-primary" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
            </div>
            <div className="w-2/3 h-full  items-left ">
                <h6 className=" uppercase  font-bold   ">{props.title}</h6>
                <p className="text-justify p-5 ">
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export const Newscontainer = (props) => {
    return (
        <div className='h-28 w-full flex group '>
            <div className='h-full w-1/3 bg-red-100 flex '></div>
            <div className='h-full w-2/3 flex p-2 flex-col '>
                <div className=' flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg>
                    <span className='text-[10px] flex items-center font-bold pl-2'>MAY 15, 2015</span>
                </div>
                <p className='font-bold text-justify text-black group-hover:text-blue-400'>Quis autem vel eum </p>
                <p className='font-bold text-justify text-blue-400 group-hover:text-primary pt-5 uppercase' style={{ alignSelf: 'end' }}>Read More </p>
            </div>
        </div>
    )
}

export const FooterCardcontainer = (props) => {
    return (
        <div className='flex flex-col w-1/4 pt-20 px-5 '>
            <div className='w-full flex' style={{ alignSelf: 'start' }}>
                <TitleOver fontsize="15px" color="white" title={props.title} />
            </div>
            {props.body}
        </div>
    )
}
export const Morecontainer = (props) => {
    return (
        <div className="md:w-1/2 w-full h-[150px] p-2 flex">
            <div className="w-1/4 h-full flex justify-center items-center border-r border-r-dotted" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
            </div>
            <div className="w-2/3 h-full  items-left ">
                <h6 className=" uppercase  font-bold   ">Contract logistics</h6>
                <p className="text-justify p-5 ">
                    s simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummyum
                </p>
            </div>
        </div>
    )
}

export const QuicklinkItem = (props) => {
    return (
        <Link to={props.link} className="flex items-center group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4  group-hover:text-white text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <span className="text-white group-hover:text-primary">{props.title}</span>
        </Link>
    )
}


export const Talecontainer = (props) => {
    return (
        <div className='w-full flex'>
            <div className="w-1/4 h-full flex justify-center items-center" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
            </div>
            <div className="w-3/4 h-full  items-left ">
                <p className="text-justify py-5 text-white ">
                    Consumer Package
                </p>
            </div>
        </div>
    )
}