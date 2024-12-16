import Link from 'next/link';

function AuthLink() {
  return (
    <Link className='text-primary font-bold px-3 py-2' href='/auth/get-started'>
      Get Start
    </Link>
  );
}

export default AuthLink;
