"use client";

import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export function Grid2({ images }: { images: any }) {
  return (
    <>
      <PhotoProvider>
        <div className="grid md:grid-cols-2 gap-2">
          {images.map((image: any) => (
            <PhotoView src={image.secure_url}>
              <Image
                src={image.secure_url}
                alt={image.secure_url}
                width={600}
                height={600}
                className="rounded-xl hover:cursor-zoom-in hover:saturate-0"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </>
  );
}

export function Grid3({ images }: { images: any }) {
  return (
    <>
      <PhotoProvider>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {images.map((image: any) => (
            <PhotoView src={image.secure_url}>
              <Image
                src={image.secure_url}
                alt={image.secure_url}
                width={500}
                height={500}
                className="rounded-xl hover:cursor-zoom-in hover:saturate-0"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </>
  );
}

export function Grid4({ images }: { images: any }) {
  return (
    <>
      <PhotoProvider>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {images.map((image: any) => (
            <PhotoView src={image.secure_url}>
              <Image
                src={image.secure_url}
                alt={image.secure_url}
                width={400}
                height={400}
                className="rounded-xl hover:cursor-zoom-in hover:saturate-0"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </>
  );
}

export function Grid5({ images }: { images: any }) {
  return (
    <>
      <PhotoProvider>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {images.map((image: any) => (
            <PhotoView src={image.secure_url}>
              <Image
                src={image.secure_url}
                alt={image.secure_url}
                width={200}
                height={200}
                className="rounded-xl hover:cursor-zoom-in hover:saturate-0"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </>
  );
}

export function Grid5BG({ images }: { images: any }) {
  return (
    <>
      <PhotoProvider>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {images.map((image: any) => (
            <PhotoView src={image.secure_url}>
              <Image
                src={image.secure_url}
                alt={image.secure_url}
                width={200}
                height={200}
                className="rounded-xl hover:cursor-zoom-in hover:saturate-0 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </>
  );
}

export function Grid6({ images }: { images: any }) {
  return (
    <>
      <PhotoProvider>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {images.map((image: any) => (
            <PhotoView src={image.secure_url}>
              <Image
                src={image.secure_url}
                alt={image.secure_url}
                width={200}
                height={200}
                className="rounded-xl hover:cursor-zoom-in hover:saturate-0"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </>
  );
}
