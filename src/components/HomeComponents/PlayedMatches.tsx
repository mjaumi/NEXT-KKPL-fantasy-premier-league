import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import MatchCard from '../shared/Cards/MatchCard';
import { match1CardData } from '@/constants/matchCardData';
import KKPLButton from '../shared/KKPLButton';
import { BsArrowRight } from 'react-icons/bs';

const PlayedMatches = () => {
  // rendering played matches component here
  return (
    <section className='bg-KKPL-dark-purple py-20'>
      <div className='relative w-[90%] lg:w-4/5 max-w-[1500px] mx-auto space-y-10'>
        <SectionTitle title='Played Matches' />
        <div className='space-y-8'>
          <MatchCard matchData={match1CardData} />
          <MatchCard matchData={match1CardData} />
          <MatchCard matchData={match1CardData} />
          <MatchCard matchData={match1CardData} />
          <MatchCard matchData={match1CardData} />
        </div>

        <div className='absolute h-2/5 w-full bottom-0 bg-gradient-to-t from-KKPL-dark-purple z-20 to-transparent flex justify-center items-end'>
          <KKPLButton>
            view all played matches
            <BsArrowRight className='w-7 h-7 ml-2' />
          </KKPLButton>
        </div>
      </div>
    </section>
  );
};

export default PlayedMatches;
