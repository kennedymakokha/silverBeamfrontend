import React from 'react'
import Layout from './layout'
import { AiOutlineRight, IconName } from "react-icons/ai";
import { Link } from 'react-router-dom';
function Contact() {
    return (
        <Layout>
            <div className='w-full h-10 pl-10 bg-slate-100 flex items-center '>
                <Link to="/" className='text-blue-500' >Home</Link><AiOutlineRight /> Contact us
            </div>
        </Layout>
    )
}

export default Contact