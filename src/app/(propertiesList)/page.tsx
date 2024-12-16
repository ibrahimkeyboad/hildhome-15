import { baseUrl } from '@/action/baseUrl';
import Container from '@/components/Container';
import Listings from '@/components/Listings';

async function Page() {
  const properties = await fetch(`${baseUrl}/all-properties`, {
    cache: 'force-cache',
  }).then((res) => res.json());

  if (!properties) {
    return <div>No properties found</div>;
  }

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
