'use client'

import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import { Briefcase, MapPin, Clock, DollarSign, Search } from 'lucide-react'
import { useState } from 'react'

interface JobPosting {
  id: number
  title: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Casual'
  salary: string
  department: string
  description: string[]
  requirements: string[]
}

const jobPostings: JobPosting[] = [
  {
    id: 1,
    title: 'Professional Cleaner',
    location: 'Sydney, NSW',
    type: 'Full-time',
    salary: '$50,000 - $60,000',
    department: 'Operations',
    description: [
      'Perform cleaning duties in residential and commercial properties',
      'Follow cleaning protocols and safety guidelines',
      'Maintain cleaning equipment and supplies',
      'Report any issues or damages to the supervisor'
    ],
    requirements: [
      'Previous cleaning experience preferred',
      'Physical ability to perform cleaning tasks',
      'Reliable transportation',
      'Strong attention to detail'
    ]
  },
  {
    id: 2,
    title: 'Cleaning Team Leader',
    location: 'Melbourne, VIC',
    type: 'Full-time',
    salary: '$65,000 - $75,000',
    department: 'Management',
    description: [
      'Supervise and train cleaning staff',
      'Create and manage cleaning schedules',
      'Ensure quality standards are met',
      'Handle customer inquiries and feedback'
    ],
    requirements: [
      '3+ years of cleaning experience',
      'Previous leadership experience',
      'Strong communication skills',
      'Problem-solving abilities'
    ]
  },
  {
    id: 3,
    title: 'Professional Cleaner (Casual)',
    location: 'Melbourne, VIC',
    type: 'Casual',
    salary: '$30-35 per hour',
    department: 'Cleaner',
    description: [
      'Perform high-quality domestic cleaning services',
      'Follow cleaning checklists and maintain quality standards',
      'Communicate effectively with clients and team members',
      'Manage time efficiently between different cleaning assignments',
      'Handle cleaning equipment and supplies responsibly'
    ],
    requirements: [
      'Minimum 1 year experience in domestic cleaning',
      'Must have own vehicle and valid driver\'s license',
      'Current ABN (Australian Business Number)',
      'Excellent attention to detail and quality focus',
      'Strong communication and customer service skills',
      'Flexible availability including weekends',
      'Physical fitness to perform cleaning tasks',
      'Police check and working with children check',
      'Must be legally eligible to work in Australia'
    ]
  }
]

const departments = ['All', 'Operations', 'Cleaner', 'Management', 'Administration', 'Sales']
const jobTypes = ['All Types', 'Full-time', 'Part-time', 'Casual', 'Contract']

export default function CareerPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('All')
  const [selectedType, setSelectedType] = useState('All Types')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null)

  // Add filtered jobs logic
  const filteredJobs = jobPostings.filter(job => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.some(desc => desc.toLowerCase().includes(searchQuery.toLowerCase())) ||
      job.requirements.some(req => req.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment
    const matchesType = selectedType === 'All Types' || job.type === selectedType

    return matchesSearch && matchesDepartment && matchesType
  })

  return (
    <MainLayout>
      <div className="relative h-[300px] mt-32">
        <Image
          src="/images/career-hero.jpg"
          alt="Join Our Cleaning Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3D8F] to-transparent" />
        <div className="absolute inset-0 container mx-auto px-4 flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl">
              Build your career with Melbourne&apos;s leading cleaning service provider. We&apos;re always looking for dedicated professionals to join our growing team.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full p-3 pr-10 border rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-3 text-gray-400" size={20} />
            </div>
            <select
              className="w-full p-3 border rounded-lg"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            <select
              className="w-full p-3 border rounded-lg"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {jobTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Job Listings - Update to use filteredJobs */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className={`bg-white p-6 rounded-lg shadow-md cursor-pointer transition-all ${
                    selectedJob?.id === job.id ? 'ring-2 ring-[#1E3D8F]' : ''
                  }`}
                  onClick={() => setSelectedJob(job)}
                >
                  <h2 className="text-xl font-bold mb-4">{job.title}</h2>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin size={18} className="mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock size={18} className="mr-2" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Briefcase size={18} className="mr-2" />
                      {job.department}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSign size={18} className="mr-2" />
                      {job.salary}
                    </div>
                  </div>
                  <button className="text-[#1E3D8F] font-medium hover:underline">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Job Details */}
          <div className="lg:col-span-1">
            {selectedJob ? (
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
                <h2 className="text-2xl font-bold mb-6">{selectedJob.title}</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Job Description</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {selectedJob.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Requirements</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {selectedJob.requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href="https://form.jotform.com/243503684042048"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#1E3D8F] text-white py-3 rounded-md hover:bg-opacity-90 text-center block"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 p-6 rounded-lg text-center text-gray-500">
                Select a job to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 