import React from 'react'
import Layout from './layout'
import { AiOutlineRight, IconName } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Breadcrump from '../components/breadcrump';
function Contact() {
    return (
        <Layout>
            <Breadcrump title="Contact Us" link="contact-us" />
        </Layout>
    )
}

export default Contact