import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { BedDouble, BedIcon, DoorOpen, Utensils } from 'lucide-react';
import { Tv } from 'lucide-react';

interface Props {
  room: number;
  bath: number;
  rooms: any;
  type: string;
}

function HouseRooms({ bath, room, rooms, type }: Props) {
  return (
    <Card className='p-3 border-none'>
      <CardHeader>
        <CardTitle>House features</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Todo: update this feature */}
        <ul className='grid grid-cols-3 content-center gap-4'>
          {type === 'Single room' && (
            <>
              <ul>
                <li className='space-y-1'>
                  <DoorOpen strokeWidth={1} className='size-10 text-gray-900' />
                  <h4 className='text-lg font-medium'>
                    {room} Room{room > 1 ? 's' : ''}
                  </h4>
                </li>
              </ul>
            </>
          )}

          {type === 'Double room' && (
            <>
              <ul>
                <li className='space-y-1'>
                  <DoorOpen strokeWidth={1} className='size-10 text-gray-900' />

                  <h4>
                    {room} Room{room > 1 ? 's' : ''}
                  </h4>
                </li>
              </ul>
            </>
          )}

          {type.includes('Self') ||
            (type.includes('self') &&
              rooms.map((room) => (
                <li className='space-y-1' key={room.title}>
                  {room.title.includes('master') && (
                    <BedDouble className='size-8' />
                  )}

                  {room.title === 'medium bedroom' && (
                    <BedIcon className='size-8' />
                  )}
                  {room.title === 'sitting room' && <Tv className='size-8' />}
                  {room.title === 'dinning room' && (
                    <Utensils className='size-8' />
                  )}

                  <h3 className='mb-2 font-medium capitalize'>
                    {room.amount
                      ? `${room.amount} ${room.title}${
                          room.amount > 1 ? 's' : ''
                        }`
                      : room.title}
                  </h3>
                </li>
              )))}
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
        </ul>
      </CardContent>

      {/* <CardContent>
            <h2 className='text-2xl font-semibold mb-3'>Bath & Toilet</h2>
            <ul className='text-sm text-gray-600'>
              <li>Toilet for shared with other tenants</li>
              <li>Bath for shared with other tenants</li>
              <li>Bath and Toilet are separete rooms</li>
            </ul>
          </CardContent> */}

      {type === 'self' && (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant='link'>More Details</Button>
          </DialogTrigger>
          <DialogContent className='max-w-xl py-3 px-6'>
            <DialogHeader>Rooms Information</DialogHeader>
            <ul className='grid gap-x-2 gap-y-8 grid-cols-2'>
              {rooms.map((room) => (
                <li className='space-y-2' key={room.title}>
                  {room.title.includes('master') && (
                    <BedDouble className='size-8' />
                  )}
                  {room.title === 'medium bedroom' && (
                    <BedIcon className='size-8' />
                  )}

                  {room.title === 'sitting room' && <Tv className='size-8' />}
                  {room.title === 'dinning room' && (
                    <Utensils className='size-8' />
                  )}

                  <h3 className='capitalize text-gray-900 font-bold'>
                    {room.amount
                      ? `${room.amount} ${room.title}${
                          room.amount > 1 ? 's' : ''
                        }`
                      : room.title}
                  </h3>
                  <ul className='pl-9 leading-6 font-light text-gray-700 text-sm list-disc'>
                    {room.attributtes?.map((attributte) => (
                      <li key={attributte}>{attributte}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </DialogContent>
        </Dialog>
      )}
    </Card>
  );
}

export default HouseRooms;
