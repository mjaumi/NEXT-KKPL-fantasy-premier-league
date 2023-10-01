import React from 'react';
import NavItem from './NavItem';

const Header = () => {
  // rendering the header component here
  return (
    <header className='fixed top-0 bg-KKPL-dark-purple h-20 w-full'>
      <div className='w-4/5 mx-auto flex items-center justify-between h-full'>
        <h1 className='text-KKPL-light-red font-extrabold text-2xl'>
          KK
          <span className='text-KKPL-light-blue text-base'>PL</span>
        </h1>

        <nav>
          <NavItem>Create</NavItem>
          <NavItem>Matches</NavItem>
          <NavItem>Results</NavItem>
          <NavItem>Stats</NavItem>
          <NavItem>points table</NavItem>
          <NavItem>Teams</NavItem>
        </nav>
      </div>
    </header>
  );
};

export default Header;
