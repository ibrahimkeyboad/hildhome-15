import { baseUrl } from '@/action/baseUrl';
import Container from '@/components/Container';
import Listings from '@/components/Listings';

export type Property = {
  id: string;
  title: string;
  category: string;
  description: string;
  purpose: string;
  type: string;
  bedroom: number;
  bathroom: number;
  createdAt: string;
  size: number;
  isFinished: boolean;
  features: string[];
  amenities: string[];
  suitableFor: string[];
  nearBy: string[];

  availabilityStatus: boolean;
  building: string;

  price: Price;
  images: Image[];
  location: Location;
};

export type Price = {
  amount: number;
  duration: string;
};

export type Image = {
  title: string;
  uri: string;
  publicId: string;
};

export type Location = {
  country: string;
  street: string;
  city: string;
  ward: string;
  postcode: string;
};

async function Page() {
  const properties: Property[] = await fetch(`${baseUrl}/property/all`, {
    cache: 'force-cache',
  }).then((res) => res.json());

  if (!properties) {
    return <div>No properties found</div>;
  }

  console.log(properties);

  return (
    <div>
      <Container>
        {properties.map((property) => (
          <Listings property={property} yes key={`${property.id}`} />
        ))}
      </Container>
    </div>
  );
}

export default Page;
