import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import KKPLButton from '../shared/KKPLButton';
import SectionTitle from '../shared/SectionTitle';
import MatchCard from '../shared/Cards/MatchCard';
import { match2CardData } from '@/constants/matchCardData';

const UpcomingMatches = () => {
  // rendering upcoming matches component here
  return (
    <section className='relative w-[90%] lg:w-4/5 max-w-[1500px] mx-auto py-20 mb-20 space-y-10'>
      <SectionTitle title='Upcoming Matches' />

      <div className='space-y-8'>
        <MatchCard matchData={match2CardData} />
        <MatchCard matchData={match2CardData} />
        <MatchCard matchData={match2CardData} />
        <MatchCard matchData={match2CardData} />
        <MatchCard matchData={match2CardData} />
      </div>

      <div className='absolute h-1/3 w-full bottom-0 bg-gradient-to-t from-KKPL-dark-blue z-20 to-transparent flex justify-center items-end'>
        <KKPLButton>
          view all upcoming matches
          <BsArrowRight className='w-7 h-7 ml-2' />
        </KKPLButton>
      </div>
    </section>
  );
};

export default UpcomingMatches;
