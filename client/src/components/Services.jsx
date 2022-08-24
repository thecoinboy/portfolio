import React from 'react'
import '../css/Services.css'
import { FaReact } from 'react-icons/fa'
import { SiFastapi } from 'react-icons/si'
import { MdEvent } from 'react-icons/md'
import {Link} from 'react-scroll'

const servData = [
    {
        "icon": <FaReact />,
        "title": "Reactjs",
        "subtitle":"Develope web application with reusable component."
    },
    {
        "icon": <SiFastapi />,
        "title": "Api development",
        "subtitle": "Build restful api's for your bussiness."
    },
    {
        "icon": <MdEvent />,
        "title": "Modern UI",
        "subtitle": "Create modern userinterface, dashboard with reactjs technology."
    }
]




export const Services = () => {
    return (
        <div className='service'>
            <div className="service_title">
                <h1>Services</h1>
                <span>We work with creativity</span>
            </div>
            <div className="service_contain">
                {
                    servData.map((data, i) => {
                        return(
                            <div className="ser_box" key={i}>
                            <span> {data.icon}  </span>
                            <span> {data.title} </span>
                            <span> {data.subtitle}  </span>
                           <Link to="project" smooth={true} duration={1000}> <button className='button ser_button'>View</button> </Link>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
