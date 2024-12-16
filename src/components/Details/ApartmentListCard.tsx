'use client';

import formatPrice from '@/utils/formatPrice';
import { BathIcon, BedIcon, DoorOpen, MapIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

export function ApartmentListCard({ data }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  //Todo: change line height

  return (
    <article
      key={data.id}
      className='relative group cursor-pointer shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 overflow-hidden rounded-2xl'>
      <Link
        className='absolute inset-0 z-10'
        href={`/apartments/${data.building_ID}/potion/${data.id}`}>
        <span className='sr-only'>View</span>
      </Link>
      <div className='bg-gray-300 h-auto' ref={ref}>
        <Image
          priority
          alt={`${data.title} in hildhome`}
          className='object-cover w-full aspect-[4/3]'
          height={200}
          src={data.cover_image}
          width={300}
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity cubic-bezier(0.3, 0.2, 0.2, 0.2, 0.8)',
          }}
        />
      </div>
      <div className='grid gap-2 p-3'>
        <h3 className='text-lg font-bold'>{data.title}</h3>

        <div className='flex items-center gap-2'>
          <MapIcon className='w-4 h-4' />
          <address className='text-sm font-medium'>
            {data.location.street}, {data.location.city}
          </address>
        </div>

        <h3 className='text-lg font-medium'>
          Tsh {formatPrice(data.price.priceAmount)}/ month
        </h3>

        <div className='flex items-center gap-2 mt-1'>
          <DoorOpen className='w-5 h-5' />

          <span>
            {data.Details.Beds} Room
            {data.Details.Beds > 1 && 's'}
          </span>
          <BathIcon className='w-5 h-5 ml-4' />
          <span>
            {data.Details.Baths} Bath
            {data.Details.Baths > 1 && 's'}
          </span>
        </div>

        <div className='grid gap-0.5'>
          {/* <h3 className='text-sm font-medium'>{data.buildTitle}</h3> */}
          {/* <p className='text-gray-500 text-sm dark:text-gray-400'>
          Away from the road
        </p>
        <p className='text-gray-500 text-sm dark:text-gray-400'>
          Rural area
        </p> */}
          {/* <p className='text-gray-500 text-sm dark:text-gray-400'>
            floor: 3/10
          </p> */}

          <h3 className='text-sm text-gray-600 font-medim'>
            {data.size} sq ft
          </h3>
        </div>
      </div>
    </article>
  );
}
