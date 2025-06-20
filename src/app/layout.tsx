import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { name, contact } from '@/lib/data';

export const metadata: Metadata = {
  title: {
    default: `${name} | Full-Stack Developer`,
    template: `%s | ${name}`,
  },
  description: `Personal portfolio of ${name}, a Full-Stack Developer, showcasing projects, skills, and experience.`,
  keywords: ['Full-Stack Developer', 'Portfolio', 'React', 'Next.js', 'Java', 'Spring Boot', 'Web Development', name],
  authors: [{ name: name }],
  openGraph: {
    title: `${name} | Full-Stack Developer`,
    description: `Personal portfolio of ${name}, a Full-Stack Developer.`,
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com', // Replace with actual domain
    siteName: name,
    // images: [ // Add a placeholder or actual image for social sharing
    //   {
    //     url: 'https://yourdomain.com/og-image.png',
    //     width: 1200,
    //     height: 630,
    //     alt: `${name} - Full-Stack Developer Portfolio`,
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${name} | Full-Stack Developer`,
    description: `Personal portfolio of ${name}, a Full-Stack Developer.`,
    // site: '@yourtwitterhandle', // Replace with actual Twitter handle
    // creator: '@yourtwitterhandle', // Replace with actual Twitter handle
    // images: ['https://yourdomain.com/twitter-image.png'], // Replace with actual image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }, // New dark theme color
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
 attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
