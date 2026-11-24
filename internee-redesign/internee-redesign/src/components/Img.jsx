import { useState } from 'react';

// Image with a text fallback when the remote asset cannot load.
export default function Img({ src, alt, className, fallback }) {
  const [bad, setBad] = useState(false);
  if (bad) return <span className="imgfb">{fallback || alt}</span>;
  return <img src={src} alt={alt} className={className} loading="lazy" onError={() => setBad(true)} />;
}
