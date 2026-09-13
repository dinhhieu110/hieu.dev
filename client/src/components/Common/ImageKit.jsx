import { Image as ImageKit } from '@imagekit/react';

const Image = ({ src, className, w, h, alt }) => {
  return (
    <ImageKit
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      src={src}
      className={className}
      loading='lazy'
      width={w}
      height={h}
      alt={alt}
      transformation={[
        {
          width: w,
          height: h
        }
      ]}
    />
  )
}

export default Image
