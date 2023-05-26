"use client";
import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import NavbarItem from "./NavbarItem";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import dynamic from "next/dynamic";

const OverlayMenu = dynamic(() => import("./OverlayMenu"), {
  ssr: false,
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleClick = (e: HTMLAnchorElement) => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 right-0 z-50 pt-4 pr-4">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Hamburger color="#8094FF" toggled={isOpen} toggle={setIsOpen} />
        </button>
      </div>

      {hasMounted && <OverlayMenu isOpen={isOpen} handleClick={handleClick} />}
    </>
  );
}
