'use client';

import { Card, CardContent } from '@/components/ui/card';

type Props = {
  type: 'buyer' | 'owner';
  icon: React.ReactNode;
  title: string;
  description: string;
  onChangeRole: (value: 'buyer' | 'owner') => void;
  userType: 'buyer' | 'owner';
};

function UserTypeCard({
  description,
  icon,
  title,
  type,
  onChangeRole,
  userType,
}: Props) {
  console.log(userType);

  return (
    <Card
      className={`cursor-pointer transition-all ${
        userType === type ? 'ring-2 ring-primary' : 'hover:shadow-md'
      }`}
      onClick={() => onChangeRole(type)}>
      <CardContent className='flex flex-col items-center p-6 text-center'>
        <div className='mb-4 p-2 bg-primary-foreground rounded-full'>
          {icon}
        </div>
        <h3 className='text-lg font-semibold mb-2'>{title}</h3>
        <p className='text-sm text-muted-foreground'>{description}</p>
      </CardContent>
    </Card>
  );
}

export default UserTypeCard;
