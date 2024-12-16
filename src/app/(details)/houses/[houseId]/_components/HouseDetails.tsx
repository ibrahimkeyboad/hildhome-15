import { TitlePriceOwnerDetail } from '@/components/Details/TitlePriceOwnerDetail';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import HouseRooms from './HouseRooms';
import { cn } from '@/lib/utils';
import {
  Bath,
  Bed,
  Bell,
  BusFront,
  Car,
  CoffeeIcon,
  Droplet,
  GraduationCapIcon,
  Heart,
  Home,
  HomeIcon,
  Hospital,
  Lock,
  Maximize,
  School,
  Share2,
  ShoppingBagIcon,
  Trees,
  ShoppingCart,
  Snowflake,
  Trash2,
  UmbrellaIcon,
  UserIcon,
  UsersIcon,
  Waves,
  Zap,
} from 'lucide-react';
import OwnerCard from '@/components/Details/OwnerCard';

function HouseDetails({ data }) {
  console.log(data);
  return (
    <div className='space-y-5'>
      <TitlePriceOwnerDetail data={data} />

      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8'>
        <Card className=''>
          <CardContent className='flex  items-center p-4'>
            <Home className='w-8 h-8 text-primary mr-2' />
            <p className='text-sm text-center'>{data?.type}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className='flex items-center p-4'>
            <Bed className='h-5 w-5 mr-2 text-primary' />
            <span>
              {data?.room} Bedroom{data?.room > 1 ? 's' : ''}
            </span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className='flex items-center p-4'>
            <Bath className='h-5 w-5 mr-2 text-primary' />
            <span>
              {data?.bath} Bathroom{data?.bath > 1 ? 's' : ''}
            </span>
          </CardContent>
        </Card>
        {/* <Card>
          <CardContent className='flex items-center p-4'>
            <Car className='h-5 w-5 mr-2 text-primary' />
            <span>2 Parking</span>
          </CardContent>
        </Card> */}
        <Card>
          <CardContent className='flex items-center p-4'>
            <Maximize className='h-5 w-5 mr-2 text-primary' />
            <span>{data?.size} sq ft</span>
          </CardContent>
        </Card>
      </div>

      <OwnerCard />

      <HouseRooms
        room={data.room}
        bath={data?.bath}
        type={data.type}
        rooms={data?.rooms}
      />
      <Card className='mb-6 border-none'>
        <CardHeader>
          <CardTitle className={cn('tracking-wider')}>Description</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className='text-base/7'>
            {data?.description}
          </CardDescription>
        </CardContent>
      </Card>

      <Card className='my-4 p-3 border-none'>
        <CardContent>
          <div className='flex flex-col space-y-4'>
            <h2 className={cn('text-2xl tracking-wider')}>Nearby</h2>
            <ul className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {data?.nearby?.map((item: string, i: number) => (
                <li key={i} className='flex items-center gap-2'>
                  {item === 'River' && <Waves />}
                  {item === 'Road' && <BusFront />}
                  {item.includes('Bus') && <BusFront />}
                  {item === 'Hospital' && <Hospital />}
                  {item === 'Park' && <Trees />}
                  {item === 'Lake' && <Waves />}
                  {item === 'Ocean' && <Waves />}
                  {item === 'Shop' && <ShoppingBagIcon />}
                  {item.includes('Mall') && <ShoppingCart />}
                  {item.includes('center') && <ShoppingCart />}
                  {item === 'Beach' && <UmbrellaIcon />}
                  {item === 'School' && <School />}
                  {item === 'Restaurant' && <CoffeeIcon />}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
      <Card className='my-4 p-3 border-none'>
        <CardContent>
          <div className='flex flex-col space-y-4'>
            <h2 className={cn('text-2xl tracking-wider')}>Suitable For</h2>
            <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
              {data?.suitableFor?.map((item: string, i: number) => (
                <li key={i} className='flex items-center gap-2'>
                  {item === 'Couple' && <Heart />}
                  {item.includes('Student') && <GraduationCapIcon />}
                  {item === 'Single person' && <UserIcon />}
                  {/* orgnization */}
                  {item === 'Large family' && <HomeIcon />}
                  {item.includes('Small family') && <UsersIcon />}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className='my-4 p-3 border-none'>
        <CardContent>
          <div className='flex flex-col space-y-4'>
            <h2 className={cn('text-2xl tracking-wider')}>Amenities</h2>
            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
              {data.amenities.map((item: string, i: number) => (
                <li key={i} className='flex items-center gap-2'>
                  {item.includes('Parking') && <Car />}
                  {item.includes('Water') && <Droplet />}
                  {item === 'Electricity' && <Zap />}
                  {item === 'Doorbell' && <Bell />}
                  {item === 'Security System' && <Lock />}
                  {item === 'Waste Disposal' && <Trash2 />}
                  {item === 'Air Conditioning' && <Snowflake />}
                  {item.includes('Swim') && (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      fill='#000000'
                      viewBox='0 0 256 256'>
                      <path d='M176,104a32,32,0,1,0-32-32A32,32,0,0,0,176,104Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,176,56Zm46.16,129.24a8,8,0,0,1-1,11.26c-17.36,14.39-32.86,19.5-47,19.5-18.58,0-34.82-8.82-49.93-17-25.35-13.76-47.24-25.65-79.07.74a8,8,0,1,1-10.22-12.31c40.17-33.29,70.32-16.93,96.93-2.49,25.35,13.77,47.24,25.65,79.07-.74A8,8,0,0,1,222.16,185.24ZM34.89,147.42a8,8,0,1,0,10.22,12.31c31.83-26.38,53.72-14.5,79.07-.74,15.11,8.2,31.35,17,49.93,17,14.14,0,29.64-5.11,47-19.5a8,8,0,1,0-10.22-12.31,75.79,75.79,0,0,1-19.28,12.06l-53.84-53.82A103.34,103.34,0,0,0,64.24,72H40a8,8,0,0,0,0,16H64.24a87.66,87.66,0,0,1,41.88,10.56L76.49,128.17C63.82,129.35,50.07,134.84,34.89,147.42Zm91.57-33.67,46.13,46.12c-14-.43-26.88-7.39-40.77-14.93-10.75-5.84-22.09-12-34.42-15.05l22.26-22.26A87.14,87.14,0,0,1,126.46,113.75Z'></path>
                    </svg>
                  )}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {data.additionalInformation && (
        <Card className='mb-6 border-none'>
          <CardHeader>
            <CardTitle className={cn('tracking-wider')}>
              Additional Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{data?.additionalInformation}</CardDescription>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default HouseDetails;
