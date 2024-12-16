import type { Session } from 'next-auth';
import { SaveDialog, ShareDialog } from '../DetailsHeader';
import { Button } from '../ui/button';
import { HeartIcon } from 'lucide-react';
import Image from 'next/image';

type PropsDetailContainer = {
  cover_image: string;
  title: string;
  session: Session | null;
  children: React.ReactNode;
};

async function DetailContainer({
  cover_image,
  title,
  session,
  children,
}: PropsDetailContainer) {
  return (
    <>
      {/* <BreadcrumbBackNavigation /> */}
      <section className='flex justify-between sm:flex-row sm:items-center pb-4 sm:pb-8'>
        <div>
          <h1 className='text-xl lg:text-3xl capitalize font-semibold tracking-tight'>
            {title}
          </h1>
          <p className='text-gray-500 dark:text-gray-400 text-base'></p>
        </div>
        <nav className='flex items-center justify-center gap-1 sm:ml-auto'>
          <ShareDialog title={title} hashtags={['house', 'single']} />

          {!session ? (
            <SaveDialog />
          ) : (
            <Button className='rounded-md gap-1' size='sm' variant='ghost'>
              <HeartIcon className='w-4 h-4' />
              Share
            </Button>
          )}
        </nav>
      </section>
      <Image
        src={cover_image}
        alt={`${title} in hildhome`}
        height={500}
        width={800}
        className='h-[40vh] md:h-[50vh] lg:h-[60vh] w-full mb-5 object-cover rounded-md'
        priority
        sizes='(min-width: 1200px) 1056px, (min-width: 780px) calc(85vw + 53px), 100vw'
      />

      {children}
    </>
  );
}

export default DetailContainer;
