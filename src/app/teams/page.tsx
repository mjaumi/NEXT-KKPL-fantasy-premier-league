import { Metadata } from 'next';

// defining live match page metadata here
export const metadata: Metadata = {
  title: 'Teams || Khawondar Kha Premier League',
  description: `khawondar kha premier league's teams page`,
};

export default function TeamsPage() {
  // rendering teams page here
  return (
    <section className='w-[90%] lg:w-4/5 max-w-[1500px] mx-auto'>
      <p>teams page</p>
    </section>
  );
}
