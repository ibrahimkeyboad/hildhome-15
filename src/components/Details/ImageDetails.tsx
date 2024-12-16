import Image from 'next/image';
import fs from 'fs/promises';
import { getPlaiceholder } from 'plaiceholder';
import { cn } from '@/lib/utils';

async function ImageDetails({ img, i }) {
  const buffer = img.uri
    ? await fs.readFile(`./public${img.uri}`)
    : await fetch(img).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
      );

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <div
      className={cn((i + 1) % 3 === 0 ? 'col-span-2' : 'col-span-1')}
      key={base64}>
      <Image
        className='md:h-[400px] h-[200px] rounded-md w-full aspect-auto object-cover'
        src={img.uri ? img.uri : img}
        alt='images'
        height={400}
        width={500}
        placeholder='blur'
        blurDataURL={base64}
      />
    </div>
  );
}

export default ImageDetails;
