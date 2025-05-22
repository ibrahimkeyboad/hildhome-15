import { Metadata } from 'next';
import Container from '@/components/Container';
import { baseUrl } from '@/action/baseUrl';
import Listings from '@/components/Listings';

export const metadata: Metadata = {
  title: 'Discover Your Dream House: Find Your Perfect Rental with Hildhome',
  description:
    'Explore a curated selection of rental houses tailored to your needs with Hildhome. From cozy cottages to spacious family homes, find the perfect dwelling for your lifestyle. With convenient search options and expert guidance, your ideal rental is just a few clicks away. Start your journey towards comfortable living today with Hildhome.',
  keywords: 'houses, rent houses',
};

async function HomePage() {
  const res = await fetch(`${baseUrl}/all-houses`, {
    cache: 'force-cache',
  });
  const houses = await res.json();

  return (
    <Container>
      {houses.map((house, i) => (
        <Listings property={house} key={`${i}`} />
      ))}
    </Container>
  );
}

export default HomePage;
