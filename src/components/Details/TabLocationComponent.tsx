import { TabsContent } from '../ui/tabs';

export function TabLocationComponent({ location, category }) {
  return (
    <TabsContent value='location'>
      <div className='bg-gray-100 dark:bg-gray-800 rounded-lg p-6 md:p-8 lg:p-10'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>
          Visit Your new {category}
        </h2>
        <p className='text-gray-500 dark:text-gray-400 mb-6'>
          {category} is located at:
        </p>
        <address className='text-lg md:text-xl lg:text-2xl font-medium'>
          {location?.street}, {location?.city}
        </address>
      </div>
    </TabsContent>
  );
}
