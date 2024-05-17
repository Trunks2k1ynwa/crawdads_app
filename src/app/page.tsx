import Navbar from '@/components/ui/common/Navbar';
import { LampDemo } from '@/components/ui/lamp';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Navbar />
      <LampDemo />
    </main>
  );
}
