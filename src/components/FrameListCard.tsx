'use client';

import formatPrice from '@/utils/formatPrice';
import { MapIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { Badge } from './ui/badge';

function FrameListCard({ data }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  console.log(data);
  return (
    <article
      key={data.id}
      className='relative group overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 rounded-2xl'>
      <Link
        className='absolute inset-0 z-10'
        href={`/business-space/${data.id}`}>
        <span className='sr-only'>View</span>
      </Link>
      <div className='bg-gray-300 h-auto' ref={ref}>
        <Image
          alt={`${data.title} in hildhome`}
          className='object-cover w-full aspect-[4/3]'
          height={300}
          src={data.cover_image}
          width={400}
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity cubic-bezier(0.3, 0.2, 0.2, 0.2, 0.8)',
          }}
        />
      </div>
      <div className='grid gap-2 p-3'>
        <h3 className='text-lg font-bold'>{data.title}</h3>
        <address className='text-sm font-medium flex items-center gap-2'>
          <MapIcon className='w-4 h-4' />
          <span>
            {data.location.street}, {data.location.city}
          </span>
          {/* <span>1234 Market St, Arusha, Tanzania</span> */}
        </address>
        <h3 className='text-lg font-medium'>
          Tsh {formatPrice(data.price.priceAmount)}/ month
        </h3>

        <h4 className='text-lg font-semibold'>{data.size_sq_ft} sq ft</h4>
        <div>
          <h3 className='text-sm font-semibold mb-2'>Suitable for:</h3>
          <div className='flex flex-wrap gap-2'>
            {data.suitable_for?.map((item) => (
              <Badge key={item} variant='secondary'>
                {item}
              </Badge>
            ))}
          </div>
          {/* <div className='flex flex-wrap gap-2'>
            {['Small Businesses', 'Consultants', 'Therapists'].map((item) => (
              <Badge key={item} variant='secondary'>
                {item}
              </Badge>
            ))}
          </div> */}
        </div>

        {/* <p className='text-gray-500 dark:text-gray-400'>
            Includes water, garbage
          </p> */}
      </div>
    </article>
  );
}

export default FrameListCard;
