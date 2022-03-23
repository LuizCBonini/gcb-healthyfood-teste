import React from 'react';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper";

import {HeaderContainer} from './RecipesStyle' 
import {CardContainer} from './RecipesStyle' 

import {Card} from '../../components/Card/Card';
import Recipe1 from '../../assets/img/comida_1.svg';
import Recipe2 from '../../assets/img/comida_2.svg';
import Recipe3 from '../../assets/img/comida_3.svg';
import Recipe4 from '../../assets/img/comida_4.svg';
import { Button } from '../../components/Button/Button';

const Recipes = () => {
    return ( 
        <>
            <HeaderContainer id='recipes'>
                <header>
                    <h2>Our Best Recipes</h2>
                    <p>
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts.
                    </p>
                </header>
            </HeaderContainer>

            <CardContainer >
                <div className='card-list'>
                    <Card imageSrc={Recipe1} text="Broccoli Salad with Bacon" children={<Button>See Recipes</Button>}/>
                    <Card imageSrc={Recipe2} text="Classic Beef Burgers" children={<Button>See Recipes</Button>}/>
                    <Card imageSrc={Recipe3} text="Classic Potato Salad" children={<Button>See Recipes</Button>}/>
                    <Card imageSrc={Recipe4} text="Cherry Cobbler on the Grill" children={<Button>See Recipes</Button>}/>
                </div>

                <div className='card-slider'>
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
                            <Card imageSrc={Recipe1} text="Broccoli Salad with Bacon" children={<Button>See Recipes</Button>} direction="column"/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card imageSrc={Recipe2} text="Classic Beef Burgers" children={<Button>See Recipes</Button>} direction="column" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card imageSrc={Recipe3} text="Classic Potato Salad" children={<Button>See Recipes</Button>} direction="column" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card imageSrc={Recipe4} text="Cherry Cobbler on the Grill" children={<Button>See Recipes</Button>} direction="column" />
                        </SwiperSlide>
                            
                    </Swiper>
                </div>

            </CardContainer>
        </>
     );
}
 
export default Recipes;