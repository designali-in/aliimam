
export interface ImageProps {
  id: number;
  height: string;
  width: string;
  public_id: string;
  format: string;
  blurDataUrl?: string;
}

export interface SharedModalProps {
  index: number;
  images?: ImageProps[];
  src?: ImageProps[];
}

export interface AIImage {
  id: number;
  width: number;
  height: number;
  src: string;
  alt: string;
}


function forceDownload(blobUrl: string, filename: string) {
  let a: any = document.createElement('a')
  a.download = filename
  a.href = blobUrl
  document.body.appendChild(a)
  a.click()
  a.remove()
}




