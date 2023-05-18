import React from 'react';
import styled, { css } from 'styled-components';
import NavbarItem from './NavbarItem';

{/* <Button $primary>Primary Button</Button> */}

const Navbar: React.FC = () => {
  return (
    <div className='flex justify-center'>
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}

export default Navbar;
