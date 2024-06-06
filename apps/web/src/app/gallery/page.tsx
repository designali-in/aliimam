import type { Metadata, ResolvingMetadata } from 'next';

import { GalleryFilteredPosts } from '@/components/mdx/filtered-posts';
import PageTitle from '@/components/mdx/page-title';
import site from '@/config/site';
import { getAllGalleryPosts } from '@/lib/mdx';

export const runtime = 'edge';
const title = 'Gallery - Ali Imam';
const description =
  'My personal website and blog where I share my thoughts on various topics including tutorials, notes, and personal experiences. As a full-stack developer from Hong Kong, I started learning web development as a hobby in December 2023. I use Next.js for building websites, GitHub for code hosting, and Vercel for deployment. Explore my site to learn more about my Journey and discover some of the web development resources that have inspired me.';

export const generateMetadata = async (
  _: GalleryPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {};

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}/Gallery`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${site.url}/Gallery`,
      title,
      description
    }
  };
};

type GalleryPageProps = {
  params: Record<string, never>;
  searchParams: Record<string, never>;
};


const GalleryPage = () => {
  const posts = getAllGalleryPosts();

  return (
    <div className="mx-auto mt-40 max-w-5xl mb-40 px-6">
      <PageTitle
        title="Where Every Image Unveils a Story!"
        description={`I started uploading Gallery in December 2023, mainly about graphic Design and
        sharing knowledge. I have uploaded a total of ${posts.length} Gallery on
        my Gallery. All freely available for both your commercial and personal projects. 
        You can search for Gallery by title in the search box below.`}
      />
      <GalleryFilteredPosts posts={posts} />
    </div>
  );
};

export default GalleryPage;
