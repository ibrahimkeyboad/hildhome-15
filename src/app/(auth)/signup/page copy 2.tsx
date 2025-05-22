'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { User, BriefcaseBusiness } from 'lucide-react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { MultiStepForm } from '@/components/MultiStepForm';
import { baseUrl } from '@/action/baseUrl';
import axios from 'axios';
import { toast } from 'sonner';

const personalInfoSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

const businessInfoSchema = z.object({
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  licenseNumber: z
    .string()
    .min(5, 'License number must be at least 5 characters'),
});

const termsSchema = z.object({
  termsAccepted: z
    .boolean()
    .refine((val) => val === true, 'You must accept the terms and conditions'),
});

type PersonalInfoForm = z.infer<typeof personalInfoSchema>;
type BusinessInfoForm = z.infer<typeof businessInfoSchema>;
type TermsForm = z.infer<typeof termsSchema>;

// type Data = {
//   user: PersonalInfoForm;
//   business: BusinessInfoForm;
// };

export default function SignupPage() {
  const [userType, setUserType] = useState<'buyer' | 'owner'>('buyer');

  // const { mutate, isSuccess } = useMutation({
  //   mutationFn: async (data: Data) => {
  //     return await axios.patch(`${baseUrl}/auth/signup`, {
  //       ...data,
  //     });
  //   },

  //   onMutate() {
  //     toast('Creating account...', { id: 'create' });
  //   },

  //   onSuccess: () => {
  //     toast.dismiss();
  //     toast.success('Account is successfuly created!');
  //     // router.push(`/new-property/${propertyId}/price`);
  //   },
  //   onError: () => {
  //     toast.dismiss();
  //     toast.error('Failed to add account');
  //   },
  // });

  const personalInfoForm = useForm<PersonalInfoForm>({
    resolver: zodResolver(personalInfoSchema),
  });

  const businessInfoForm = useForm<BusinessInfoForm>({
    resolver: zodResolver(businessInfoSchema),
  });

  const termsForm = useForm<TermsForm>({
    resolver: zodResolver(termsSchema),
    defaultValues: { termsAccepted: false },
  });

  const onSubmit = (
    data: PersonalInfoForm & Partial<BusinessInfoForm> & TermsForm
  ) => {
    console.log(data);
    // Here you would typically send the data to your backend
    toast('Signup successful! Welcome to our platform.');
  };

  const UserTypeCard = ({
    type,
    icon,
    title,
    description,
  }: {
    type: 'buyer' | 'owner';
    icon: React.ReactNode;
    title: string;
    description: string;
  }) => (
    <Card
      className={`cursor-pointer transition-all ${
        userType === type ? 'ring-2 ring-primary' : 'hover:shadow-md'
      }`}
      onClick={() => {
        setUserType(type);
      }}>
      <CardContent className='flex flex-col items-center p-6 text-center'>
        <div className='mb-4 p-2 bg-primary-foreground rounded-full'>
          {icon}
        </div>
        <h3 className='text-lg font-semibold mb-2'>{title}</h3>
        <p className='text-sm text-muted-foreground'>{description}</p>
      </CardContent>
    </Card>
  );

  const steps = [
    {
      title: 'Select Your Role',
      content: (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <UserTypeCard
            type='buyer'
            icon={<User className='w-8 h-8 text-primary' />}
            title='Home Buyer or Renter'
            description="I'm looking for a property to buy or rent"
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
          />
        </div>
      ),
    },
    {
      title: 'Personal Information',
      content: (
        <Form {...personalInfoForm}>
          <form className='space-y-4'>
            <FormField
              control={personalInfoForm.control}
              name='firstName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder='John' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={personalInfoForm.control}
              name='lastName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Doe' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              // control={personalInfoForm.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='john@example.com'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={personalInfoForm.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder='********' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      ),
    },
    ...(userType === 'buyer'
      ? []
      : [
          {
            title: 'Business Information',
            content: (
              <Form {...businessInfoForm}>
                <form className='space-y-4'>
                  <FormField
                    // control={businessInfoForm.control}
                    name='companyName'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company or Business Name</FormLabel>
                        <FormControl>
                          <Input placeholder='Real Estate Co.' {...field} />
                        </FormControl>
                        <FormDescription>Optional</FormDescription>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={businessInfoForm.control}
                    name='licenseNumber'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>TIN Number</FormLabel>
                        <FormControl>
                          <Input placeholder='123456' {...field} />
                        </FormControl>
                        <FormDescription>Optional</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            ),
          },
        ]),
    {
      title: 'Terms and Conditions',
      content: (
        <Form {...termsForm}>
          <form>
            <FormField
              control={termsForm.control}
              name='termsAccepted'
              render={({ field }) => (
                <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className='space-y-1 leading-none'>
                    <FormLabel>I accept the terms and conditions</FormLabel>
                    <FormDescription>
                      By creating an account, you agree to our Terms of Service
                      and Privacy Policy.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </form>
        </Form>
      ),
    },
  ];

  return (
    <div className='container mx-auto max-w-4xl p-6'>
      <h1 className='text-xl md:text-3xl font-bold mb-6 text-center'>
        Welcome to HildProperties
      </h1>
      <MultiStepForm
        steps={steps}
        onComplete={() => {
          axios.post(`${baseUrl}/auth/signup`, {
            userType,
            ...personalInfoForm,
            ...businessInfoForm,
          });
          console.log({
            userType,
            ...personalInfoForm.getValues(),
            ...businessInfoForm.getValues(),
          });
          const data = {
            userType,
            ...personalInfoForm.getValues(),
            ...(userType !== 'buyer' ? businessInfoForm.getValues() : {}),
            ...termsForm.getValues(),
          };
          onSubmit(data);
        }}
      />
    </div>
  );
}
