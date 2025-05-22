import HomeCard from './HomeCard';
import FrameListCard from './FrameListCard';
import { ApartmentListCard } from './ApartmentListCard';
import { Property } from '@/app/(propertiesList)/page';

interface ListingsProps {
  property: Property;
  yes?: boolean;
}

function Listings({ property }: ListingsProps) {
  return (
    <>
      {property?.category === 'business-space' && (
        <FrameListCard data={property} />
      )}

      {property?.category === 'apartment' && (
        <ApartmentListCard data={property} />
      )}

      {property?.category === 'house' && (
        <HomeCard
          cover_image={property.images[0]?.uri}
          category={property.category}
          id={property.id}
          bath={property.bathroom}
          images={property.images}
          location={property.location}
          price={property.price}
          size={400}
          room={property.bedroom}
          title={property.title}
          suitableFor={property.suitableFor}
          nearby={property.nearBy}
        />
      )}
    </>
  );
}

export default Listings;
