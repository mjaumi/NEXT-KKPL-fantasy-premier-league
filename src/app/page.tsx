import ComingUpNext from '@/components/HomeComponents/ComingUpNext';
import TopPerformers from '@/components/HomeComponents/TopPerformers';
import UpcomingMatches from '@/components/HomeComponents/UpcomingMatches';

export default function HomePage() {
  // rendering the homepage here
  return (
    <>
      <ComingUpNext />
      <TopPerformers />
      <UpcomingMatches />
    </>
  );
}
