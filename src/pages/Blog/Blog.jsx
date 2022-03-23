import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper";

// imagens dos blogs
import itemImage from '../../assets/img/blog_image_1.svg';
import itemImage2 from '../../assets/img/bloco_image_2.svg';
import itemImage3 from '../../assets/img/bloco_image_3.svg';
import itemImage4 from '../../assets/img/bloco_image_4.svg';

// fotos de avatares
import person1 from '../../assets/img/person_1.jpg'
import person2 from '../../assets/img/person_2.jpg'
import person3 from '../../assets/img/person_3.jpg'
import person4 from '../../assets/img/person_4.jpg'

import { Card } from '../../components/Card/Card';
import { Container } from './BlogStyles';

export default function Blog() {
  return (
    <Container id="blog">
        <header>
            <h2>Read Our Blog</h2>
            <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
            </p>
        </header>

        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
        >
            <SwiperSlide>
                <Card
                    text="Quick-start guide to nuts and seeds"
                    imageSrc={itemImage}
                    direction="column"
                >
                    <div>
                        <img src={person1} alt="Linus Torvalds" />
                        <span>Linus Torvalds</span>
                    </div>
                </Card>
            </SwiperSlide>
        
            <SwiperSlide>
                <Card
                    text="Nutrition: Tips for Improving Your Health"
                    imageSrc={itemImage2}
                    direction='column'
                >
                    <div>
                        <img src={person2} alt="Sasha Bishop" />
                        <span>Sasha Bishop</span>
                    </div>
                </Card>
            </SwiperSlide>

            <SwiperSlide>
                <Card
                    text="The top 10 benefits of eating healthy"
                    imageSrc={itemImage3}
                    direction="column"
                >
                    <div>
                        <img src={person3} alt="Zoë Saldaña" />
                        <span>Zoë Saldaña</span>
                    </div>
                </Card>
            </SwiperSlide>
            
            <SwiperSlide>
                <Card
                    text="What makes a healthy diet?"
                    imageSrc={itemImage4}
                    direction="column"
                >
                    <div>
                        <img src={person4} alt="Mike Jackson" />
                        <span>Mike Jackson</span>
                    </div>
                </Card>
            </SwiperSlide>
        </Swiper>
    </Container>
  );
}



