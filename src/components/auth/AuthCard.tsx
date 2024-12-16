'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useRouter } from 'next/navigation';

type Props = {
  title: string;
  description: string;
  action: string;
  children: React.ReactNode;
};

function AuthCard({ title, action, description, children }: Props) {
  const router = useRouter();

  return (
    <Card
      onClick={() => {
        router.push(`/auth/signup`);
      }}
      className='bg-white border-2 cursor-pointer basis-[150px] lg:basis-[280px] transition border-gray-300 hover:border-primary'>
      <CardHeader>
        <CardTitle className='text-lg'>{title}</CardTitle>
        <CardDescription className='hidden lg:md:block'>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default AuthCard;
