import OwnerCard from '@/components/Details/OwnerCard';
import { TitlePriceOwnerDetail } from '@/components/Details/TitlePriceOwnerDetail';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  Activity,
  Bath,
  Bed,
  BedIcon,
  Cctv,
  CookingPot,
  HandPlatter,
  Home,
  Maximize,
  ShowerHead,
  SquareParkingIcon,
  Tv2,
  Utensils,
  WashingMachineIcon,
  Bell,
  BusFront,
  Car,
  CoffeeIcon,
  Droplet,
  GraduationCapIcon,
  Heart,
  HomeIcon,
  Hospital,
  Lock,
  School,
  Share2,
  ShoppingBagIcon,
  Snowflake,
  Trash2,
  UmbrellaIcon,
  UserIcon,
  UsersIcon,
  Waves,
  Zap,
  ViewIcon,
  Archive,
} from 'lucide-react';

function PotionTabContainer({ data }) {
  console.log(data);
  return (
    <div className='space-y-8'>
      <TitlePriceOwnerDetail data={data} />

      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8'>
        <Card className=''>
          <CardContent className='flex  items-center p-4'>
            <Home className='w-8 h-8 text-primary mr-2' />
            {/* <p className='text-sm text-center'>{data?.type}</p> */}
            <p className='text-sm text-center'>Apartment</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className='flex items-center p-4'>
            <Bed className='h-5 w-5 mr-2 text-primary' />
            <span>
              {data.Details.Beds} Bedroom
              {`${data.Details.Beds > 1 ? 's' : ''}`}
            </span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className='flex items-center p-4'>
            <Bath className='h-5 w-5 mr-2 text-primary' />
            <span>
              {data.Details.Baths} Bathroom
              {`${data.Details.Baths > 1 ? 's' : ''}`}
            </span>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='flex items-center p-4'>
            <Maximize className='h-5 w-5 mr-2 text-primary' />
            <span>{data?.size} sq ft</span>
          </CardContent>
        </Card>
      </div>

      <OwnerCard />

      <Card className='border-none'>
        <CardHeader>
          <CardTitle>Apartment features</CardTitle>
        </CardHeader>

        <CardContent>
          {/* Todo: update this feature */}
          <ul className='grid grid-cols-2 md:grid-cols-4  content-center gap-4'>
            <li className='flex items-center gap-2'>
              <BedIcon className='w-6 h-6' />
              <h4>
                {data.Details.Beds} Bedroom
                {`${data.Details.Beds > 1 ? 's' : ''}`}
              </h4>
            </li>
            <li className='flex gap-2 items-center'>
              <ShowerHead className='w-6 h-6' />
              <h4>
                {data.Details.Baths} Bathroom
                {`${data.Details.Baths > 1 ? 's' : ''}`}
              </h4>
            </li>
            <li className='flex gap-2 items-center'>
              <Utensils className='w-6 h-6' />
              <h4>Dining</h4>
            </li>
            <li className='flex gap-2 items-center'>
              <Tv2 className='w-6 h-6' />
              <h4>Sitting room</h4>
            </li>
            <li className='flex gap-2 items-center'>
              <CookingPot className='w-6 h-6' />
              <h4>Kitchen</h4>
            </li>
            <li className='flex gap-2 items-center'>
              <Archive className='w-6 h-6' />
              <h4>Store</h4>
            </li>
          </ul>
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
                  {item.includes('Transportation') && <BusFront />}
                  {item === 'Hospital' && <Hospital />}
                  {item === 'Shop' && <ShoppingBagIcon />}
                  {item.includes('Beach') && <UmbrellaIcon />}
                  {item === 'School' && <School />}
                  {item === 'Restaurants' && <CoffeeIcon />}
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
              {data?.suitable_for?.map((item: string, i: number) => (
                <li key={i} className='flex items-center gap-2'>
                  {item === 'Couple' && <Heart />}
                  {item === 'Students' && <GraduationCapIcon />}
                  {item === 'Single person' && <UserIcon />}
                  {item === 'Large family' && <HomeIcon />}
                  {item.includes('Small family') && <UsersIcon />}
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
            <li className='flex items-center gap-2'>
              <WashingMachineIcon className='w-6 h-6' />
              Washer/Dryer
            </li>
            <li className='flex gap-2 items-center'>
              <Droplet className='w-6 h-6' />
              <h4>Water</h4>
            </li>
            <li className='flex gap-2 items-center'>
              <Zap className='w-6 h-6' />
              <h4>Eletricity</h4>
            </li>
            {/* <li className='flex gap-2 items-center'>
              <CookingPot className='w-6 h-6' />
              <h4>Gate</h4>
            </li> */}

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

            <li className='flex gap-2 items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                fill='#000000'
                viewBox='0 0 256 256'>
                <path d='M176,104a32,32,0,1,0-32-32A32,32,0,0,0,176,104Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,176,56Zm46.16,129.24a8,8,0,0,1-1,11.26c-17.36,14.39-32.86,19.5-47,19.5-18.58,0-34.82-8.82-49.93-17-25.35-13.76-47.24-25.65-79.07.74a8,8,0,1,1-10.22-12.31c40.17-33.29,70.32-16.93,96.93-2.49,25.35,13.77,47.24,25.65,79.07-.74A8,8,0,0,1,222.16,185.24ZM34.89,147.42a8,8,0,1,0,10.22,12.31c31.83-26.38,53.72-14.5,79.07-.74,15.11,8.2,31.35,17,49.93,17,14.14,0,29.64-5.11,47-19.5a8,8,0,1,0-10.22-12.31,75.79,75.79,0,0,1-19.28,12.06l-53.84-53.82A103.34,103.34,0,0,0,64.24,72H40a8,8,0,0,0,0,16H64.24a87.66,87.66,0,0,1,41.88,10.56L76.49,128.17C63.82,129.35,50.07,134.84,34.89,147.42Zm91.57-33.67,46.13,46.12c-14-.43-26.88-7.39-40.77-14.93-10.75-5.84-22.09-12-34.42-15.05l22.26-22.26A87.14,87.14,0,0,1,126.46,113.75Z'></path>
              </svg>
              <h4>Pool</h4>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className='mb-6 border-none'>
        <CardHeader>
          <CardTitle className={cn('tracking-wider')}>Description</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className='leading-6'>
            dolor sit amet consectetur, adipisicing elit. Dolore animi et
            consequatur corporis saepe id deserunt provident non enim? Corrupti,
            magni beatae vitae eveniet quo blanditiis sed, minima consequuntur
            praesentium dolores esse odit similique eius ab. Corporis, iusto.
            Asperiores laudantium veniam natus cum unde modi non ab sapiente.
            Commodi natus atque dolores quasi totam amet accusantium labore esse
            omnis nihil nemo, eos quaerat voluptate quidem ad magni eveniet
            incidunt dolor magnam ullam quod doloremque rem? Aliquam id
            voluptatem nobis praesentium? Voluptas repellendus magnam autem
            similique. Quia inventore sed nihil adipisci nostrum reiciendis
            architecto, voluptate aperiam deleniti odio, laudantium rem omnis.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}

export default PotionTabContainer;
