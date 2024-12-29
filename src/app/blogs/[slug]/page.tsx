/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { groq } from 'next-sanity';
import { sanityFetch } from '@/sanity/lib/live';
import { urlFor } from '@/sanity/lib/image';
import CustomPortableText from '@/components/shared/CustomPortableText';

const fetchPostBySlug = groq`*[_type == "post" && slug.current == $slug][0]{
  ...,
  "author": author->name,
  categories[]->{
    title,
    _id
  }
}`;

// Add this to the same file, before the BlogPage component
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: post } = await sanityFetch({
    query: fetchPostBySlug,
    params: { slug },
  });

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The post you are looking for does not exist.',
    };
  }

  return {
    title: post.title,
    description: post.excerpt ? post.excerpt[0]?.children[0]?.text : undefined,
    openGraph: post.mainImage
      ? {
          images: [{ url: urlFor(post.mainImage).url() }],
        }
      : undefined,
  };
}

const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const { data: post } = await sanityFetch({
    query: fetchPostBySlug,
    params: { slug },
  });

  if (!post) {
    redirect('/blogs');
  }

  return (
    <section>
      <main className='min-h-screen max-w-5xl mx-auto px-5 py-7 font-sans'>
        <div className='flex items-center gap-3'>
          {post.categories.map((category: any) => (
            <p
              key={category._id}
              className='text-sm text-white rounded-md bg-[#4B6BFB] w-fit mb-5 px-3 py-[6px]'
            >
              {category?.title}
            </p>
          ))}
        </div>
        <h1 className='font-semibold md:text-4xl text-3xl text-[#181A2A] mb-5'>
          {post?.title}
        </h1>
        <div className='flex items-center gap-6 text-sm text-[#696A75] mb-5'>
          <p>{post?.author}</p>
          <p>
            {new Date(post?.publishedAt || '').toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
        <Image
          src={urlFor(post?.mainImage || {})?.url() ?? ''}
          alt={post.title ?? ''}
          width={1000}
          height={1000}
          className='w-full h-auto max-h-[400px] object-cover object-top rounded-xl mb-5'
        />
        <div className='prose max-w-none'>
          <CustomPortableText content={post?.body} />
        </div>
      </main>
      <div className='max-w-7xl mx-auto px-5 my-16'>
        <p className='md:text-2xl text-xl py-5 text-[#1D2939]'>
          More resources like this:
        </p>
      </div>
      {/* resources */}
      {/* <Resources /> */}
    </section>
  );
};

export default BlogPage;
