import Footer from '@/components/Footer';
import Header from '@/components/Header';

function ListLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default ListLayout;
