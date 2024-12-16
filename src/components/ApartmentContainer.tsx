import { ApartmentListCard } from './ApartmentListCard';

type Props = {
  potions: any[];
};

function ApartmentContainer({ potions }: Props) {
  return (
    <>
      <section className='w-full py-12'>
        <div className='px-4 md:px-6 flex flex-col gap-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6'>
            {potions.map((potion) => (
              <ApartmentListCard key={potion.id} data={potion} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ApartmentContainer;
