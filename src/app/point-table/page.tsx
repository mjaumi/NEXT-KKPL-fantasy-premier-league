import { Metadata } from 'next';

// defining live match page metadata here
export const metadata: Metadata = {
  title: 'Points Table || Khawondar Kha Premier League',
  description: `khawondar kha premier league's points table page`,
};

export default function PointsTablePage() {
  // rendering the points table page here
  return (
    <section className='w-[90%] lg:w-4/5 max-w-[1500px] mx-auto'>
      <h1>points table</h1>
    </section>
  );
}
