import Image from 'next/image';
import logo from '@/assets/hildhome/logo.png';
import Link from 'next/link';

function Logo() {
  return (
    <Link href='/'>
      <Image
        src={logo}
        className='h-[50px] w-auto md:h-[60px] md:block object-cover '
        alt='hilhome logo'
        priority
      />
    </Link>
  );
}

export default Logo;
