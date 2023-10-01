import React from 'react';
import NavItem from './NavItem';
import NavDropdownItem from './NavDropdownItem';
import KKPLButton from '../shared/KKPLButton';

const Header = () => {
  // rendering the header component here
  return (
    <header className='fixed top-0 bg-KKPL-dark-purple h-20 w-full'>
      <div className='w-4/5 mx-auto flex items-center justify-between h-full'>
        <h1 className='text-KKPL-light-red font-extrabold text-2xl'>
          KK
          <span className='text-KKPL-light-blue text-base'>PL</span>
        </h1>

        <nav className='flex items-center space-x-5'>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
