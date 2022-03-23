import React from 'react';

import imgAbout from '../../assets/img/bloco_services.svg'
import { Button } from '../../components/Button/Button'
import {Container} from './AboutStyle'

const About = () => {
    return ( 
        <Container id="about">
            <div>
                <img src={imgAbout} alt="About" />
                <div className="content">
                    <h2>The best services ready To serve you</h2>
                    <p>
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts.
                    </p>

                    <p>
                        Separated they live in Bookmarksgrove right at the coast of the
                        Semantics, a large language ocean.
                    </p>

                    <p>
                        A small river named Duden flows by their place and supplies it with
                        the necessary regelialia.
                    </p>

                    <Button>Know more</Button>
                </div>
            </div>
        </Container>
     );
}
 
export default About;