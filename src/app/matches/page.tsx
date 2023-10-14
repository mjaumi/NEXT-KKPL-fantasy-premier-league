import MatchCard from '@/components/shared/Cards/MatchCard';
import SectionTitle from '@/components/shared/SectionTitle';
import { match2CardData } from '@/constants/matchCardData';
import { Metadata } from 'next';

// defining play match page metadata here
export const metadata: Metadata = {
  title: 'Matches || Khawondar Kha Premier League',
  description: `khawondar kha premier league's matches page`,
};

export default function MatchesPage() {
  // rendering the play match page here
  return (
    <section className='pb-20 w-[90%] lg:w-4/5 max-w-[1500px] mx-auto space-y-10'>
      <SectionTitle title='Upcoming Matches' />

      <div className='space-y-8'>
        <MatchCard matchData={match2CardData} />
        <MatchCard matchData={match2CardData} />
        <MatchCard matchData={match2CardData} />
        <MatchCard matchData={match2CardData} />
        <MatchCard matchData={match2CardData} />
      </div>
    </section>
  );
}
