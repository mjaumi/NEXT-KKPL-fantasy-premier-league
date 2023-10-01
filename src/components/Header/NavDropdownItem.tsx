import Link from 'next/link';
import React from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';

// dropdown nav button datatype here
interface IDropDown {
  children: React.ReactNode;
  menu: Array<string>;
}

const NavDropdownItem = ({ children, menu }: IDropDown) => {
  // rendering nav button with dropdown menu component here
  return (
    <div className='group relative'>
      <button className='group uppercase font-bold cursor-pointer hover:text-KKPL-light-red duration-300'>
        <div className='flex items-center'>
          {children}
          <BsFillCaretDownFill className='h-5 w-5 ml-2 group-hover:-rotate-180 duration-300' />
        </div>
      </button>

      <div className='scale-y-0 origin-top group-hover:scale-y-100 absolute bg-white w-[150px] top-[120%] left-1/2 -translate-x-1/2 text-KKPL-dark-blue duration-300'>
        {menu.map((menuItem: string, index: number) =>
          index ? (
            <Link
              key={index}
              className={`block w-full p-2 text-center uppercase font-bold hover:bg-KKPL-light-grey duration-300 ${
                index && 'border-t border-KKPL-light-grey'
              }`}
              href={`/add-${menuItem}`}
            >
              {menuItem}
            </Link>
          ) : (
            <button
              key={index}
              className='block w-full p-2 text-center uppercase font-bold hover:bg-KKPL-light-grey duration-300'
            >
              {menuItem}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default NavDropdownItem;
