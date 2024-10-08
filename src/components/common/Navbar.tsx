import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Navbar = async () => {
  const router = useRouter();
  const authUser = await currentUser();
  const name = 'ffffffff';

  return (
    <header className='fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between'>
      <aside className='flex items-center gap-[2px] cursor-pointer' onClick={() => router.push('/')}>
        <p className='text-3xl font-bold text-red-600'>SHA</p>
        <Image src='/fuzzieLogo.png' width={15} height={25} alt='fuzzie logo' className='shadow-sm' />
        <p className='text-3xl font-bold text-red-600'>AM!</p>
      </aside>
      <nav className='hidden lg:block'>
        <ul className='flex items-center gap-4 list-none'>
          <li>
            <Link rel='stylesheet' href=''>
              Products
            </Link>
          </li>
          <li>
            <Link rel='stylesheet' href=''>
              Pricing
            </Link>
          </li>
          <li>
            <Link rel='stylesheet' href=''>
              Clients
            </Link>
          </li>
          <li>
            <Link rel='stylesheet' href=''>
              Resources
            </Link>
          </li>
          <li>
            <Link rel='stylesheet' href=''>
              Documentation
            </Link>
          </li>
          <li>
            <Link rel='stylesheet' href=''>
              Enterprise
            </Link>
          </li>
        </ul>
      </nav>
      <aside className='flex items-center gap-4'>
        <Link
          href={authUser ? '/dashboard' : 'sign-in'}
          className='relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
        >
          <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
          <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
            {authUser ? 'Dashboard' : 'Get Started'}
          </span>
        </Link>
        <UserButton />
        <MenuIcon className='lg:hidden block cursor-pointer' />
      </aside>
    </header>
  );
};

export default Navbar;
