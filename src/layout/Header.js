import React from 'react';
import Flex from '../components/Flex';

const Header = () => (
  <Flex
    boxShadow="md"
    backgroundColor="white"
    justifyContent="center"
    alignItems="center"
    padding="sm">
    <a href="/" title="Home">
      <img
        height="30px"
        src={process.env.PUBLIC_URL + '/HelloFreshLogo.png'}
        alt="HelloFresh Logo"
      />
    </a>
  </Flex>
);

export default Header;
