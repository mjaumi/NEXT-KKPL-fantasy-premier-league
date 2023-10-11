import Link from 'next/link';
import React from 'react';

// link button's datatype declared here
interface ILinkButton {
  children: React.ReactNode;
  href: string;
  bgColor?: string;
  additionalClassNames?: string;
}

const KKPLLinkButton = ({
  children,
  href,
  bgColor,
  additionalClassNames,
}: ILinkButton) => {
  // rendering custom link button component here
  return (
    <Link
      href={href}
      className={`relative px-8 font-semibold uppercase border-2 after:absolute after:h-full after:w-full after:left-0 after:top-0 after:origin-right hover:after:scale-x-0 after:duration-500 active:scale-90 duration-300 ${
        bgColor ? bgColor : 'border-KKPL-light-red after:bg-KKPL-light-red'
      } ${additionalClassNames}`}
    >
      <span className='relative flex justify-center items-center z-10 space-x-2'>
        {children}
      </span>
    </Link>
  );
};

export default KKPLLinkButton;
