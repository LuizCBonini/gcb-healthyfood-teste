import React from 'react';
import {FiMenu} from 'react-icons/fi'
import { useState } from 'react';


import {Container} from './HeaderStyle'

import Register from '../Register/Register';
import { MenuMobile } from '../../components/MenuMobile/MenuMobile';

const Header = () => {

    //Caixa de registro
    const [registerBox, setRegisterBox] = useState(false);

    //Menu Hamburguer
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return ( 
        
        <>
            <MenuMobile
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />
            <Container>
                <Register show={registerBox} setShow={setRegisterBox} />
                <a href="#landing">
                    <h2 className="logotype">Healthy Food</h2>
                </a>
                
                <div>
                    <nav className='nav-bar'>
                        <ul className='menu'>
                            <a href="#recipes">
                                <li>
                                    <span>healthy recipes</span>
                                </li>
                            </a>
                            <a href="#blog">
                                <li>
                                    <span>blog</span>
                                </li>
                            </a>
                            <a href="#join">
                                <li>
                                    <span>join</span>
                                </li>
                            </a>
                            <li><button onClick={() => setRegisterBox(true)}>Register</button></li>
                            <li><FiMenu onClick={() => setMenuIsVisible(true)} className='mobile'/></li>
                
                        </ul>
                    </nav>

                </div>
            </Container>
        </>   
     );
}
 
export default Header;