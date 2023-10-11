'use client';

import React, { useState } from 'react';
import NavItem from './NavItem';
import { HiMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import NavDropdownItem from './NavDropdownItem';
import KKPLLinkButton from '../shared/Buttons/KKPLLinkButton';

const MobileNavbar = () => {
  // integration of react hooks here
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  // rendering navbar for mobile component here
  return (
    <nav className='lg:hidden flex items-center'>
      <button onClick={() => setIsShowMenu(true)}>
        <HiMenuAlt1 className='h-7 w-7 text-KKPL-light-blue' />
      </button>

      <div
        className={`absolute p-4 pt-14 space-y-3 flex flex-col items-center left-0 -top-[400px] w-full bg-KKPL-dark-blue origin-top ${
          isShowMenu && 'top-0'
        } duration-300`}
      >
        <button
          onClick={() => setIsShowMenu(false)}
          className='absolute right-5 top-5'
        >
          <AiOutlineClose className='h-7 w-7' />
        </button>
        <NavDropdownItem menu={['season', 'player', 'team']}>
          Create
        </NavDropdownItem>
        <NavItem href='/matches'>Matches</NavItem>
        <NavItem href='/results'>Results</NavItem>
        <NavItem href='/statistics'>Stats</NavItem>
        <NavItem href='/point-table'>points table</NavItem>
        <NavItem href='/teams'>Teams</NavItem>

        <KKPLLinkButton
          href='/signin'
          bgColor='border-KKPL-light-blue after:bg-KKPL-light-blue'
          additionalClassNames='py-2'
        >
          sign in
        </KKPLLinkButton>
      </div>
    </nav>
  );
};

export default MobileNavbar;
