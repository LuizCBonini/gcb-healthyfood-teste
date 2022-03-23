import React from 'react';

import { Container } from './CardStyle';

const Card = (props) => {
  return (
    <Container $direction={props.direction}>
      
      <img src={props.imageSrc} alt={props.text}/>
      <div>
        <h3>{props.text}</h3>
        <div>{props.children}</div>
      </div>
      
    </Container>
  );
};

export { Card };