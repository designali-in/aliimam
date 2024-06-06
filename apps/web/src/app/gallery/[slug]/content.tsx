import { type GalleryPost } from 'contentlayer/generated';

import Mdx from '@/components/mdx/layers';

type ContentProps = {
  post: GalleryPost;
  slug: string;
};

const Content = (props: ContentProps) => {
  const { post } = props;

  return (
    <div className="flex flex-col mt-8 justify-between lg:flex-row">
      <article className="w-full">
        <Mdx code={post.body.code} />
      </article>
    </div>
  );
};

export default Content;
