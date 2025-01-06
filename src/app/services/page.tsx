'use client'

import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Move In/Move Out Cleaning',
    slug: 'move-in-move-out-cleaning',
    description: 'Moving out? Our end-of-lease cleaning service ensures you leave the property in pristine condition. We handle everything from deep cleaning carpets to scrubbing kitchens and bathrooms.',
    price: 'Starts from: $275',
    image: '/images/Movein.png',
    isPopular: true
  },
  {
    title: 'Carpet Cleaning',
    slug: 'carpet-cleaning',
    description: 'Our carpet cleaning service uses deep-cleaning techniques to remove stains, dirt, and allergens, leaving your carpets looking fresh and new. Ideal for homes, offices, and commercial spaces.',
    price: 'Starts from: $35 - $55 (each)',
    image: '/images/carpet-cleaning.png'
  },
  {
    title: 'NDIS Cleaning',
    slug: 'ndis-cleaning',
    description: 'We offer specialized cleaning services under the NDIS (National Disability Insurance Scheme), ensuring your home remains clean, safe, and hygienic.',
    price: 'Hourly rate: $35 - $50 per hour',
    image: '/images/ndis-cleaning.jpg'
  },
  {
    title: 'End of Lease Cleaning',
    slug: 'end-of-lease',
    description: 'Our comprehensive end of lease cleaning service ensures you get your bond back. We follow real estate-approved checklists and provide a bond-back guarantee.',
    price: 'From $359',
    image: '/images/end-of-lease-cleaning.jpg'
  },
  {
    title: 'Deep Cleaning',
    slug: 'deep-cleaning',
    description: 'A thorough deep cleaning service that covers every corner of your home, including hard-to-reach areas and detailed cleaning of all surfaces.',
    price: 'From $299',
    image: '/images/deep-cleaning.jpg'
  },
  {
    title: 'Regular Cleaning',
    slug: 'regular-cleaning',
    description: 'Regular maintenance cleaning service to keep your home consistently clean and tidy. Available on weekly, fortnightly, or monthly basis.',
    price: 'From $35/hour',
    image: '/images/regular-cleaning.png'
  },
  {
    title: 'Commercial Cleaning',
    slug: 'commercial-cleaning',
    description: 'Professional cleaning solutions for offices, retail spaces, and commercial properties. Customized cleaning plans to suit your business needs.',
    price: 'Custom Quote',
    image: '/images/commercial-cleaning.jpg'
  },
  {
    title: 'Oven Cleaning',
    slug: 'oven-cleaning',
    description: 'Our oven cleaning service is perfect for households or businesses that want their ovens thoroughly cleaned. We remove grease, grime, and burnt-on food to restore your oven\'s cleanliness.',
    price: 'From $80',
    image: '/images/oven-cleaning.jpg'
  },
  {
    title: 'General Cleaning',
    slug: 'general-cleaning',
    description: 'Our comprehensive general cleaning service covers all aspects of home cleaning, from dusting and vacuuming to bathroom and kitchen cleaning, ensuring your space stays fresh and hygienic.',
    price: 'Hourly rate: $35 - $45',
    image: '/images/general-cleaning.jpg'
  },
  {
    title: 'After Renovation Cleaning',
    slug: 'after-renovation-cleaning',
    description: 'Our end-of-lease cleaning service ensures you leave the property in pristine condition. We handle everything from deep cleaning carpets to scrubbing kitchens and bathrooms.',
    price: 'Starts from: $275',
    image: '/images/after-renovation-cleaning.jpg',
    isPopular: true
  },
  {
    title: 'Office Cleaning',
    slug: 'office-cleaning',
    description: 'Our carpet cleaning service uses deep-cleaning techniques to remove stains, dirt, and allergens, leaving your carpets looking fresh and new. Ideal for homes, offices, and commercial spaces.',
    price: 'Starts from: $35 - $55 (each)',
    image: '/images/office-cleaning.jpg'
  },
  {
    title: 'Tile and Floor Cleaning',
    slug: 'tile-and-floor-cleaning',
    description: 'We offer specialized cleaning services under the NDIS (National Disability Insurance Scheme), ensuring your home remains clean, safe, and hygienic.',
    price: 'Hourly rate: $35 - $50 per hour',
    image: '/images/floor-cleaning.png'
  },
  {
    title: 'Upholstery Cleaning',
    slug: 'upholstery-cleaning',
    description: 'Our comprehensive end of lease cleaning service ensures you get your bond back. We follow real estate-approved checklists and provide a bond-back guarantee.',
    price: 'From $359',
    image: '/images/upholstery-cleaning.png'
  },
  {
    title: 'Window Cleaning',
    slug: 'window-cleaning',
    description: 'A thorough deep cleaning service that covers every corner of your home, including hard-to-reach areas and detailed cleaning of all surfaces.',
    price: 'From $299',
    image: '/images/window-cleaning.png'
  }
]

export default function ServicesPage() {
  return (
    <MainLayout>
      <div className="mt-32">
        {/* Hero Section */}
        <div className="relative py-20">
          {/* Background image and gradient overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/images/services-hero.jpg')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E3D8F]/90 via-[#1E3D8F]/70 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1px] bg-white/60"></div>
                <span className="text-sm uppercase tracking-wider text-white/80">OUR SERVICES</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Professionals cleaning<br />
                services for your homes<br />
                and offices
              </h1>
              <p className="text-lg text-white/90 mb-8 max-w-2xl">
                We are a professionals cleaning company and providing leading commercial and residential cleaning solutions in the Australia. When it comes to maintaining the cleanliness of your property, you deserve a service that stands out for its quality, reliability, and professionalism. Professional Cleaners Australia is dedicated to offering an exceptional cleaning experience with a focus on excellence in every job.
              </p>
              <Link 
                href="/get-quote"
                className="inline-flex items-center gap-2 bg-[#FFA500] text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-all text-lg font-medium"
              >
                REQUEST A QUOTE
                <span className="text-xl">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Title Section */}
        <div className="py-16 text-center">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-gray-300"></div>
              <span className="text-sm uppercase tracking-wider text-gray-600">OUR SERVICES</span>
              <div className="w-12 h-[1px] bg-gray-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3D8F]">
              We are providing all kind<br />
              of cleaning services
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {service.isPopular && (
                    <div className="bg-green-500 text-white text-center py-1 px-4 absolute top-4 left-4 rounded-full text-sm">
                      Popular
                    </div>
                  )}
                  <div className="relative h-64">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-[#1E3D8F]">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-gray-700 font-medium">
                        {service.price}
                      </span>
                      <Link 
                        href={`/services/${service.slug}`}
                        className="text-[#1E3D8F] hover:text-[#FFA500] transition-colors group flex items-center gap-2"
                      >
                        Learn More
                        <ArrowRight 
                          size={20} 
                          className="transform group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>
                    <Link
                      href="/book-now"
                      className="block w-full bg-[#1E3D8F] text-white text-center py-3 rounded-md hover:bg-opacity-90 transition-all"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
} 