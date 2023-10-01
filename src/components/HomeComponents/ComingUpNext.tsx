import React from 'react';
import { BsClock, BsArrowRight } from 'react-icons/bs';
import KKPLImage from '../shared/KKPLImage';
import SectionTitle from '../shared/SectionTitle';
import StadiumIcon from '../shared/StadiumIcon';
import KKPLButton from '../shared/KKPLButton';

const ComingUpNext = () => {
  // rendering coming up next match component here
  return (
    <section className='w-4/5 mx-auto'>
      <SectionTitle title='Coming up next' />

      <div className='border-2 border-KKPL-light-red bg-KKPL-dark-purple p-5 mt-8 rounded-xl space-y-8'>
        <div>
          <h2 className='text-2xl font-semibold text-KKPL-light-blue'>
            Match #01
          </h2>
        </div>

        <div className='flex justify-between w-4/6 mx-auto'>
          <div className='w-[200px] flex flex-col justify-between'>
            <KKPLImage src='/assets/images/khulna.png' alt='khulna logo' />
            <h3 className='mt-5 text-center text-2xl font-light'>
              Khulna <br /> Chingris
            </h3>
          </div>
          <div className='flex flex-col items-center justify-center space-y-3'>
            <h3 className='text-3xl font-extrabold text-KKPL-light-red italic'>
              VS
            </h3>
            <p className='flex items-center text-sm'>
              <BsClock className='w-4 h-4 mr-2' />
              MAY, MON 29, 02:30 pm BST
            </p>
            <div className='flex flex-col items-center'>
              <StadiumIcon className='fill-white h-24 w-24' />
              <p className='-mt-7 text-sm'>Narendra Modi Stadium, Ahmedabad</p>
            </div>
          </div>
          <div className='w-[200px] flex flex-col justify-between'>
            <KKPLImage src='/assets/images/natore.png' alt='Natore logo' />
            <h3 className='mt-5 text-center text-2xl font-light'>
              Natore <br /> Kachagollas
            </h3>
          </div>
        </div>

        <div className='flex justify-end'>
          <KKPLButton>
            <p>Play Match</p>
            <BsArrowRight className='w-7 h-7' />
          </KKPLButton>
        </div>
      </div>
    </section>
  );
};

export default ComingUpNext;
