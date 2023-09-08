import Link from 'next/link';
import React from 'react';

const NavItem = ({ children }: { children: React.ReactNode }) => {
  // rendering nav bar item components here
  return (
    <Link
      href={''}
      className='uppercase font-bold cursor-pointer hover:text-KKPL-light-red duration-300 ml-5'
    >
      {children}
    </Link>
  );
};

export default NavItem;
