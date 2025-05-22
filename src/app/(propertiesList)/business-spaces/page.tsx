import { baseUrl } from '@/action/baseUrl';
import FrameListCard from '@/components/FrameListCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perfect space for business rent in Tanzania',
  description:
    'Discover the perfect apartment for rent(kupangisha) in Tanzania with Hildhome. Explore a wide selection of meticulously curated apartments, tailored to your lifestyle and preferences. From modern urban dwellings to tranquil suburban retreats, find your ideal living space effortlessly. Start your search today and embark on a journey to find the perfect home with Hildhome.',
};

export default async function FRAMESPAGE() {
  const res = await fetch(`${baseUrl}/all-business-spaces`, {
    cache: 'force-cache',
  });
  const potions = await res.json();

  return (
    <section className='w-full py-12'>
      <div className='px-4 md:px-6 flex flex-col gap-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {potions.map((frame, i) => (
            <FrameListCard key={i} data={frame} />
          ))}
        </div>
      </div>
    </section>
  );
}
