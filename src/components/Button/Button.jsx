import React from 'react';

import { Container } from './ButtonStyles';

const Button = ({children}) =>{
    return (
        <Container>
            <p>{children}</p>
        </Container>
    );
};

export { Button };