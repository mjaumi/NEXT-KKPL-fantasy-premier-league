import SectionTitle from '@/components/shared/SectionTitle';
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
    </section>
  );
}
