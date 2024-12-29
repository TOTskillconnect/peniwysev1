import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lastPublishedAt = searchParams.get('lastPublishedAt');
  const lastId = searchParams.get('lastId');
  // const category = searchParams.get('category') || 'all';

  const query = groq`*[_type == "post" && (
    publishedAt < $lastPublishedAt || 
    (publishedAt == $lastPublishedAt && _id < $lastId)
  )] | order(publishedAt desc, _id desc) [0...6]{
    ...,
    "author": author->name,
    categories[]->{
      title,
      _id
    }
  }`;

  const posts = await client.fetch(query, {
    lastPublishedAt,
    lastId,
  });

  return NextResponse.json({ posts });
}
