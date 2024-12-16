import {
  Users,
  Clock,
  ArrowRight,
  ViewIcon,
  Droplet,
  Zap,
  Cctv,
  Activity,
  Snowflake,
  SquareParkingIcon,
  Waves,
  BusFront,
  Hospital,
  ShoppingBagIcon,
  UmbrellaIcon,
  CoffeeIcon,
  School,
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { TitlePriceOwnerDetail } from '@/components/Details/TitlePriceOwnerDetail';
import { cn } from '@/lib/utils';
import CoverImageDetail from '@/components/CoverImageDetail';

function BusinessSpacePotion({ potion }) {
  return (
    <section className='space-y-6'>
      <CoverImageDetail data={potion} />

      <TitlePriceOwnerDetail data={potion} />

      <div className='grid grid-cols-2 gap-4'>
        <Card className='border-none'>
          <CardContent className='flex items-center p-4'>
            <Users className='w-5 h-5 mr-2 text-primary' />
            <p className='text-sm md:text-base'>Capacity: 50 people</p>
          </CardContent>
        </Card>
        <Card className='border-none'>
          <CardContent className='flex items-center p-4'>
            <Clock className='w-5 h-5 mr-2 text-primary' />
            <p className='text-sm md:text-base'>24/7 Access</p>
          </CardContent>
        </Card>
      </div>

      <Card className='border-none'>
        <CardHeader>
          <CardTitle>Description</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-muted-foreground leading-7'>
            Experience the epitome of modern business accommodation in our
            Downtown Office Suite. This newly renovated space offers a perfect
            blend of functionality and style, designed to inspire productivity
            and impress clients. With floor-to-ceiling windows providing
            abundant natural light and stunning city views, your team will
            thrive in this contemporary work environment. The open floor plan
            allows for flexible arrangements, whether you need collaborative
            spaces or private work areas. Located in the heart of the business
            district, you&lsquo;ll be steps away from major transit hubs,
            restaurants, and networking opportunities. Elevate your business
            presence with this premium office space.
          </p>
        </CardContent>
      </Card>

      <Card className='my-4 p-3 border-none'>
        <CardContent>
          <div className='flex flex-col space-y-4'>
            <h2 className={cn('text-2xl tracking-wider')}>Nearby</h2>
            <ul className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {potion?.nearby?.map((item: string, i: number) => (
                <li key={i} className='flex items-center gap-2'>
                  {item === 'River' && <Waves />}
                  {item === 'Road' && <BusFront />}
                  {item.includes('Bus') && <BusFront />}
                  {item.includes('Transportation') && <BusFront />}
                  {item === 'Hospital' && <Hospital />}
                  {item.includes('Shop') && <ShoppingBagIcon />}
                  {item.includes('Beach') && <UmbrellaIcon />}
                  {item === 'School' && <School />}
                  {item.includes('Restaurant') && <CoffeeIcon />}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className='border-none'>
        <CardHeader>
          <CardTitle>Amenities</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <li className='flex items-center gap-2'>
              <SquareParkingIcon className='w-6 h-6' />
              Parking
            </li>
            <li className='flex items-center gap-2'>
              <Snowflake className='w-6 h-6' />
              Air conditioning and heating
            </li>
            <li className='flex items-center gap-2'>
              <Activity className='w-6 h-6' />
              Eletric Fence
            </li>
            <li className='flex items-center gap-2'>
              <Cctv className='w-6 h-6' />
              CCTV cameras
            </li>

            <li className='flex gap-2 items-center'>
              <Droplet className='w-6 h-6' />
              <h4>Water</h4>
            </li>
            <li className='flex gap-2 items-center'>
              <Zap className='w-6 h-6' />
              <h4>Eletricity</h4>
            </li>

            <li className='flex items-center gap-2'>
              <ViewIcon className='w-6 h-6' />
              Balcony
            </li>

            <li className='flex items-center gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                fill='#000000'
                viewBox='0 0 256 256'>
                <path d='M248,56a8,8,0,0,1-8,8H192v40a8,8,0,0,1-8,8H136v40a8,8,0,0,1-8,8H80v40a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H64V152a8,8,0,0,1,8-8h48V104a8,8,0,0,1,8-8h48V56a8,8,0,0,1,8-8h56A8,8,0,0,1,248,56Z'></path>
              </svg>
              Stairs
            </li>

            <li className='flex items-center gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                fill='#000000'
                viewBox='0 0 256 256'>
                <path d='M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-32,80v96H136V112Zm-56,96H80V112h40Zm88,0H192V104a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V208H48V48H208V208ZM152,72a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,72Z'></path>
              </svg>
              Elevator
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className='border-none mb-3'>
        <CardContent className='p-6'>
          <h2 className='text-2xl font-semibold mb-4'>Suitable For</h2>
          <div className='flex flex-wrap gap-2'>
            {potion.suitable_for?.map((item, index) => (
              <Badge key={index} variant='secondary'>
                {item}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Button className='w-full'>
        View Other Business Spaces
        <ArrowRight className='w-4 h-4 ml-2' />
      </Button>
    </section>
  );
}

export default BusinessSpacePotion;
