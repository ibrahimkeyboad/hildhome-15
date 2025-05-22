import { Price } from '@/app/(propertiesList)/page';
import formatPrice from '@/utils/formatPrice';

type Props = {
  price: Price;
};

function PriceDetailCard({ price }: Props) {
  return (
    <h3 className='lg:text-3xl text-2xl font-bold'>
      Tsh {formatPrice(price.amount)}
      <span className='text-lg font-normal text-muted-foreground'>
        /{price.duration}
      </span>
    </h3>
  );
}

export default PriceDetailCard;
