import { Metadata } from 'next';

// defining create new player page metadata here
export const metadata: Metadata = {
  title: 'Create New Player || Khawondar Kha Premier League',
  description: `khawondar kha premier league's create new player page`,
};

export default function CreatePlayerPage() {
  // rendering the create player page here
  return (
    <>
      <p>Add new Player here</p>
    </>
  );
}
