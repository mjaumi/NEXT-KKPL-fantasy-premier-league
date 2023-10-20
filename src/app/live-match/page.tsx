import SectionTitle from '@/components/shared/SectionTitle';
import { Metadata } from 'next';

// defining live match page metadata here
export const metadata: Metadata = {
  title: 'Live Match || Khawondar Kha Premier League',
  description: `khawondar kha premier league's live match page`,
};

export default function LiveMatchPage() {
  // rendering the live match page here
  return (
    <section className='w-[90%] lg:w-4/5 max-w-[1500px] mx-auto'>
      <SectionTitle title='live match' />
    </section>
  );
}
