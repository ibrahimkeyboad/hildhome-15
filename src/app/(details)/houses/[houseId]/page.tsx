import { notFound } from 'next/navigation';
import { baseUrl } from '@/action/baseUrl';
import CoverImageDetail from '@/components/CoverImageDetail';
import MainCard from './_components/MainCard';

export const revalidate = 60;
export const dynamicParams = true;

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { houseId: string };
  searchParams: any;
}) {
  const res = await fetch(`${baseUrl}/all-houses/${params.houseId}`, {
    cache: 'force-cache',
  });

  const house = await res?.json();

  return {
    title: `House: ${house?.title} HildHome`,
  };
}

export async function generateStaticParams() {
  const res = await fetch(`${baseUrl}/all-houses`);

  const houses = await res?.json();

  const ids = houses.map((house) => ({ houseId: house.id }));

  return ids;
}

async function Page({
  params,
  searchParams,
}: {
  params: { houseId: string };
  searchParams: any;
}) {
  // const res = await getHouseWithId(params.houseId);
  const res = await fetch(`${baseUrl}/all-houses/${params.houseId}`, {
    cache: 'force-cache',
  });

  const house = await res?.json();

  if (!res || !house) {
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
