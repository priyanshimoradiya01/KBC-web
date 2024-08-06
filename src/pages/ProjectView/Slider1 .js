import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import Rectangle1 from '../../assets/images/ProjectView/Rectangle_1.png';
import slide1 from "../../assets/images/ProjectView/s_1.png"
import slide2 from "../../assets/images/ProjectView/s_2.png"
import slide3 from "../../assets/images/ProjectView/s_3.png"
import slide4 from "../../assets/images/ProjectView/s_4.png"
import slide5 from "../../assets/images/ProjectView/s_5.png"
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Box, Container, IconButton, Typography, useTheme } from '@mui/material';
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import BGimg from '../../assets/images/ProjectView/Rectangle Bg_img.png';
import zIndex from '@mui/material/styles/zIndex';

function Slider1() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const swiperRef = useRef(null);

    const arrowStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        zIndex: 1,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    };

    const NextArrow = ({ onClick }) => (
        <IconButton
            onClick={onClick}
            sx={{
                ...arrowStyle,
                right: '5px',
            }}
        >
            <EastRoundedIcon sx={{ color: '#000', fontSize: '24px' }} />
        </IconButton>
    );

    const PrevArrow = ({ onClick }) => (
        <IconButton
            onClick={onClick}
            sx={{
                ...arrowStyle,
                left: '5px',

            }}
        >
            <WestRoundedIcon sx={{ color: '#000', fontSize: '24px' }} />
        </IconButton>
    );

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <div >
            <Box sx={{ position: "relative", padding: { xs: "0 0", sm: "50px 0", md: "100px 0" } }}>
                <Box position={"absolute"} sx={{ bottom: "30%", transform: "translateY(-50%)" }}>
                    <img src={BGimg} alt="" style={{ maxWidth: "100%", height: "auto" }} />
                    <Typography sx={{
                        position: "absolute",
                        top: "10%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        fontSize: { xs: "18px", sm: "22px", md: "26px" },
                        color: "#fff"
                    }}>
                        Project Gallery
                    </Typography>
                </Box>
                <Swiper
                    ref={swiperRef}
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    spaceBetween={10}
                    navigation={false}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    <SwiperSlide >
                        <img src={slide1} alt="Industrial 1" style={{ width: "100%", height: "auto", borderRadius: "25px 25px 25px 25px" }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="Industrial 2" style={{ width: "100%", height: "auto", borderRadius: "25px 25px 25px 25px" }} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={slide3} alt="Industrial 3" style={{ width: "100%", height: "auto", borderRadius: "25px 25px 25px 25px" }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="Industrial 4" style={{ width: "100%", height: "auto", borderRadius: "25px 25px 25px 25px" }} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={slide5} alt="Industrial 4" style={{ width: "100%", height: "auto", borderRadius: "25px 25px 25px 25px" }} />
                    </SwiperSlide>

                    <NextArrow onClick={handleNext} />
                    <PrevArrow onClick={handlePrev} />
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={1}
                    slidesPerView={5}
                    navigation={false}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 3, spaceBetween: 30 },
                        1024: { slidesPerView: 5, spaceBetween: 40 },
                    }}
                >
                    <SwiperSlide>
                        <img src={slide1} alt="Industrial 1" style={{ width: "100%", height: "auto", aspectRatio: "1/1" }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="Industrial 2" style={{ width: "100%", height: "auto", aspectRatio: "1/1" }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="Industrial 3" style={{ width: "100%", height: "auto", aspectRatio: "1/1" }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="Industrial 4" style={{ width: "100%", height: "auto", aspectRatio: "1/1" }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="Industrial 4" style={{ width: "100%", height: "auto", aspectRatio: "1/1" }} />
                    </SwiperSlide>
                </Swiper>
            </Box>

            <Container sx={{ marginTop: '50px' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.573466534464!2d72.77065567520212!3d21.2090965815604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d907f31dadf%3A0xe67098a1c7e3b387!2sRajhans%20Apple!5e0!3m2!1sen!2sin!4v1722572881497!5m2!1sen!2sin" width="100%" height="550" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ border: '10px solid white' }}></iframe>
            </Container>
        </div>
    );
}

export default Slider1;