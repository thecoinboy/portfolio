import React from 'react'
import { Link } from 'react-scroll'
import '../css/Projects.css'
import image1 from '../image/developer.jpg'


const prodata = [
    {
        "url": "facebook.com",
        "image": image1,
        "title": "portfolio",
    },
    {
        "url": "facebook.com",
        "image": image1,
        "title": "Eccomerce",
    },
    {
        "url": "facebook.com",
        "image": image1,
        "title": "Socialmedia"
    }
]

export const Projects = () => {
    return (
        <div className="project">
            <h2> Our Project</h2>
            <div className="container_pro">
                {
                    prodata.map((data, index) =>{
                        return(
                            <div className="box_pro" key={index}>
                                <img src={data.image} alt="" />
                                <div className="overlay"></div>
                                <Link to={data.url}>
                                <span> {data.title}</span>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
