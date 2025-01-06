'use client'

import MainLayout from '@/components/layout/MainLayout'
import ContentLayout from '@/components/layout/ContentLayout'
import Image from 'next/image'
import { Search, Calendar, User, Tag } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Carpet Cleaning: 7 Powerful Benefits for a Healthier Home',
    slug: 'carpet-cleaning-benefits',
    excerpt: 'Discover professional cleaning techniques that will transform your home...',
    image: '/images/blog/carpet-cleaning.webp',
    date: 'Dec 13, 2024',
    author: 'Sarah Johnson',
    category: 'Cleaning Tips',
    tags: ['cleaning tips', 'home maintenance', 'healthy living']
  },
  {
    id: 2,
    title: '5 Effective Ways to Eliminate Mold on Ceiling for a Healthier Home',
    slug: 'eliminate-mold-ceiling',
    excerpt: 'Learn effective methods to remove and prevent mold growth on your ceiling...',
    image: '/images/blog/mold-cleaning.png',
    date: 'Dec 10, 2024',
    author: 'Michael Brown',
    category: 'Cleaning Tips',
    tags: ['mold removal', 'ceiling cleaning', 'healthy home', 'DIY cleaning']
  },
  {
    id: 3,
    title: 'Explore Best 3 DIY Carpet Cleaner Solutions: Tips for a Spotless Home',
    slug: 'diy-carpet-cleaner-solutions',
    excerpt: 'Discover effective DIY solutions for maintaining clean carpets...',
    image: '/images/blog/diy-cleaning.png',
    date: 'Dec 6, 2024',
    author: 'Emily Parker',
    category: 'Cleaning Tips',
    tags: ['DIY cleaning', 'carpet care', 'stain removal', 'home maintenance']
  }
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Posts')

  // Filter posts based on search query and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = 
      selectedCategory === 'All Posts' || 
      post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  // Get unique categories from blog posts
  const categories = ['All Posts', ...new Set(blogPosts.map(post => post.category))]

  return (
    <MainLayout>
      <ContentLayout
        sidebar={
          <div className="space-y-8 pt-32">
            {/* Search */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search posts..."
                  className="w-full p-3 pr-10 border rounded-md"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-3 top-3 text-gray-400" size={20} />
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      className={`text-left w-full hover:text-[#1E3D8F] ${
                        selectedCategory === category
                          ? 'text-[#1E3D8F] font-medium'
                          : 'text-gray-600'
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <div className="flex space-x-3 group">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium group-hover:text-[#1E3D8F]">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        }
      >
        <div className="space-y-8 mt-32">
          <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
          
          {/* No results message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">No posts found matching your criteria.</p>
            </div>
          )}
          
          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  {/* Meta info - Hidden on mobile, visible on desktop */}
                  <div className="hidden md:flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag size={16} />
                      <span>Cleaning Tips</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-[#1E3D8F] hover:text-[#FFA500] transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentLayout>
    </MainLayout>
  )
} 