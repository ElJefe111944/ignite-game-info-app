import React from 'react';
// animations & styling 
import styled from 'styled-components';
import { motion } from 'framer-motion';
// assets 
import logo from '../assets/logo.svg';

function Navbar() {
  return (
      <StyledNav>
          <Logo>
              <img src={logo} alt="logo" />
              <h1>Ignite</h1>
          </Logo>
          <div className="search">
            <input type="text" />
            <button>Search</button>
          </div>
      </StyledNav>
  )
}

const StyledNav = styled(motion.nav)`

`;
const Logo = styled(motion.div)`

`;

export default Navbar