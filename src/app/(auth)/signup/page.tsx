import SignUpForm from '@/components/auth/SignUpForm';
import Image from 'next/image';
import React from 'react';

function page() {
  return (
    <div className='flex min-h-screen bg-gray-100'>
      <div className='w-full mx-auto max-w-md'>
        <div className='mb-8 text-center'>
          <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
            Welcome to HildProperties
          </h2>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}

export default page;
