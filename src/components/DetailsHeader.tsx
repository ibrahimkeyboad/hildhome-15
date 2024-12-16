'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

import { Copy, Facebook, HeartIcon, Share2, Twitter } from 'lucide-react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  title: string;
  hashtags: string[];
};

export function ShareDialog({ title, hashtags }: Props) {
  const pathName = usePathname();

  const shareUrl = `https://demo.hildhome.com/${pathName}`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='rounded-md gap-1' size='sm' variant='outline'>
          <Share2 className='w-4 h-4' />
          Share
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-lg]'>
        <DialogHeader>
          <DialogTitle>Share {title}</DialogTitle>
          <DialogDescription>
            Share your house with your friends and family
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-3 grid-cols-2'>
          <Button className='rounded-md gap-1' size='lg' variant='ghost'>
            <Copy className='w-4 h-4' />
            Copy Link
          </Button>

          <Button className='rounded-md gap-1' size='lg' variant='ghost'>
            <WhatsappShareButton url={shareUrl} title={title} separator='::'>
              <WhatsAppIcon className='w-4 h-4' />
              <span>WhatsApp</span>
            </WhatsappShareButton>
          </Button>

          <Button className='rounded-md gap-1' size='lg' variant='ghost'>
            <FacebookShareButton
              url={shareUrl}
              className='flex items-center gap-1'
              query={{ param: title }}
              hashtag='hildhome'>
              <Facebook className='w-6 h-6' />
              <span>Facebook</span>
            </FacebookShareButton>
          </Button>

          <Button className='rounded-md gap-1' size='lg' variant='ghost'>
            <TwitterShareButton
              url={shareUrl}
              className='flex items-center gap-1'
              title={title}
              rel='noopener noreferrer'
              hashtags={['hildhome', ...hashtags]}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                fill='#000000'
                viewBox='0 0 256 256'>
                <path d='M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z'></path>
              </svg>
              <span>Twitter</span>
            </TwitterShareButton>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
export function SaveDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='rounded-md gap-1' size='sm' variant='ghost'>
          <HeartIcon className='w-4 h-4' />
          Save
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] '>
        <DialogHeader>
          <DialogTitle>Your not login</DialogTitle>
          <DialogDescription>Please login to save your house</DialogDescription>
        </DialogHeader>
        <div className=' flex flex-col gap-5  justify-center items-center'>
          <Link
            className='bg-primary w-full text-white p-2 text-lg rounded-md text-center '
            href='/auth/signup'>
            Create an account
          </Link>
          <Link
            className='bg-primary w-full text-white p-2 text-lg rounded-md text-center '
            href='/auth/login'>
            Login to your account
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
