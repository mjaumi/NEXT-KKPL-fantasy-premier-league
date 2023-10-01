import React from 'react';

const KKPLButton = ({ children }: { children: React.ReactNode }) => {
  // rendering trademark button component here
  return (
    <button className='relative px-8 py-3 font-semibold uppercase border-2 border-KKPL-light-red after:absolute after:h-full after:w-full after:bg-KKPL-light-red after:left-0 after:top-0 after:origin-right hover:after:scale-x-0 after:duration-500'>
      <span className='relative flex items-center z-10 space-x-2'>
        {children}
      </span>
    </button>
  );
};

export default KKPLButton;
