import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import {
  CarIcon,
  CookingPotIcon,
  DoorOpen,
  Flower,
  HomeIcon,
  SofaIcon,
  StoreIcon,
  Trees,
  UtensilsIcon,
  WarehouseIcon,
} from 'lucide-react';

interface Props {
  room: number;
  bath: number;
  features: string[];
}

function HouseRooms({ bath, room, features }: Props) {
  return (
    <Card className='p-3 border-none'>
      <CardHeader>
        <CardTitle>House features</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Todo: update this feature */}
        <ul className='grid grid-cols-2 sm:grid-cols-3 content-center gap-x-4 gap-y-6'>
          <li className='space-y-1'>
            <DoorOpen strokeWidth={1} className='size-10 text-gray-900' />
            <h4 className='text-lg font-medium'>
              {room} Room{room > 1 ? 's' : ''}
            </h4>
          </li>

          {/* // <li className='space-y-1' key={room.title}>
                //   {room.title.includes('master') && (
                //     <BedDouble className='size-8' />
                //   )} */}

          <li className='space-y-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='40'
              fill='#000000'
              viewBox='0 0 256 256'>
              <path d='M120,64a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h16A8,8,0,0,1,120,64Zm52.32,133.14,3.52,24.6A16,16,0,0,1,160,240H96a16,16,0,0,1-15.84-18.26l3.52-24.6A96.09,96.09,0,0,1,32,112a8,8,0,0,1,8-8H56V40A16,16,0,0,1,72,24H184a16,16,0,0,1,16,16v64h16a8,8,0,0,1,8,8A96.09,96.09,0,0,1,172.32,197.14ZM72,104H184V40H72Zm85.07,99.5a96.15,96.15,0,0,1-58.14,0L96,224h64ZM207.6,120H48.4a80,80,0,0,0,159.2,0Z'></path>
            </svg>
            <h3 className='text-lg font-medium'>
              {bath}
              {bath > 1 ? ' Bathrooms' : ' Bathroom'}
            </h3>
          </li>

          {features?.map((feature: string, i: number) => (
            <li key={i} className='space-y-2'>
              {feature === 'Store' && (
                <>
                  <StoreIcon />
                </>
              )}
              {feature === 'Dining room' && (
                <>
                  <UtensilsIcon />
                </>
              )}
              {feature === 'Kitchen' && (
                <>
                  <CookingPotIcon />
                </>
              )}
              {feature === 'Basement' && (
                <>
                  <WarehouseIcon />
                </>
              )}
              {feature === 'Attic' && (
                <>
                  <HomeIcon />
                </>
              )}
              {feature === 'Garage' && (
                <>
                  <CarIcon />
                </>
              )}
              {feature === 'Yard' && (
                <>
                  <Trees />
                </>
              )}
              {feature === 'Porch' && (
                <>
                  <Flower />
                </>
              )}
              {feature === 'Livingroom' && (
                <>
                  <SofaIcon />
                </>
              )}
              <h3 className='text-lg font-medium capitalize'>{feature}</h3>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default HouseRooms;
