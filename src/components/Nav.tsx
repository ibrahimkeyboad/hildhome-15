'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const links = [
  {
    name: 'All',
    link: '/',
  },
  // {
  //   name: 'NHC',
  //   link: '/nhc',
  // },
  {
    name: 'Apartments',
    link: '/apartments',
  },
  {
    name: 'Houses',
    link: '/houses',
  },

  {
    name: 'Business Spaces',
    link: '/business-spaces',
  },
  // {
  //   name: 'Hostels',
  //   link: '/hostels',
  // },
  // {
  //   name: 'Geust Houses',
  //   link: '/geusthouses',
  // },
  // {
  //   name: 'Lodges',
  //   link: '/lodges',
  // },
];

function Nav() {
  const asPath = usePathname();

  return (
    <>
      {!asPath.includes('search') && (
        <nav className='my-1 pt-5 overflow-hidden'>
          <Carousel
            opts={{
              align: 'start',
            }}
            className='w-full mx-4 m-0 sm:mx-auto sm:max-w-xl '>
            <CarouselContent className='gap-3 md:gap-10 ml-0'>
              {links.map((link) => (
                <CarouselItem key={link.link} className='basis-auto'>
                  <Link
                    key={link.name}
                    className={cn(
                      'whitespace-nowrap text-slate-600 hover:bg-primary/15 hover:text-primary/80 text-base px-3 py-1.5 font-medium rounded-md inline-block duration-100 transition-all border-transparent',
                      asPath === link.link &&
                        'bg-primary/15 font-semibold text-primary/90 '
                    )}
                    href={link.link}>
                    {link.name}
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious className='md:hidden' /> */}
            {/* <CarouselNext className='md:hidden' /> */}
          </Carousel>
        </nav>
      )}
    </>
  );
}

export default Nav;
