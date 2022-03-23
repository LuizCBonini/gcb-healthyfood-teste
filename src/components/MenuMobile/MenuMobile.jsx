import {useEffect} from 'react';

//Ícone
import {IoClose} from 'react-icons/io5';

import {Container} from './MenuMobileStyle';


export function MenuMobile ({menuIsVisible, setMenuIsVisible}) {
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);
    return (
        <Container isVisible={menuIsVisible}>
            <IoClose size={45} onClick={() => setMenuIsVisible(false)}/>
            <nav>
                <a href="#recipes" onClick={() => setMenuIsVisible(false)}>healthy recipes</a>
                <a href="#blog" onClick={() => setMenuIsVisible(false)}>blog</a>
                <a href="#join" onClick={() => setMenuIsVisible(false)}>join</a>
            </nav>
        </Container>
    )
}