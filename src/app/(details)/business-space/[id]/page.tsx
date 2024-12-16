import { baseUrl } from '@/action/baseUrl';
import { notFound } from 'next/navigation';
import BusinessSpacePotion from '../_components/BusinessSpacePotion';

export const revalidate = 60;
export const dynamicParams = true;

type Params = Promise<{ buildingId: string; id: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const id = (await params).id;

  const res = await fetch(`${baseUrl}/all-business-spaces/${id}`, {
    next: { revalidate: 60 },
  });

  const potion = await res?.json();

  return {
    title: `Space: ${potion?.title} in HildHome`,
  };
}

export async function generateStaticParams() {
  const res = await fetch(`${baseUrl}/all-business-spaces`);

  const potions = await res?.json();

  const ids = potions.map((potion) => ({ id: potion.id }));

  return ids;
}

async function PotionsPage({ params }: { params: Params }) {
  const id = (await params).id;

  const res = await fetch(`${baseUrl}/all-business-spaces/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res) {
    notFound();
  }

  const potion = await res?.json();

  if (!potion) {
    notFound();
  }

  return <BusinessSpacePotion potion={potion} />;
}

export default PotionsPage;
