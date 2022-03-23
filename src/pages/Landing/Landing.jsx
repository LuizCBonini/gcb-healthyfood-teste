import React from 'react';
import { FiSearch } from 'react-icons/fi';

import {Button} from '../../components/Button/Button'
import { Container } from './LandingStyle';
import Input from '../../components/Input/Input'

import Illustration from '../../assets/img/Illustration.svg';

const Lading = () => {
    return ( 
        <Container id="landing">
            <div>
                <div className="content">
                    <h1>Ready for Trying a new recipe?</h1>
                        <div className="form-controls">
                            <Input type="text" placeholder="Search healthy foods" />
                            <Button className="button" type="button">
                                <FiSearch />
                            </Button>
                        </div>
                </div>
                <img src={Illustration} alt="healthy foods" />   
            </div>
        </Container>
     );
}
 
export default Lading;