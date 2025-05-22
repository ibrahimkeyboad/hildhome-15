'use client';

import UserTypeCard from '../_components/UserCard';
import { BriefcaseBusiness, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

function UserRolePage() {
  const [userType, setUserType] = useState<'buyer' | 'owner'>('buyer');

  function handlerSubmit() {}
  return (
    <div className='space-y-8 w-full min-h-screen flex flex-col justify-center items-center max-w-2xl mx-auto p-6 '>
      <div className='space-y-2'>
        <h2 className='text-2xl font-semibold'>Select Your Role</h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <UserTypeCard
          type='buyer'
          icon={<User className='w-8 h-8 text-primary' />}
          title='Home Buyer or Renter'
          description="I'm looking for a property to buy or rent"
          onChangeRole={setUserType}
          userType={userType}
        />
        {/* <UserTypeCard
                        type='agent'
                        icon={<UserPlus className='w-8 h-8 text-primary' />}
                        title='Real Estate Agent'
                        description='I help clients buy, sell, or rent properties'
                      /> */}
        <UserTypeCard
          type='owner'
          icon={<BriefcaseBusiness className='w-8 h-8 text-primary' />}
          title='Property Owner'
          description='I have properties to sell or rent out'
          onChangeRole={setUserType}
          userType={userType}
        />
      </div>

      <div className='flex w-full justify-center '>
        <Button onClick={handlerSubmit} className='w-[50%]'>
          {'Next'}
        </Button>
      </div>
    </div>
  );
}

export default UserRolePage;
