import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import KProvider from "./components/common/KProvider";
import CommandBarInvokar from "./components/common/CommandBarInvokar";
import LayoutWrapper from "./components/common/LayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Arpit Maurya | Software Developer",
    template: "%s | Arpit Maurya",
  },
  description: "Arpit Maurya is a passionate Software Developer and Web Engineer from India, specializing in building modern web applications with React, Next.js, and JavaScript. Explore projects, blogs, and achievements.",
  openGraph: {
    title: "Arpit Maurya",
    description: "A passionate Software Developer from India.",
    siteName: "Arpit Maurya",
    url: "https://arpitkm.xyz",
    type: "website",
    images: [
      {
        url: "/pfp.jpeg",
        width: 800,
        height: 600,
        alt: "Arpit Maurya",
      },
    ],
    profile: {
      firstName: "Arpit",
      lastName: "Maurya",
      username: "Arpit Maurya",
      gender: "male",
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@arpitkm15",
    title: "Arpit Maurya",
    description: "A passionate Software Developer from India.",
    images: "/pfp.jpeg",
  },
  instagram: {
    url: "https://www.instagram.com/arpitt_mauryaa",
  },
  robots: "index,follow",
  canonical: "https://arpitkm.xyz",
  keywords:
    "Arpit Maurya, Software Developer, Web Developer, Programmer, JavaScript, React, Next.js, Portfolio, India, Frontend Developer, Full Stack Developer, arpitkm, arpitkm.xyz, arpit maurya portfolio, arpit maurya developer, arpit maurya github, arpit maurya linkedin, arpit maurya projects, arpit maurya blog",
  author: "Arpit Maurya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Enhanced SEO: Structured Data for Google Knowledge Panel */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Arpit Maurya",
          "url": "https://arpitkm.xyz",
          "image": "https://arpitkm.xyz/pfp.jpeg",
          "sameAs": [
            "https://github.com/arpitkm15",
            "https://www.linkedin.com/in/arpitkm15/",
            "https://twitter.com/arpitkm15",
            "https://www.instagram.com/arpitt_mauryaa"
          ],
          "jobTitle": "Software Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance / Open Source"
          },
          "description": "Arpit Maurya is a passionate Software Developer and Web Engineer from India, specializing in React, Next.js, and modern web technologies."
        }) }} />
        <link
          rel="icon"
          type="image/x-icon"
          href="./icon.png"
          sizes="320x320"
        />
        <meta name="description" content={metadata.description} />
        <meta name="robots" content={metadata.robots} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height}
        />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <link rel="canonical" href={metadata.canonical} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Umami Analytics */}
        <script
          defer
          src="https://analytics.umami.is/script.js"
          data-website-id="58bd2a1c-b5e1-4842-b56b-9d1054f374c8"
        />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <KProvider>
          <Providers>
            <LayoutWrapper>{children}</LayoutWrapper>
          </Providers>
          <CommandBarInvokar />
        </KProvider>
      </body>
    </html>
  );
}
