import { TriangleAlert } from 'lucide-react';

function FormError({ message }: { message: string }) {
  return (
    <div className='bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive'>
      <TriangleAlert className='size-4' />
      <p>{message.toString()}</p>
    </div>
  );
}

export default FormError;
