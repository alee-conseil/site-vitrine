import { readableDate } from '@/utils/functions';
import { Jost } from 'next/font/google';
import Script from 'next/script';
import { Graph } from 'schema-dts';
import BlogCard from '../../components/Blog/BlogCard';
import BlogPageTitle from '../../components/Blog/BlogPageTitle';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ReturnToTop from '../../components/ReturnToTop';
import { pageMetadata } from '../../content/general';
import { blogsData } from '../../data/blogsData';

const jostFont = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "JumpIT - Blogs",
  description: pageMetadata.description,
  metadataBase: new URL(pageMetadata.baseUrl),
  alternates: {
    canonical: '/blogs',
    languages: {
      'fr': '/blogs',
    },
  },
  icons: {
    icon: { url: '/icones.png', type: 'image/x-icon', sizes: '48x48' },
    shortcut: [
      {
        url: '/icones.png',
        sizes: '128x128'
      },
      {
        url: '/icones.png',
        sizes: '192x192'
      }],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/icones.png',
        sizes: '180x180'
      },
      {
        rel: 'apple-touch-icon',
        url: '/icones.png',
        sizes: '76x76'
      },
      {
        rel: 'apple-touch-icon',
        url: '/icones.png',
        sizes: '120x120'
      },
      {
        rel: 'apple-touch-icon',
        url: '/icones.png',
        sizes: '152x152'
      },
      {
        rel: 'apple-touch-icon',
        url: '/icones.png',
        sizes: '180x180'
      },
      {
        rel: 'icon',
        url: '/icones.png',
        type: 'image/x-icon',
        sizes: '16x16'
      },
      {
        rel: 'icon',
        url: '/icones.png',
        type: 'image/x-icon',
        sizes: '32x32'
      }
    ],
  },
  openGraph: {
    title: pageMetadata.title,
    description: pageMetadata.description,
    siteName: pageMetadata.siteName,
    url: 'https://www.aleeconseil.com',
    images: {
      url: '/icones.png',
      width: 48,
      height: 48,
    },
    locale: 'fr',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': 'large',
      'max-image-preview': 'large',
      'max-snippet': 1024,
    }
  },
  themeColor: "#644E9B",
  category: 'technology'
}

type Props = {}


export default function Blogs({ }: Props) {

  const graph: Graph = {
    '@context': 'https://schema.org',
    '@graph': blogsData.map((blog) => {
      const firstParagraph = blog.body.find((section) => section.type === "paragraph" || section.type === "header1" || section.type === "header2");
      return (
        {
          '@type': 'BlogPosting',
          '@id': 'https://www.aleeconseil.com/blogs/' + blog.id + "#",
          headline: blog.title,
          description: firstParagraph ? firstParagraph.text : "",
          dateCreated: readableDate(blog.date),
          articleBody: firstParagraph ? firstParagraph.text : "",
          articleSection: 'Automated Testing',
          author: {
            '@type': 'Person',
            name: blog.author.name,
            url: blog.author.contact,
            jobTitle: blog.author.job
          },
          publisher: {
            '@type': 'Organization',
            name: 'JumpIT',
            image: {
              '@type': 'ImageObject',
              url: '/icones.png'
            }
          },
          audience: {
            '@type': 'Audience',
            audienceType: blog.author.job
          },
          image: {
            '@type': 'ImageObject',
            url: '/icones.png'
          }
        }
      )
    })
  }

  return (
    <div className="flex flex-col justify-between items-center w-full h-full min-h-[100vh] bg-ac-gray">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      </head>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6L5ZVZDMVJ" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-6L5ZVZDMVJ');
        `}
      </Script>

      <ReturnToTop />
      <div className="flex flex-col justify-start items-center w-full h-full  bg-ac-gray">
        <Navbar />
        {/* Blogs Hero */}
        <div className="relative parallax-blogs flex justify-start items-center w-full py-36 px-12 sm:px-24">
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full z-20 bg-[#00000050]"></div>
          <h1 className={jostFont.className + " text-white font-bold text-4xl xs:text-5xl text-left z-30"}>JumpIT Blogs</h1>
        </div>
        <div className="rounded-t-xl flex flex-col justify-start items-center w-full bg-ac-gray gap-24 mb-24 -translate-y-5 z-30">
          <BlogPageTitle />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-6 sm:px-12 md:px-24 lg:px-36 xl:px-48">
            {blogsData.map(blog => {
              return (
                <BlogCard key={blog.id} id={blog.id} title={blog.title} body={blog.body} author={blog.author} />
              )
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}