import React from 'react';

import { Container } from './FullPagesStyle';

import About from "../About/About";
import Blog from "../Blog/Blog";
import Header from "../Header/Header";
import Lading from "../Landing/Landing";
import Recipes from "../Recipes/Recipes";
import Join from '../Join/Join';
import Footer from '../Footer/Footer';

const FullPages = () => {
    return ( 
        <Container>
            <Header/>
            <Lading/>
            <Recipes/>
            <About/>
            <Blog/>
            <Join/>
            <Footer/>
        </Container>
     );
}
 
export default FullPages;