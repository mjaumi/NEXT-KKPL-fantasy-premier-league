import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import MatchCard from '../shared/Cards/MatchCard';
import { match1CardData, match2CardData } from '@/constants/matchCardData';

const UpcomingMatches = () => {
  // rendering upcoming matches component here
  return (
    <section className='w-[90%] lg:w-4/5 max-w-[1500px] mx-auto py-20 space-y-10'>
      <SectionTitle title='Upcoming Matches' />

      <div className='space-y-8'>
        <MatchCard matchData={match1CardData} />
        <MatchCard matchData={match2CardData} />
      </div>
    </section>
  );
};

export default UpcomingMatches;
