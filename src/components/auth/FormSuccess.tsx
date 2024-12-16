import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
function FormSuccess({ message }: { message: string }) {
  return (
    <div className='bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emebg-emerald-500'>
      <CheckCircleOutlinedIcon className='size-4' />
      <p>{message}</p>
    </div>
  );
}

export default FormSuccess;
