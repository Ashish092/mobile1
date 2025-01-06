'use client'

import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import { Calendar, User, Tag } from 'lucide-react'
import Link from 'next/link'
import { use } from 'react'
import SharePost from '@/components/blog/SharePost'
import RelatedPosts from '@/components/blog/RelatedPosts'

// Import blog post contents
import { carpetCleaningPost } from './content/carpet-cleaning'
import { moldRemovalPost } from './content/eliminate-mold-ceiling'
import { diyCarpetCleanerPost } from './content/diy-carpet-cleaner'

// First, let's define the Post interface
interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
}

// Create a map of all blog posts with proper typing
const blogPosts: Record<string, Post> = {
  'carpet-cleaning-benefits': carpetCleaningPost,
  'eliminate-mold-ceiling': moldRemovalPost,
  'diy-carpet-cleaner-solutions': diyCarpetCleanerPost
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  // Add type annotation for post
  const post: Post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-12 mt-32">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Post not found</h1>
            <Link 
              href="/blog" 
              className="text-[#1E3D8F] hover:text-[#FFA500] mt-4 inline-block"
            >
              Return to Blog
            </Link>
          </div>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <article className="container mx-auto px-4 py-12 mt-32">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-sm text-gray-500 gap-6">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Tag size={16} className="mr-2" />
                {post.category}
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Post */}
          <SharePost 
            title={post.title}
            url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`}
          />

          {/* Tags */}
          <div className="mt-8 pt-8 border-t">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          <RelatedPosts 
            currentPost={{
              ...post,
              excerpt: post.excerpt || "" // Provide a default value if excerpt is missing
            }}
            allPosts={Object.values(blogPosts).map(post => ({
              ...post,
              excerpt: post.excerpt || "" // Ensure all posts have excerpt
            }))}
          />
        </div>
      </article>
    </MainLayout>
  )
} 