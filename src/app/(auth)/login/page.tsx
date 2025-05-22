'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Home, LogIn, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the login logic
    console.log(
      'Login attempted with:',
      email,
      password,
      'Remember me:',
      rememberMe
    );
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <Link
          href='/'
          className='mb-8 text-blue-600 hover:text-blue-800 inline-flex items-center'>
          <Home className='mr-2 h-6 w-6' />
          <span className='text-2xl font-semibold'>HildProperties</span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        <Card className='w-full max-w-md shadow-lg'>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl font-bold text-center'>
              Welcome Back
            </CardTitle>
            <p className='text-center text-muted-foreground'>
              Enter your credentials to access your account
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='you@example.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='transition-all duration-200 focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='password'>Password</Label>
                <div className='relative'>
                  <Input
                    id='password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='pr-10 transition-all duration-200 focus:ring-2 focus:ring-blue-500'
                  />
                  <Lock
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                    size={18}
                  />
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2'>
                  <Checkbox
                    id='remember'
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(checked as boolean)
                    }
                  />
                  <Label
                    htmlFor='remember'
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                    Remember me
                  </Label>
                </div>
                <Link
                  href='/forgot-password'
                  className='text-sm text-blue-600 hover:underline'>
                  Forgot password?
                </Link>
              </div>
              <Button
                type='submit'
                className='w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200'>
                <LogIn className='mr-2 h-4 w-4' /> Sign In
              </Button>
            </form>
          </CardContent>
          <CardFooter className='flex flex-col space-y-2 text-center text-sm text-muted-foreground'>
            <div>
              New to Hild Properties?{' '}
              <Link
                href='/signup'
                className='text-blue-600 hover:underline font-medium'>
                Create an account
              </Link>
            </div>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.footer
        className='mt-8 text-center text-sm text-muted-foreground'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}>
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
      </motion.footer>
    </div>
  );
}
