import { TriangleAlert } from 'lucide-react';
import { toast } from 'sonner';

export function toastError(message?: string) {
  return toast.error(
    <div className='bg-destructive/15 p-3 flex w-full h-full items-center gap-x-2 text-lg text-destructive'>
      <TriangleAlert  className='size-4' />
      <p>{message || 'Oops an error occur!'} </p>
    </div>,
    {
      unstyled: true,
    }
  );
}
