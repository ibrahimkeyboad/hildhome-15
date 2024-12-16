'use client';

import Image from 'next/image';

// import fs from 'fs/promises';
// import { getPlaiceholder } from 'plaiceholder';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { XIcon } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import useEmblaCarousel from 'embla-carousel-react';

function CoverImageDetail({ data }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  // const buffer = data.cover_image.includes('/images/')
  //   ? await fs.readFile(`./public${data.cover_image}`)
  //   : await fetch(data.cover_image).then(async (res) =>
  //       Buffer.from(await res.arrayBuffer())
  //     );

  // const { base64 } = await getPlaiceholder(buffer);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setCurrentIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const openGallery = () => {
    setIsGalleryOpen(true);
  };

  return (
    <>
      <div className='md:hidden'>
        <Carousel className='w-full' ref={emblaRef}>
          <CarouselContent>
            {data.images.map((image, index) => (
              <CarouselItem key={index}>
                <div onClick={openGallery} className='relative aspect-[4/3]'>
                  <Image
                    onClick={() => setIsGalleryOpen(true)}
                    width={500}
                    height={300}
                    src={image.uri || image}
                    alt={`${data.title} Hild properties`}
                    loading='lazy'
                    className='w-full h-full cursor-pointer object-cover rounded-lg'
                  />
                  <div className='absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-sm'>
                    {index + 1} / {data.images.length}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='absolute top-1/2 left-2 -translate-y-1/2 z-10 cursor-pointer' />
          <CarouselNext className='absolute top-1/2 right-2 -translate-y-1/2 z-10 cursor-pointer' />
        </Carousel>
      </div>

      <div className='hidden md:grid md:grid-cols-4 gap-2 h-[480px]'>
        <div className='md:col-span-2 md:row-span-2 group'>
          <Image
            // src={data.cover_image}
            // alt={`${data.title} Hildhome`}
            onClick={() => setIsGalleryOpen(true)}
            src={data.images[0].uri || data.images[0]}
            alt={`${data.title} in Hild properties`}
            width={600}
            height={480}
            className='w-full h-[480px] object-cover cursor-pointer rounded-tl-xl rounded-bl-xl'
            // placeholder='blur'
            // blurDataURL={base64}
          />
          {/* <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300'></div> */}
        </div>

        {data.images.slice(1, 5).map((img, i) => (
          <div key={1} className={cn(i === 3 && 'relative')}>
            <Image
              key={i}
              src={img.uri || img}
              alt={`${data.title} Hildhome`}
              width={500}
              height={300}
              onClick={openGallery}
              loading='lazy'
              className={`h-[14.8rem] cursor-pointer w-full object-cover ${
                i === 1 ? 'rounded-tr-xl' : i === 3 ? 'rounded-br-xl' : ''
              }`}
              // placeholder='blur'
              // blurDataURL={base64}
            />

            <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
              {i === 3 && (
                <DialogTrigger asChild className='absolute bottom-4 left-4'>
                  <Button variant='outline' size='sm'>
                    More photos
                  </Button>
                </DialogTrigger>
              )}
              <DialogContent className='max-w-full h-full p-0'>
                <DialogHeader className='p-4 absolute top-0 left-0 right-0 z-10 bg-white bg-opacity-90'>
                  <DialogTitle className='text-2xl font-semibold'>
                    All Photos
                  </DialogTitle>

                  <Button
                    variant='ghost'
                    size='icon'
                    className='absolute right-4 top-4'
                    onClick={() => setIsGalleryOpen(false)}>
                    <XIcon className='h-4 w-4' />
                  </Button>
                </DialogHeader>
                <ScrollArea className='h-full'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 pt-16'>
                    {data.images.map((image, index) => (
                      <div
                        key={index}
                        onClick={() => setFullScreenImage(image.uri)}
                        className={cn(
                          'aspect-square cursor-pointer'
                          // (index + 1) % 3 === 0 ? 'col-span-2' : 'col-span-1'
                        )}>
                        <Image
                          src={image.uri || image}
                          // alt={image.alt}
                          width={500}
                          height={300}
                          loading='lazy'
                          className='w-full h-full object-cover rounded-lg'
                        />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>

            <Dialog
              open={!!fullScreenImage}
              onOpenChange={() => setFullScreenImage(null)}>
              <DialogContent className='max-w-full h-full p-0 bg-black bg-opacity-90'>
                <div className='relative w-full h-full flex items-center justify-center'>
                  <Image
                    src={fullScreenImage || ''}
                    alt='Full screen view'
                    loading='lazy'
                    width={1000}
                    height={800}
                    className='max-h-screen object-center object-cover'
                  />
                  <Button
                    variant='ghost'
                    size='icon'
                    className='absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20'
                    onClick={() => setFullScreenImage(null)}>
                    <XIcon className='h-6 w-6' />
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </>
  );
}

export default CoverImageDetail;
