import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import { blogs } from '@/app/data/data'
import { redirect } from 'next/navigation'
import Resources from '@/app/components/Resources'

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const slug = await params.slug
  const blog = blogs.find(blog => blog.slug === slug)

  if (!blog) {
    redirect('/blogs')
  }

  return (
    <section className='bg-primary'>
      <header className='max-w-7xl mx-auto px-5 pt-8 pb-0 lg:pb-6'>
        <Navbar darkMode />
      </header>
      <main className='min-h-screen max-w-5xl mx-auto px-5 py-7 font-sans'>
        <div className='flex items-center gap-3'>
        {
          blog.tags.map((tag, index) => (
            <p key={index} className='text-sm text-white rounded-md bg-[#4B6BFB] w-fit mb-5 px-3 py-[6px]'>{tag}</p>
          ))
        }
        </div>
        <h1 className='font-semibold md:text-4xl text-3xl text-[#181A2A] mb-5'>{blog.title}</h1>
        <div className='flex items-center gap-6 text-sm text-[#696A75] mb-5'>
          <p>{blog.author}</p>
          <p>{blog.date}</p>
        </div>
        <Image 
          src={blog.image} 
          alt={blog.title} 
          width={1000} 
          height={1000} 
          className='w-full h-auto max-h-[400px] object-cover object-top rounded-xl mb-5' 
        />
        <div className='prose max-w-none'>
          {blog.content}
        </div>
      </main>
        <div className='max-w-7xl mx-auto px-5'>
          <p className='md:text-2xl text-xl py-5 text-[#1D2939]'>More resources like this:</p>
        </div>
      {/* resources */}
      <Resources />
      <Footer darkMode />
    </section>
  )
}

export default BlogPage