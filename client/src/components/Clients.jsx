import React from 'react'
import "swiper/css";
import "swiper/css/effect-creative";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import image1 from '../image/developer.jpg'
import '../css/Clients.css'



const prodata = [
    {
        "url": "facebook.com",
        "image": image1,
        "title": "portfolio",
        "subtitle": "md,seo at chihua network",
    },
    {
        "url": "facebook.com",
        "image": image1,
        "title": "Eccomerce",
        "subtitle": "md,seo at chihua network",
    },
    {
        "url": "facebook.com",
        "image": image1,
        "title": "Socialmedia",
        "subtitle": "md,seo at chihua network",
    },
]




const Clients = () => {
  return (
    <div className='cleint'>
    <h1> <span style={{color:"#fff"}}> Our</span> Clients </h1>
    <div>
        <Swiper
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
            className="mySwiper"
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[Autoplay, EffectCoverflow, Pagination]}
        >
            {
                prodata.map((data, index) => {
                    return (
                        <SwiperSlide key={index} className="cli_box">
                            <img src={data.image} alt="" />
                            <div className="cli_detail">
                                <span>{data.title}</span>
                                <span>{data.subtitle}</span>
                            </div>
                        </SwiperSlide>
                    )
                })

            }


        </Swiper>
    </div>
</div>
  )
}

export default Clients