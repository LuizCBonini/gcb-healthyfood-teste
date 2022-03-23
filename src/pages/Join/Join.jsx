import React from 'react';

import joinImage from '../../assets/img/bloco_final_image.svg';
import { Button } from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { Container } from './JoinStyle';

const Join = () => {
  return (
    <Container id="join">
      <div>
        <div className="content">
          <h2>Join our membership to get special offer</h2>
          <div className="form-controls">
            <Input placeholder="Enter your email address" />
            <Button>Join</Button>
          </div>
        </div>
        <img src={joinImage} alt="Join us" />
      </div>
    </Container>
  );
};

export default Join ;