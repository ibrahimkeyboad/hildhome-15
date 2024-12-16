import formatPrice from '@/utils/formatPrice';
function PriceDetailCard({ data }) {
  return (
    <h3 className='lg:text-3xl text-2xl font-bold'>
      Tsh {formatPrice(data.price.priceAmount)}
      <span className='text-lg font-normal text-muted-foreground'>/month</span>
    </h3>
  );
}

export default PriceDetailCard;
