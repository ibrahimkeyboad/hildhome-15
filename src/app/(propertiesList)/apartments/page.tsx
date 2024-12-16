import { Metadata } from 'next';

import { baseUrl } from '@/action/baseUrl';
import ApartmentContainer from '@/components/ApartmentContainer';

export const metadata: Metadata = {
  title: 'Apartment for rent in Tanzania',
  description:
    'Discover the perfect apartment for rent(kupangisha) in Tanzania with Hildhome. Explore a wide selection of meticulously curated apartments, tailored to your lifestyle and preferences. From modern urban dwellings to tranquil suburban retreats, find your ideal living space effortlessly. Start your search today and embark on a journey to find the perfect home with Hildhome.',
};

async function ApartmentsPage() {
  const res = await fetch(`${baseUrl}/all-apartments`, {
    cache: 'force-cache',
  });
  const potions = await res.json();
  return (
    <>
      <ApartmentContainer potions={potions} />
    </>
  );
}

export default ApartmentsPage;
