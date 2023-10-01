'use client';

import React, { useState } from 'react';
import NavItem from './NavItem';
import { HiMenuAlt1 } from 'react-icons/hi';
import KKPLButton from '../shared/KKPLButton';
import NavDropdownItem from './NavDropdownItem';

const MobileNavbar = () => {
  // integration of react hooks here
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  // rendering navbar for mobile component here
  return (
    <nav className='lg:hidden flex items-center space-x-5'>
      <button onClick={() => setIsShowMenu((state) => !state)}>
        <HiMenuAlt1 className='h-7 w-7 text-KKPL-light-blue' />
      </button>

      {isShowMenu && (
        <div className='absolute p-4 space-y-2 flex flex-col items-center left-0 top-0 w-full border'>
          <NavDropdownItem menu={['season', 'player', 'team']}>
            Create
          </NavDropdownItem>
          <NavItem href='/matches'>Matches</NavItem>
          <NavItem href='/results'>Results</NavItem>
          <NavItem href='/statistics'>Stats</NavItem>
          <NavItem href='/point-table'>points table</NavItem>
          <NavItem href='/teams'>Teams</NavItem>

          <KKPLButton
            bgColor='border-KKPL-light-blue after:bg-KKPL-light-blue'
            additionalClassNames='py-2'
          >
            log in
          </KKPLButton>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
