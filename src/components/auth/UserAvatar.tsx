import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import Link from 'next/link';
import LogOutButton from './LogOutButton';
import { CircleUser } from 'lucide-react';

async function UserAvatar({ name }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* //Todo: add dynamic name and photo  */}

        <Button variant='secondary' size='icon' className='rounded-full'>
          <CircleUser className='h-5 w-5' />
          <span className='sr-only'>Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='min-w-48'>
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href='/account-setting'>Account Setting</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href=''>Wishlist</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Link href=''>Help Center</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserAvatar;
