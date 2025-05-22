'use client';

import { useFormStatus } from 'react-dom';
import { useId, useActionState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Home, User, Loader2, Mail, Lock } from 'lucide-react';

async function signUpAction(
  state: { error?: string; success?: boolean; message?: string } | null,
  formData: FormData
) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const fullName = formData.get('fullName');
  const email = formData.get('email');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');

  if (!fullName || !email || !password || !confirmPassword) {
    return { error: 'All fields are required' };
  }
  if (password !== confirmPassword) {
    return { error: 'Passwords do not match' };
  }

  return { success: true, message: 'Account created successfully!' };
}

export default function SignUpForm() {
  const [state, formAction] = useActionState(signUpAction, null);
  const formId = useId();

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-primary/10 via-background to-primary/10'>
      <Card className='w-full max-w-md shadow-lg'>
        <CardHeader className='space-y-1'>
          <div className='flex items-center justify-center mb-4'>
            <div className='p-2 bg-primary/10 rounded-full'>
              <Home className='h-10 w-10 text-primary' />
            </div>
          </div>
          <CardTitle className='text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground'>
            Welcome to HildProperties
          </CardTitle>
          <CardDescription className='text-center text-lg'>
            Your journey to finding the perfect home starts here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id={formId} action={formAction} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='fullName' className='text-sm font-medium'>
                Full Name
              </Label>
              <div className='relative'>
                <User
                  className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground'
                  size={18}
                />
                <Input
                  id='fullName'
                  name='fullName'
                  placeholder='John Doe'
                  required
                  className='pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary'
                />
              </div>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='email' className='text-sm font-medium'>
                Email
              </Label>
              <div className='relative'>
                <Mail
                  className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground'
                  size={18}
                />
                <Input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='john@example.com'
                  required
                  className='pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary'
                />
              </div>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='password' className='text-sm font-medium'>
                Password
              </Label>
              <div className='relative'>
                <Lock
                  className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground'
                  size={18}
                />
                <Input
                  id='password'
                  name='password'
                  type='password'
                  placeholder='********'
                  required
                  className='pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary'
                />
              </div>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='confirmPassword' className='text-sm font-medium'>
                Confirm Password
              </Label>
              <div className='relative'>
                <Lock
                  className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground'
                  size={18}
                />
                <Input
                  id='confirmPassword'
                  name='confirmPassword'
                  type='password'
                  placeholder='********'
                  required
                  className='pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary'
                />
              </div>
            </div>
            <SubmitButton />
          </form>
          {state?.error && (
            <p className='mt-4 text-sm text-red-500 bg-red-100 p-2 rounded animate-shake'>
              {state.error}
            </p>
          )}
          {state?.success && (
            <p className='mt-4 text-sm text-green-500 bg-green-100 p-2 rounded animate-pulse'>
              {state.message}
            </p>
          )}
        </CardContent>
        <CardFooter className='flex flex-col items-center space-y-2'>
          {/* <p className='text-xs text-muted-foreground text-center'>
            By signing up, you agree to our{' '}
            <a href='#' className='text-primary hover:underline'>
              Terms of Service
            </a>{' '}
            and{' '}
            <a href='#' className='text-primary hover:underline'>
              Privacy Policy
            </a>
            .
          </p> */}
          <p className='text-sm text-muted-foreground'>
            Already have an account?{' '}
            <a
              href='#'
              className='font-medium text-primary hover:underline transition-colors duration-300'>
              Sign in
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      className='w-full transition-all duration-300 hover:shadow-md'
      disabled={pending}>
      {pending ? (
        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
      ) : (
        <User className='mr-2 h-4 w-4' />
      )}
      {pending ? 'Creating Account...' : 'Create Account'}
    </Button>
  );
}
