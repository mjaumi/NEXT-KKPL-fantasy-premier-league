import SectionTitle from '@/components/shared/SectionTitle';
import { Metadata } from 'next';

// defining match center page metadata here
export const metadata: Metadata = {
  title: 'Match Center || Khawondar Kha Premier League',
  description: `khawondar kha premier league's match center page`,
};

export default function MatchCenterPage() {
  // rendering match center page here
  return <SectionTitle title='Match Center' />;
}
