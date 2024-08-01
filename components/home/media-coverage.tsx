import Image from 'next/image';
import Link from 'next/link';

interface MediaMention {
  name: string;
  logo: string;
  url: string;
}

const mediaMentions: MediaMention[] = [
  {
    name: 'The New York Times',
    logo: '/media-logos/nyt-logo.png',
    url: 'https://www.nytimes.com/article-about-emotipaw',
  },
  {
    name: 'BBC',
    logo: '/media-logos/bbc-logo.png',
    url: 'https://www.bbc.com/news/article-about-emotipaw',
  },
  {
    name: 'Wired',
    logo: '/media-logos/wired-logo.png',
    url: 'https://www.wired.com/article-about-emotipaw',
  },
  {
    name: 'TechCrunch',
    logo: '/media-logos/techcrunch-logo.png',
    url: 'https://techcrunch.com/article-about-emotipaw',
  },
  {
    name: 'The Guardian',
    logo: '/media-logos/guardian-logo.png',
    url: 'https://www.theguardian.com/technology/article-about-emotipaw',
  },
];

export default function MediaCoverage() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-primary-600 font-display">
          As Featured In
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {mediaMentions.map((mention) => (
            <Link
              key={mention.name}
              href={mention.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative w-40 h-20 grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={mention.logo}
                  alt={`${mention.name} logo`}
                  width={160}
                  height={80}
                  className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
