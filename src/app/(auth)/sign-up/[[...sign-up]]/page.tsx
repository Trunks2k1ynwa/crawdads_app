import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <section className='flex items-center justify-center h-screen w-full'>
      <SignUp path='/sign-up' />;
    </section>
  );
}
