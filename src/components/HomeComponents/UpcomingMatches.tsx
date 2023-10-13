import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import SectionTitle from '../shared/SectionTitle';
import MatchCard from '../shared/Cards/MatchCard';
import { match2CardData } from '@/constants/matchCardData';
import KKPLLinkButton from '../shared/Buttons/KKPLLinkButton';

const UpcomingMatches = () => {
  // rendering upcoming matches component here
  return (
    <section className='py-20 space-y-10'>
      <div className='relative w-[90%] lg:w-4/5 max-w-[1500px] mx-auto space-y-10'>
        <SectionTitle title='Upcoming Matches' />

        <div className='space-y-8'>
          <MatchCard matchData={match2CardData} />
          <MatchCard matchData={match2CardData} />
          <MatchCard matchData={match2CardData} />
          <MatchCard matchData={match2CardData} />
          <MatchCard matchData={match2CardData} />
        </div>

        <div className='absolute h-2/5 w-full bottom-0 bg-gradient-to-t from-KKPL-dark-blue z-20 to-transparent flex justify-center items-end'>
          <KKPLLinkButton href='/matches' additionalClassNames='py-3'>
            view all upcoming matches
            <BsArrowRight className='w-7 h-7 ml-2' />
          </KKPLLinkButton>
        </div>
      </div>
    </section>
  );
};

export default UpcomingMatches;
