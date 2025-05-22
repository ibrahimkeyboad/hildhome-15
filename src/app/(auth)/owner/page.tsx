import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  Globe,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-react';

export default function OwnerPage() {
  const owner = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '+1 (555) 123-4567',
    website: 'https://janedoe.com',
    socialMedia: {
      twitter: 'https://twitter.com/janedoe',
      facebook: 'https://facebook.com/janedoe',
      instagram: 'https://instagram.com/janedoe',
      linkedin: 'https://linkedin.com/in/janedoe',
    },
    properties: [
      { id: 1, name: 'Sunset Villa', type: 'Residential', status: 'For Sale' },
      {
        id: 2,
        name: 'Downtown Office',
        type: 'Commercial',
        status: 'For Rent',
      },
      { id: 3, name: 'Beachfront Condo', type: 'Residential', status: 'Sold' },
      {
        id: 4,
        name: 'Industrial Warehouse',
        type: 'Industrial',
        status: 'For Lease',
      },
    ],
  };

  return (
    <div className='container mx-auto p-6 space-y-8'>
      <Card>
        <CardHeader className='flex flex-row items-center gap-4'>
          <Avatar className='w-24 h-24'>
            <AvatarImage
              src='/placeholder.svg?height=96&width=96'
              alt={owner.name}
            />
            <AvatarFallback>
              {owner.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className='text-3xl'>{owner.name}</CardTitle>
            <p className='text-muted-foreground'>Real Estate Professional</p>
          </div>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <div className='flex items-center gap-2'>
                <Mail className='w-4 h-4' />
                <span>{owner.email}</span>
              </div>
              <div className='flex items-center gap-2'>
                <Phone className='w-4 h-4' />
                <span>{owner.phone}</span>
              </div>
              <div className='flex items-center gap-2'>
                <Globe className='w-4 h-4' />
                <a
                  href={owner.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'>
                  {owner.website}
                </a>
              </div>
            </div>
            <div className='flex gap-2 justify-start md:justify-end'>
              <Button variant='outline' size='icon' asChild>
                <a
                  href={owner.socialMedia.twitter}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Twitter className='w-4 h-4' />
                  <span className='sr-only'>Twitter</span>
                </a>
              </Button>
              <Button variant='outline' size='icon' asChild>
                <a
                  href={owner.socialMedia.facebook}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Facebook className='w-4 h-4' />
                  <span className='sr-only'>Facebook</span>
                </a>
              </Button>
              <Button variant='outline' size='icon' asChild>
                <a
                  href={owner.socialMedia.instagram}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Instagram className='w-4 h-4' />
                  <span className='sr-only'>Instagram</span>
                </a>
              </Button>
              <Button variant='outline' size='icon' asChild>
                <a
                  href={owner.socialMedia.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Linkedin className='w-4 h-4' />
                  <span className='sr-only'>LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Properties</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {owner.properties.map((property) => (
              <Card key={property.id}>
                <CardHeader>
                  <CardTitle className='text-lg'>{property.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-muted-foreground'>
                    {property.type}
                  </p>
                  <Badge
                    variant={
                      property.status === 'Sold' ? 'secondary' : 'default'
                    }
                    className='mt-2'>
                    {property.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
