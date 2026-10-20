/**
 * Builds an Unsplash image URL. Next.js <Image> handles resizing and modern
 * formats, so we only request a high-quality source here.
 * To use your own photos, put them in /public/projects and use "/projects/name.jpg".
 */
export function unsplash(id: string, width = 2000) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`;
}

export const images = {
  hero: unsplash("1613545325278-f24b0cae1224", 2400),
  about: unsplash("1746439307632-cba0f8effbed", 1400),
  aboutDetail: unsplash("1482731215275-a1f151646268", 1200),
  cta: unsplash("1749571598439-d307cce8e870", 2400),
};
