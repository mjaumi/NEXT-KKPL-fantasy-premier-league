import SigninForm from '@/components/SigninComponents/SigninForm';
import { Metadata } from 'next';

// defining sign in page metadata here
export const metadata: Metadata = {
  title: 'Sign In || Khawondar Kha Premier League',
  description: `khawondar kha premier league's sign in page`,
};

export default function SigninPage() {
  // rendering the signin page here
  return (
    <>
      <SigninForm />
    </>
  );
}
