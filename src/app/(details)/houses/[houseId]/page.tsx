import { notFound } from 'next/navigation';
import { baseUrl } from '@/action/baseUrl';
import CoverImageDetail from '@/components/CoverImageDetail';
import MainCard from './_components/MainCard';
import { Property } from '@/app/(propertiesList)/page';

export const revalidate = 60;
export const dynamicParams = true;

type Params = Promise<{ houseId: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const houseId = (await params).houseId;
  const res = await fetch(`${baseUrl}/property/${houseId}`, {
    cache: 'force-cache',
  });

  const house = await res?.json();

  return {
    title: `House: ${house?.title} HildHome`,
  };
}

export async function generateStaticParams() {
  const res = await fetch(`${baseUrl}/property/all`);

  const houses = await res?.json();

  const ids = houses.map((house: Property) => ({ houseId: house.id }));

  return ids;
}

async function Page({ params }: { params: Params }) {
  const houseId = (await params).houseId;

  const house = await fetch(`${baseUrl}/property/${houseId}`, {
    // cache: "force-cache",
  }).then((res) => res.json());

  if (!house) {
    notFound();
  }

  return (
    <>
      <CoverImageDetail data={house} />
      <MainCard data={house} />
    </>
  );
}

export default Page;
