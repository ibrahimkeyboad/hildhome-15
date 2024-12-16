import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

function OwnerCard() {
  return (
    <>
      <Card className='border-none'>
        <CardContent className='p-6 space-y-4'>
          <h2 className='text-xl font-semibold'>Contact Information</h2>
          <div className='space-y-2'>
            <p className='font-medium'>Zanury Doe</p>
            <div className='flex items-center space-x-2'>
              <Phone className='w-4 h-4 text-muted-foreground' />
              <span>0629179067</span>
            </div>
            <div className='flex items-center space-x-2'>
              <Mail className='w-4 h-4 text-muted-foreground' />
              <span>zanury.doe@example.com</span>
            </div>
          </div>
          <Button asChild className='w-full mb-4'>
            <Link href='/houses/id/purchases'>Apply Now</Link>
          </Button>
        </CardContent>
      </Card>
      {/*   <Card className='border-none w-[30vw]'>
        <CardContent className='p-6'>
          <h3 className='text-lg font-semibold mb-4'>
            Application Information
          </h3>
          <Button className='w-full mb-4'>Apply Now</Button>
        </CardContent>
      </Card> */}
    </>
  );
}

export default OwnerCard;
