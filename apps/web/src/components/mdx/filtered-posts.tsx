'use client';

import React from 'react';

import { Input } from 'ai-uis';
import { Label } from 'ai-uis';
import { type BlogPostCore, type GalleryPostCore } from '@/types';

import PostCards from './post-cards';
import GalleryCards from './gallery-cards';
import { Icons } from 'ai-uis';

type FilteredBlogPostsProps = {
  posts: BlogPostCore[];
};

export const BlogFilteredPosts = (props: FilteredBlogPostsProps) => {
  const { posts } = props;
  const [searchValue, setSearchValue] = React.useState('');

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="relative mb-8">
        <Input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search Blogs"
          aria-label="Search Blogs"
          className="w-full pl-12"
          id="search"
        />
        <Label htmlFor="search">
          <Icons.search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2" />
        </Label>
      </div>
      {filteredPosts.length === 0 && (
        <div className="my-24 text-center text-xl">No blogs found</div>
      )}
      <PostCards posts={filteredPosts} />
    </>
  );
};

type FilteredGalleryPostsProps = {
  posts: GalleryPostCore[];
};


export const GalleryFilteredPosts = (props: FilteredGalleryPostsProps) => {
  const { posts} = props;
  const [searchValue, setSearchValue] = React.useState('');

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="relative mx-auto mb-8 max-w-5xl">
        <Input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search City"
          aria-label="Search City"
          className="w-full pl-12"
          id="search"
        />
        <Label htmlFor="search">
          <Icons.search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2" />
        </Label>
      </div>
      <div className="">
        {filteredPosts.length === 0 && (
          <div className="my-24 text-center text-xl">No City found</div>
        )}
      </div>
      <GalleryCards posts={filteredPosts}  />
    </>
  );
};

