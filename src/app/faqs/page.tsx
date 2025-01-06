'use client'

import MainLayout from '@/components/layout/MainLayout'
import { Search } from 'lucide-react'
import { useState } from 'react'

interface FAQ {
  id: number
  question: string
  answer: string
  category: string
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'What carpet cleaning services do you offer in Melbourne?',
    answer: 'Cleaning Professionals provides comprehensive carpet cleaning solutions including stain removal, deep carpet cleaning, and regular maintenance for both residential and commercial properties. Our team uses eco-friendly and effective cleaning methods tailored to preserve the quality of your carpets.',
    category: 'Services'
  },
  {
    id: 2,
    question: 'What types of office cleaning services do you offer?',
    answer: 'Our office cleaning services include daily janitorial duties, deep cleaning sessions, carpet and floor care, and customizable cleaning plans to suit the specific needs of your office environment, ensuring a clean, productive workspace.',
    category: 'Services'
  },
  {
    id: 3,
    question: 'What does your oven cleaning service include?',
    answer: 'Our oven cleaning service involves the removal of built-up grease and burnt food, thorough cleaning of the oven\'s interior and exterior, and a detailed inspection to ensure optimal functioning and hygiene.',
    category: 'Services'
  },
  {
    id: 4,
    question: 'What is included in your general house cleaning service?',
    answer: 'General house cleaning covers dusting, vacuuming, mopping, bathroom sanitation, kitchen cleaning, and tidying up common areas. We focus on high-traffic areas and touch points to maintain a clean and healthy home environment.',
    category: 'Services'
  },
  {
    id: 5,
    question: 'What types of commercial properties do you clean?',
    answer: 'We service a variety of commercial properties including offices, retail stores, restaurants, schools, and medical facilities. Our commercial cleaning is tailored to meet the unique standards and schedules of each property.',
    category: 'Services'
  },
  {
    id: 6,
    question: 'Do you provide cleaning for both residential and commercial renovations?',
    answer: 'Yes, we offer post-renovation cleaning services that include dust and debris removal, deep cleaning of all surfaces, and detailed attention to ensure the renovated space is spotlessly clean and ready for use.',
    category: 'Services'
  },
  {
    id: 7,
    question: 'Do you provide upholstery cleaning for commercial properties?',
    answer: 'Our upholstery cleaning services for commercial properties involve deep cleaning of chairs, sofas, and other fabric-covered furnishings to remove dirt, stains, and allergens, using techniques that extend the life of your upholstery.',
    category: 'Services'
  },
  {
    id: 8,
    question: 'How do I book a cleaning service with Cleaning Professionals?',
    answer: 'You can book our cleaning services by visiting our website, calling our office, or sending us an email. We offer flexible scheduling options to accommodate your specific time requirements.',
    category: 'Booking'
  },
  {
    id: 9,
    question: 'What cleaning products do you use?',
    answer: 'We use high-quality, environmentally friendly cleaning products that are effective yet safe for your family, pets, and the planet. We are committed to sustainable practices without compromising on cleanliness.',
    category: 'Products'
  },
  {
    id: 10,
    question: 'Are your cleaners insured and trained?',
    answer: 'All our cleaners are fully insured and undergo rigorous training to meet our high standards of service and professionalism. We ensure they are well-equipped to handle various cleaning tasks efficiently and effectively.',
    category: 'Safety'
  },
  {
    id: 11,
    question: 'What residential cleaning services do you offer?',
    answer: 'We provide a full range of residential cleaning services including regular house cleaning, spring cleaning, carpet cleaning, and window washing. We also offer special services like move-in/move-out cleaning.',
    category: 'Services'
  },
  {
    id: 12,
    question: 'Do you offer specialized cleaning for allergen reduction?',
    answer: 'Yes, our allergen reduction cleaning includes the use of HEPA filters and specialized cleaning products that reduce the presence of allergens such as pollen, pet dander, and dust mites.',
    category: 'Services'
  },
  {
    id: 13,
    question: 'Can you provide post-event cleaning services?',
    answer: 'Absolutely, we offer post-event cleaning services that include trash removal, surface cleaning, and deep cleaning options to ensure your venue is spotless after your event.',
    category: 'Services'
  },
  {
    id: 14,
    question: 'How is pricing determined for residential cleaning?',
    answer: 'Pricing for residential cleaning is determined based on the size of your home, the type of service requested, and the frequency of cleaning. We provide custom quotes to match your specific cleaning needs.',
    category: 'Pricing'
  },
  {
    id: 15,
    question: 'Do you offer discounts for first-time customers?',
    answer: 'Yes, we offer a discount for first-time customers as part of our commitment to providing value and building lasting customer relationships.',
    category: 'Pricing'
  },
  {
    id: 16,
    question: 'How far in advance do I need to book your services?',
    answer: 'We recommend booking at least a week in advance to ensure availability, but we can sometimes accommodate last-minute requests based on our scheduling.',
    category: 'Booking'
  },
  {
    id: 17,
    question: 'What happens if I need to cancel a booking?',
    answer: 'Cancellations can be made with at least 48 hours notice before the scheduled service without incurring any fees.',
    category: 'Booking'
  },
  {
    id: 18,
    question: 'What measures do you take to ensure client safety during cleaning?',
    answer: 'We conduct comprehensive background checks on all staff, use safe and tested cleaning products, and follow strict safety protocols to ensure client safety.',
    category: 'Safety'
  },
  {
    id: 19,
    question: 'How do you handle the use of chemicals in homes with children or pets?',
    answer: 'We use non-toxic and safe chemicals, especially in homes with children or pets, and ensure all areas are properly ventilated.',
    category: 'Safety'
  },
  {
    id: 20,
    question: 'What are the main ingredients in your cleaning solutions?',
    answer: 'Our cleaning solutions primarily contain natural ingredients like vinegar, baking soda, and essential oils, ensuring they are effective yet gentle on surfaces.',
    category: 'Products'
  }
]

const categories = ['All', 'Services', 'Booking', 'Products', 'Safety', 'Pricing']

export default function FAQsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 mt-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our cleaning services, booking process, and more.
          </p>
        </div>

        {/* Search and Categories */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full p-4 pr-12 border rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-4 top-4 text-gray-400" size={24} />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-[#1E3D8F] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-medium">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-200 ${
                      openFaq === faq.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openFaq === faq.id
                      ? 'max-h-[1000px] opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="p-4 bg-gray-50 border-t transform transition-transform duration-500 ease-out">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 