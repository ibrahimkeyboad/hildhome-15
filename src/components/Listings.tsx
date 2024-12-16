import HomeCard from './HomeCard';
import FrameListCard from './FrameListCard';
import { ApartmentListCard } from './ApartmentListCard';

interface ListingsProps {
  property: any;
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
          cover_image={property.cover_image}
          category={property.category}
          id={property.id}
          bath={property.bath}
          images={property.images}
          location={property.location}
          price={property.price}
          size={400}
          room={property.room}
          title={property.title}
          slag={property.slag}
          suitableFor={property.suitableFor}
          nearby={property.nearby}
        />
      )}
    </>
  );
}

export default Listings;
