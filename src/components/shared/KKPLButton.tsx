import React from 'react';

// button's datatype declared here
interface IButton {
  children: React.ReactNode;
  onCLick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  bgColor?: string;
  additionalClassNames?: string;
}

const KKPLButton = ({
  children,
  onCLick,
  type,
  bgColor,
  additionalClassNames,
}: IButton) => {
  // rendering trademark button component here
  return (
    <button
      type={type ? type : 'button'}
      onClick={onCLick}
      className={`relative px-8 py-3 font-semibold uppercase border-2 after:absolute after:h-full after:w-full after:left-0 after:top-0 after:origin-right hover:after:scale-x-0 after:duration-500 ${
        bgColor ? bgColor : 'border-KKPL-light-red after:bg-KKPL-light-red'
      } ${additionalClassNames}`}
    >
      <span className='relative flex items-center z-10 space-x-2'>
        {children}
      </span>
    </button>
  );
};

export default KKPLButton;
