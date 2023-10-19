import React from 'react';
import { BsClock, BsArrowRight } from 'react-icons/bs';
import KKPLImage from '../shared/KKPLImage';
import SectionTitle from '../shared/SectionTitle';
import StadiumIcon from '../shared/StadiumIcon';
import KKPLButton from '../shared/Buttons/KKPLButton';
import KKPLLinkButton from '../shared/Buttons/KKPLLinkButton';

const ComingUpNext = () => {
  // rendering coming up next match component here
  return (
    <section className='w-[90%] lg:w-4/5 max-w-[1500px] mx-auto'>
      <SectionTitle title='Coming up next' />

      <div className='border-2 border-KKPL-light-red bg-KKPL-dark-purple p-3 md:p-5 mt-8 rounded-xl space-y-8'>
        <div>
          <h2 className='text-xl md:text-2xl font-semibold text-KKPL-light-blue'>
            Match #01
          </h2>
        </div>

        <div className='flex flex-col md:flex-row justify-between md:w-5/6 xl:w-4/6 mx-auto space-y-5 md:space-y-0'>
          <div className='min-h-full flex flex-col justify-between'>
            <div className='w-[100px] lg:w-[200px] mx-auto'>
              <KKPLImage
                src='/assets/images/khulna.png'
                alt='khulna logo'
                priority
              />
            </div>
            <h3 className='mt-5 text-center text-lg lg:text-2xl font-light'>
              Khulna <br /> Chingris
            </h3>
          </div>

          <div className='flex flex-col items-center text-center justify-center space-y-3'>
            <h3 className='text-3xl font-extrabold text-KKPL-light-red italic'>
              VS
            </h3>
            <div className='hidden md:flex flex-col items-center text-center justify-center space-y-3'>
              <p className='flex items-center text-xs md:text-sm'>
                <BsClock className='w-4 h-4 mr-2' />
                MAY, MON 29, 02:30 pm BST
              </p>
              <div className='flex flex-col items-center'>
                <StadiumIcon className='fill-white h-24 w-24' />
                <p className='-mt-7 text-sm'>
                  Narendra Modi Stadium, Ahmedabad
                </p>
              </div>
            </div>
          </div>

          <div className='min-h-full flex flex-col justify-between'>
            <div className='w-[100px] lg:w-[200px] mx-auto'>
              <KKPLImage
                src='/assets/images/natore.png'
                alt='Natore logo'
                priority
              />
            </div>
            <h3 className='mt-5 text-center text-lg lg:text-2xl font-light'>
              Natore <br /> Kachagollas
            </h3>
          </div>

          <div className='flex md:hidden flex-col items-center text-center justify-center space-y-3 py-5'>
            <p className='flex items-center text-xs md:text-sm'>
              <BsClock className='w-4 h-4 mr-2' />
              MAY, MON 29, 02:30 pm BST
            </p>
            <div className='flex flex-col items-center'>
              <StadiumIcon className='fill-white h-24 w-24' />
              <p className='-mt-7 text-sm'>Narendra Modi Stadium, Ahmedabad</p>
            </div>
          </div>
        </div>

        <div className='flex justify-end'>
          <KKPLLinkButton href='/live-match' additionalClassNames='py-3'>
            <p>Play Match</p>
            <BsArrowRight className='w-7 h-7' />
          </KKPLLinkButton>
        </div>
      </div>
    </section>
  );
};

export default ComingUpNext;
