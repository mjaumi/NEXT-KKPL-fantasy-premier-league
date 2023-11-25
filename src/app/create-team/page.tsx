import SectionTitle from '@/components/shared/SectionTitle';
import { Metadata } from 'next';

// defining live match page metadata here
export const metadata: Metadata = {
  title: 'Create Team || Khawondar Kha Premier League',
  description: `khawondar kha premier league's create team page`,
};

export default function CreateTeamPage() {
  // rendering the create team page here
  return (
    <section>
      <SectionTitle title='Create New Team' />
    </section>
  );
}
