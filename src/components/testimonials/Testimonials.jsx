import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
  { id:1,
    avatar: AVTR1 ,
    name: 'Tinq Sn',
    review: 'Sed sint similique fugit temporibus aspdddd ddsdsd sdsdsrrs  sasewe  dad',
  },
  {
    id:2,
    avatar: AVTR2 ,
    name: 'Rope Suaz',
    review: 'Sed sint similique fugit temporibus aspdddd ddsdsd sdsdsrrs  sasewe  dad',
  },
  {
    id:3,
    avatar: AVTR3 ,
    name: 'Toto Vskij',
    review: 'Sed sint similique fugit temporibus aspdddd ddsdsd sdsdsrrs  sasewe  dad',
  },
  {
    id:4,
    avatar: AVTR4 ,
    name: 'Nine Ements',
    review: 'Sed sint similique fugit temporibus aspdddd ddsdsd sdsdsrrs  sasewe  dad',
  },
]


function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review FromClients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
           >

        {
          data.map(({id, avatar, name, review}) => {
            return(
              <SwiperSlide key={id}  className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} alt='Avatar pic' />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
            </SwiperSlide>
            )
            })
        }       
      </Swiper>

    </section>
  )
}

export default Testimonials