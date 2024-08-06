import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '../index.css';
import industrialImage1 from '../assets/images/industrial/home.png';
import industrialImage2 from '../assets/images/industrial/home.png';
import industrialImage3 from '../assets/images/industrial/home.png';
import industrialImage4 from '../assets/images/industrial/home.png';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Box, Container } from '@mui/material';
import Header from './global/Header';
import Footer from './global/Footer';

function Slider1() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div>
        <Header/>
            <>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    <SwiperSlide>
                        <img src={industrialImage1} alt="Industrial 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={industrialImage2} alt="Industrial 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={industrialImage3} alt="Industrial 3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={industrialImage4} alt="Industrial 4" />
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={industrialImage1} alt="Industrial 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={industrialImage2} alt="Industrial 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={industrialImage3} alt="Industrial 3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={industrialImage4} alt="Industrial 4" />
                    </SwiperSlide>
                </Swiper>

                <Container sx={{marginTop:"50px"}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.573466534464!2d72.77065567520212!3d21.2090965815604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d907f31dadf%3A0xe67098a1c7e3b387!2sRajhans%20Apple!5e0!3m2!1sen!2sin!4v1722572881497!5m2!1sen!2sin" width="100%" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{border:"10px solid white"}}></iframe>
                </Container>
            </>
            <Footer/>
        </div>
    );
}

export default Slider1;