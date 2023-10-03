import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import TopPerformerCard from './TopPerformerCard';
import {
  topBatsmanData,
  topBowlerData,
  topTeamData,
} from '@/constants/topPerformersData';

const TopPerformers = () => {
  // rendering top performers section component here
  return (
    <section className='py-20 mt-20 bg-KKPL-dark-purple'>
      <div className='w-[90%] lg:w-4/5 max-w-[1500px] mx-auto space-y-10'>
        <SectionTitle title='top performers' />

        <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 xl:gap-12'>
          <TopPerformerCard
            title='Batsman'
            name={{
              firstName: 'Babar',
              lastName: 'Azam',
            }}
            imgSrc='https://resources.pulse.icc-cricket.com/players/210/2759.png'
            stats={topBatsmanData}
            imgStyle='2xl:-mr-8 w-[190px]'
            additionalClassName='2xl:mt-32'
          />
          <TopPerformerCard
            title='Team'
            name={{
              firstName: 'Gopalganj',
              lastName: 'Kumrar Begunis',
            }}
            imgSrc='/assets/images/natore.png'
            stats={topTeamData}
            borderColor='border-KKPL-light-blue'
            textColor='text-KKPL-light-blue'
            hasPriority
            imgStyle='w-[100px] h-[100px] md:w-[120px] md:h-[120px] xl:w-[150px] xl:h-[150px] mr-5 mb-5'
            additionalClassName='2xl:mb-32'
          />
          <TopPerformerCard
            title='Bowler'
            name={{
              firstName: 'Mujeeb',
              lastName: 'Ur Rahman',
            }}
            imgSrc='https://resources.pulse.icc-cricket.com/players/210/4572.png'
            stats={topBowlerData}
            imgStyle='2xl:-mr-8 w-[190px]'
            additionalClassName='2xl:mt-32 col-span-1 md:col-span-2 2xl:col-span-1'
          />
        </div>
      </div>
    </section>
  );
};

export default TopPerformers;
