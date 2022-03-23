import React from 'react';
import { MdCopyright } from 'react-icons/md';

import {Container} from './FooterStyle';

const Footer = () => {
  return (
    <Container>
      <p>
        <MdCopyright />
        Copyrights 2019 Stack. All Rights Reserved.
      </p>

      <ul>
        <a href="/">
          <li>Privacy Policy</li>
        </a>

        <a href="/">
          <li>Terms and Conditions</li>
        </a>
      </ul>
    </Container>
  );
};

export default Footer;