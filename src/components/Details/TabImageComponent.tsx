import { TabsContent } from '@/components/ui/tabs';

import ImageDetails from './ImageDetails';

export async function TabImageComponent({ images }) {
  console.log(images);
  return (
    <TabsContent className='w-full' value='gallery'>
      <div className='grid grid-cols-2 w-full gap-4'>
        {[...images, ...images].map((img, i) => (
          <ImageDetails img={img} key={i} i={i} />
        ))}
      </div>
    </TabsContent>
  );
}
