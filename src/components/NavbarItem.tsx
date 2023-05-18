'use client';
import Link from 'next/link';
import React from 'react'
import { useSearchParams } from 'next/navigation';

interface Props {
  title: string;
  param: string
}

const NavbarItem: React.FC<Props> = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  return (
    <div>
      <Link
        className={
          genre &&
          genre == param ?
            'underline' : ''
        }
        href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}

export default NavbarItem
