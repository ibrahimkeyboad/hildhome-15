import { Property } from '@/app/(propertiesList)/page';
import HouseDetails from './HouseDetails';

interface Props {
  data: Property;
}

async function MainCard({ data }: Props) {
  return (
    <>
      <HouseDetails data={data} />
    </>
  );
}

export default MainCard;
