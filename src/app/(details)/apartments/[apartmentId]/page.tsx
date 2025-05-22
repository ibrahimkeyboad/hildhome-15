import { auth } from '@/auth';

import CoverImageDetail from '@/components/CoverImageDetail';
import { baseUrl } from '@/action/baseUrl';
import PotionTabContainer from './_component/ApartmentDetail';
import { notFound } from 'next/navigation';

type Params = { apartmentId: string };

export async function generateMetadata({ params }: { params: Params }) {
  const apartmentid = params.apartmentId;

  const potion = await fetch(`${baseUrl}/all-apartments/${apartmentid}`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());

  return {
    title: `Space: ${potion?.title} in HildHome`,
  };
}

export async function generateStaticParams() {
  const res = await fetch(`${baseUrl}/all-apartments`);

  const apartments = await res?.json();

  const ids = apartments.map((apartment) => ({ apartmentId: apartment.id }));

  return ids;
}

async function Page({ params }: { params: { apartmentId: string } }) {
  const potion = await fetch(
    `${baseUrl}/all-apartments/${params.apartmentId}`,
    {
      next: { revalidate: 60 },
    }
  ).then((res) => res.json());

  if (!potion) {
    notFound();
  }
  const session = await auth();

  return (
    <>
      <CoverImageDetail data={potion} />
      <PotionTabContainer data={potion} />
    </>
  );
}

export default Page;
