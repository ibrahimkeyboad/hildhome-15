'use client';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Image from 'next/image';
import { BathIcon, BedIcon, DoorOpen, MapIcon } from 'lucide-react';
import formatPrice from '@/utils/formatPrice';
import Link from 'next/link';

type HomeCardType = {
  images: {
    uri: string;
    public_id: string;
  }[];
  id: string;
  title: string;
  price: {
    priceAmount: number;
    priceDuration: number;
  };
  location: {
    street: string;
    city: string;
    country: string;
  };

  room: number;
  bath: number;
  size: number;
  category: string;
  slag: string;
  suitableFor: string[];
  nearby: string[];
  cover_image: string;
};

function HomeCard({
  id,
  bath,
  images,
  location,
  price,
  room,
  size,
  title,
  category,
  suitableFor,
  cover_image,
  nearby,
}: HomeCardType) {
  const [hover, setHover] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  function handleMouseEnter() {
    setHover(true);
  }
  function handleMouseLeave() {
    setHover(false);
  }

  return (
    <article className='relative group cursor-pointer grow basis-[350px] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2'>
      {/* <Carousel
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='w-full'>
        <CarouselContent ref={ref}>
          {images.map((img) => (
            <CarouselItem key={img.uri} className='h-auto bg-gray-300'>
              <Image
                alt={title}
                src={img.uri}
                priority
                width={400}
                height={300}
                className='object-cover w-full aspect-[4/3]'
                style={{
                  opacity: inView ? 1 : 0,
                  transition: 'opacity cubic-bezier(0.3, 0.2, 0.2, 0.2, 0.8)',
                }}
                sizes='(min-width: 2880px) calc(11.67vw - 20px), (min-width: 2560px) 12.67vw, (min-width: 2260px) 14.29vw, (min-width: 1940px) 16.67vw, (min-width: 1620px) 20vw, (min-width: 1300px) 25vw, (min-width: 980px) 33.33vw, (min-width: 660px) 47.33vw, (min-width: 400px) 100vw, calc(60vw + 136px)'
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {hover && (
          <>
            <CarouselPrevious className='left-1 border-none' />
            <CarouselNext className='right-1 border-none' />
          </>
        )}
      </Carousel> */}
      <div className='bg-gray-300 h-auto' ref={ref}>
        <Image
          alt={`${title} in hildhome`}
          className='object-cover w-full aspect-[4/3]'
          height={300}
          src={cover_image}
          width={400}
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity cubic-bezier(0.3, 0.2, 0.2, 0.2, 0.8)',
          }}
          sizes='(min-width: 2880px) calc(11.67vw - 20px), (min-width: 2560px) 12.67vw, (min-width: 2260px) 14.29vw, (min-width: 1940px) 16.67vw, (min-width: 1620px) 20vw, (min-width: 1300px) 25vw, (min-width: 980px) 33.33vw, (min-width: 660px) 47.33vw, (min-width: 400px) 100vw, calc(60vw + 136px)'
        />
      </div>

      <Link
        href={`/${category}s/${id}?title=${title}&priceAmount=${price.priceAmount}&street=${location.street}&city=${location.city}&room=${room}&bath=${bath}&size=${size}&category=${category}`}
        className='bg-white space-y-2 p-4 block h-full dark:bg-gray-950'>
        <h3 className='font-semibold capitalize text-lg md:text-xl'>{title}</h3>
        <div className='flex gap-2 items-center'>
          <MapIcon className='w-4 h-4' />

          <address className='text-sm text-gray-600 dark:text-gray-400'>
            {location.street}, {location.city}
          </address>
        </div>
        <p className='text-sm text-gray-500 dark:text-gray-400'></p>
        <h4 className='font-medium text-base md:text-lg'>
          Tsh {formatPrice(price.priceAmount)} / {price.priceDuration}
        </h4>
        <div className='flex items-center gap-2 mt-1'>
          <DoorOpen className='w-5 h-5' />
          <span>
            {room} {`Room${room >= 2 ? 's' : ''}`}
          </span>
          <BathIcon className='w-5 h-5 ml-4' />
          <span>
            {bath}
            {` Bath${bath >= 2 ? 's' : ''}`}
          </span>
        </div>

        {/* <div>
          <ul className='font-light text-gray-700 text-sm flex flex-wrap gap-1.5'>
            {suitableFor?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul className='font-light text-gray-700 text-sm flex-wrap flex gap-0.5'>
            {nearby?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div> */}
        <p className='text-sm text-gray-500 dark:text-gray-400 mt-2'>
          {size} sqft
        </p>
      </Link>
    </article>
  );
}

export default HomeCard;
