'use client';
import React from 'react';
import styled, { css } from 'styled-components';
import NavbarItem from './NavbarItem';
import { Sling as Hamburger } from 'hamburger-react'

{/* <Button $primary>Primary Button</Button> */}

// const Navbar: React.FC = () => {
//   return (
//     <div className='flex justify-center'>
//       <NavbarItem title="Trending" param="fetchTrending" />
//       <NavbarItem title="Top Rated" param="fetchTopRated" />
//     </div>
//   );
// }

import { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 right-0 z-50 p-6">
        <button onClick={() => setIsOpen(!isOpen)}>
          {/* {isOpen ? <CloseIcon /> : <HamburgerIcon />} */}
          <Hamburger color="#4FD1C5" toggled={isOpen} toggle={setIsOpen} />
        </button>
      </div>

      <div className={`${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'} fixed inset-0 z-40 bg-blue-200 flex flex-col items-center justify-center space-y-4 overflow-y-auto transition-all duration-500 ease-in-out transform`}>
        <a href="#" className="text-2xl text-white">Home</a>
        <a href="#" className="text-2xl text-white">About</a>
        <a href="#" className="text-2xl text-white">Services</a>
        <a href="#" className="text-2xl text-white">Contact</a>
        <a href="#" className="text-2xl text-white">Home</a>
        <a href="#" className="text-2xl text-white">About</a>
        <a href="#" className="text-2xl text-white">Services</a>
        <a href="#" className="text-2xl text-white">Contact</a>
        <a href="#" className=" bg-white py-2 px-4 rounded-full">Link Button</a>
      </div>
    </>
  );
}
