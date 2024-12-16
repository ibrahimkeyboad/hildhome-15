import { auth } from '@/auth';
import Header from '@/components/Header';

async function DetailPageLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  return (
    <>
      <Header no session={session} />
      <section className='max-w-[1000px]  mt-4 px-3 md:px-10 m-auto'>
        {children}
        <footer className='text-center items-end py-5 text-gray-500 text-sm'>
          <p>
            &copy; {new Date().getFullYear()} HildHome. All rights reserved.
          </p>
        </footer>
      </section>
    </>
  );
}

export default DetailPageLayout;
