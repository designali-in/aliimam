'use client';
import React from 'react';
import CldImage from './CldImage';
import { Icons } from 'ai-uis';
import ImageZoom from './image-zoom';
import Link from 'next/link';

import 'react-photo-view/dist/react-photo-view.css';

import { PhotoProvider, PhotoView } from 'react-photo-view';

export function AliImage({ images }: { images: { src: string; altText: string }[] }) {
  function toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      const element = document.querySelector('.PhotoView-Portal');
      if (element) {
        element.requestFullscreen();
      }
    }
  }
  return (
    <div className="w-full">
      <PhotoProvider
        maskOpacity={0.9}
        toolbarRender={({ onScale, scale }) => {
          return (
            <div className="flex items-center gap-4 px-1">
              <Link
                href={images as unknown as string}
                target="_blank"
                className="hover:opacity-80"
                download={true}
              >
                <div className="flex items-center gap-2">
                  <Icons.download
                    onClick={() => onScale(scale + 0.5)}
                    strokeWidth={1.5}
                    className="w-5 hover:opacity-80"
                  />
                  <p className="text-md">Free Download</p>
                </div>
              </Link>
              <Icons.zoomin
                onClick={() => onScale(scale + 0.5)}
                strokeWidth={1.5}
                className="w-5 hover:opacity-80"
              />
              <Icons.zoomout
                onClick={() => onScale(scale - 0.5)}
                strokeWidth={1.5}
                className="w-5 hover:opacity-80"
              />
              {document.fullscreenEnabled && (
                <Icons.maximize
                  strokeWidth={2}
                  className="w-5 hover:opacity-80"
                  onClick={toggleFullScreen}
                />
              )}
            </div>
          );
        }}
      >
        <PhotoView src={images as unknown as string} >
          <CldImage
            className="block h-[150px] md:h-[250px] w-full cursor-zoom-in rounded-lg object-cover object-center saturate-100 transition-all duration-100 hover:saturate-0"
            width={300}
            height={300}
            src={images}
            alt={images}
          />
        </PhotoView>
      </PhotoProvider>
    </div>
  );
}


export function ImamImage({ images }: { images: { src: string; altText: string }[] }) {
  function toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      const element = document.querySelector('.PhotoView-Portal');
      if (element) {
        element.requestFullscreen();
      }
    }
  }
  return (
    <div className="w-full">
      <PhotoProvider
        maskOpacity={0.9}
        toolbarRender={({ onScale, scale }) => {
          return (
            <div className="flex items-center gap-4 px-1">
              <Icons.zoomin
                onClick={() => onScale(scale + 0.5)}
                strokeWidth={1.5}
                className="w-5 hover:opacity-80"
              />
              <Icons.zoomout
                onClick={() => onScale(scale - 0.5)}
                strokeWidth={1.5}
                className="w-5 hover:opacity-80"
              />
              {document.fullscreenEnabled && (
                <Icons.maximize
                  strokeWidth={2}
                  className="w-5 hover:opacity-80"
                  onClick={toggleFullScreen}
                />
              )}
            </div>
          );
        }}
      >
        <PhotoView src={images as unknown as string}>
          <CldImage
            className="block object-cover object-top inset-0 h-full w-full cursor-zoom-in rounded-lg saturate-100 transition-all duration-100 hover:saturate-0"
            width={500}
            height={500}
            src={images}
            alt={images}
          />
        </PhotoView>
      </PhotoProvider>
    </div>
  );
}


export function OnlyImage({ images }: { images: { src: string; altText: string }[] }) {
  
  return (
    <div className="w-full">
      <CldImage
        className="block h-full w-full shadow-sm rounded-lg object-cover object-center saturate-100 transition-all duration-100 hover:saturate-0"
        width={520}
        height={480}
        src={images}
        alt={images}
      />
    </div>
  );
}

export function ZoomImage({ images }: { images: { src: string; altText: string }[] }) {
  
  return (
    <div className="w-full">
      <ImageZoom>
      <CldImage
        className="block rounded-lg object-cover object-center saturate-100 transition-all duration-100 hover:saturate-0"
        width={720}
        height={480}
        src={images}
        alt={images}
      />
      </ImageZoom>
    </div>
  );
}

export function ZoomImageBG({ images }: { images: { src: string; altText: string }[] }) {
  
  return (
    <div className="w-full">
      <ImageZoom>
      <CldImage
        className="block bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl object-cover object-center saturate-100 transition-all duration-100 hover:saturate-0"
        width={800}
        height={800}
        src={images}
        alt={images}
      />
      </ImageZoom>
    </div>
  );
}


