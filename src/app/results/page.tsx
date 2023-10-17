import MatchCard from '@/components/shared/Cards/MatchCard';
import SectionTitle from '@/components/shared/SectionTitle';
import { match1CardData } from '@/constants/matchCardData';
import { Metadata } from 'next';

// defining play match page metadata here
export const metadata: Metadata = {
  title: 'Results || Khawondar Kha Premier League',
  description: `khawondar kha premier league's results page`,
};

export default function ResultsPage() {
  // rendering the results page here
  return (
    <section className='pb-20 w-[90%] lg:w-4/5 max-w-[1500px] mx-auto space-y-10'>
      <SectionTitle title='Match Results' />

      <div className='space-y-8'>
        <MatchCard matchData={match1CardData} />
        <MatchCard matchData={match1CardData} />
        <MatchCard matchData={match1CardData} />
        <MatchCard matchData={match1CardData} />
        <MatchCard matchData={match1CardData} />
      </div>
    </section>
  );
}
