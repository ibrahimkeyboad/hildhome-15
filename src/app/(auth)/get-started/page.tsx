import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { LogIn, UserPlus, Home, Search } from 'lucide-react';

export default function Component() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4'>
      <Card className='w-full max-w-lg shadow-lg'>
        <CardContent className='p-8'>
          <div className='flex justify-center mb-8'>
            <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center'>
              <Home className='h-8 w-8 text-white' />
            </div>
          </div>

          <h1 className='text-3xl font-semibold text-center mb-2'>
            Welcome to Hild Properties
          </h1>
          <p className='text-muted-foreground text-center mb-8'>
            Discover your dream property with ease. Start your journey home
            today.
          </p>

          <div className='space-y-4'>
            <Button
              asChild
              className='w-full py-6 text-lg font-medium bg-primary/90 hover:bg-primary'>
              <Link href='/login' className='flex items-center justify-between'>
                Log In to Your Account
                <LogIn className='ml-2 h-5 w-5' />
              </Link>
            </Button>

            <Button
              asChild
              variant='outline'
              className='w-full py-6 text-lg font-medium border-accents hover:bg-primary/10'>
              <Link
                href='/signup'
                className='flex items-center justify-between'>
                Create a New Account
                <UserPlus className='ml-2 h-5 w-5' />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <footer className='mt-8 text-center text-sm text-muted-foreground'>
        <p>
          &copy; {new Date().getFullYear()} Hild Properties. All rights
          reserved.
        </p>
        <div className='mt-2'>
          <Link href='/terms' className='hover:underline'>
            Terms of Service
          </Link>
          <span className='mx-2'>·</span>
          <Link href='/privacy' className='hover:underline'>
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
