import './testimonials.css';
import avt1 from '../../assets/code.jpg';
import avt2 from '../../assets/chess.jpg';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: avt1,
        title: 'DSA in C++',
        detail: 'Complete beginner to advanced data structure and algorithms in C++ by Prateek Narang'
    },
    {
        avatar: avt1,
        title: 'Javascript',
        detail: 'Complete Javascript for web development'
    },
    {
        avatar: avt2,
        title: 'Chess Winner',
        detail: 'Got First position in Chess competition held at Faculty of Engineering and Technology, Jamia Millia Islamia, New Delhi, India'
    },
    {
        avatar: avt2,
        title: 'Chess Winner',
        detail: 'Got First position in Chess competition held at Fazalur Rahman Khan hostel, Jamia Millia Islamia, New Delhi'
    }
]

const Testimonials = () => {
    return (
        <>
            <section id='testimonials'>
                <h5>What I achieved</h5>
                <h2>Achievements and Certifications</h2>

                <Swiper className='container testimonials_container'
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{clickable: true}}
                >
                   {
                       data.map(({avatar, title, detail}, index)=>{
                        return(
                            <SwiperSlide key={index} className='testimonial'>
                        <div className='avatar'>
                            <img src={avatar} alt={title} />
                        </div>
                        <h5 className='name'>{title}</h5>
                        <small className='detail'>{detail}</small>
                    </SwiperSlide>
                        )
                       })
                   }
                </Swiper>
            </section>
        </>
    )
}

export default Testimonials;