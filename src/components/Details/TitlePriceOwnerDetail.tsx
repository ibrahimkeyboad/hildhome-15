import PriceDetailCard from './PriceDetailCard';
import { MapPin } from 'lucide-react';
import { ShareDialog } from '../DetailsHeader';
import { Property } from '@/app/(propertiesList)/page';

type Props = {
  data: Property;
};

export function TitlePriceOwnerDetail({ data }: Props) {
  return (
    <div className='mt-6 space-y-4'>
      <h1 className='text-xl md:text-3xl/7 font-bold '>
        {data.title} in {data.location.street}
      </h1>
      <div className='flex items-center justify-between '>
        <address className='flex items-center gap-2'>
          <MapPin className='w-5 h-5 mr-2' />
          <span className='sm:text-sm md:text-base text-muted-foreground'>
            {data.location.street}, {data.location.city}
          </span>
        </address>
        {/* <span>123 Business Street, Metropolis, 12345</span> */}

        <ShareDialog title={data.title} hashtags={['house', 'single']} />
      </div>

      <PriceDetailCard price={data.price} />
    </div>
  );
}
