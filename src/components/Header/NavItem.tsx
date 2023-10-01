import Link from 'next/link';
import { hrtime } from 'process';
import React from 'react';

// nav button datatype here
interface INavButton {
  children: React.ReactNode;
  href: string;
}

const NavItem = ({ children, href }: INavButton) => {
  // rendering nav bar item components here
  return (
    <Link
      href={href}
      className='block uppercase font-bold cursor-pointer hover:text-KKPL-light-red duration-300'
    >
      {children}
    </Link>
  );
};

export default NavItem;
