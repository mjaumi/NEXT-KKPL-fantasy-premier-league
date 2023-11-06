import SectionTitle from '@/components/shared/SectionTitle';
import { Metadata } from 'next';

// defining live match page metadata here
export const metadata: Metadata = {
  title: 'Statistics || Khawondar Kha Premier League',
  description: `khawondar kha premier league's statistics page`,
};

export default function StatisticsPage() {
  // rendering statistics page here
  return (
    <section className='w-[90%] lg:w-4/5 max-w-[1500px] mx-auto'>
      <SectionTitle title='Statistics' />
    </section>
  );
}
