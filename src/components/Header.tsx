import dynamic from 'next/dynamic';

import { cn } from '@/lib/utils';
import Nav from './Nav';
import { auth } from '@/auth';
// import SearchBarMob from './SearchBarMob';
import { Skeleton } from './ui/skeleton';
import AuthLink from './auth/AuthLink';
import UserAvatar from './auth/UserAvatar';
import Logo from './Logo';

// const Searching = dynamic(() => import('./Searching'), {
//   loading: () => <Skeleton className='w-[40%] h-[30px] rounded-3xl' />,
// });

async function Header({ no }: { no?: boolean }) {
  const session = await auth();

  return (
    <>
      <header
        className={cn(
          'px-5 py-3 max-w-[1440px] bg0 m-auto flex flex-col',
          no && 'hidden md:flex'
        )}>
        <nav className=' py-3 justify-between pb-2 flex items-center md:px-9'>
          <Logo />

          {/* <Searching /> */}
          <div className='flex items-center gap-4'>
            {/* <SearchBarMob /> */}

            {session ? (
              <UserAvatar name={session?.user.name as string} />
            ) : (
              <div className='flex gap-4 items-center'>
                <AuthLink />
              </div>
            )}
          </div>
        </nav>
      </header>

      {!no && <Nav />}
    </>
  );
}

export default Header;
