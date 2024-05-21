import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <section className='flex items-center justify-center h-screen w-full'>
      <SignIn path='/sign-in' />
    </section>
  );
}
