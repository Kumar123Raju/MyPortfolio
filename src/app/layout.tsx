import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    default: 'Devfolio | Full-Stack Developer',
    template: '%s | Devfolio',
  },
  description: 'Personal portfolio of a Full-Stack Developer, showcasing projects, skills, and experience.',
  keywords: ['Full-Stack Developer', 'Portfolio', 'React', 'Next.js', 'Java', 'Spring Boot', 'Web Development'],
  authors: [{ name: 'Your Name' }], // Replace with actual name
  openGraph: {
    title: 'Devfolio | Full-Stack Developer',
    description: 'Personal portfolio of a Full-Stack Developer.',
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com', // Replace with actual domain
    siteName: 'Devfolio',
    // images: [ // Add a placeholder or actual image for social sharing
    //   {
    //     url: 'https://yourdomain.com/og-image.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Devfolio - Full-Stack Developer Portfolio',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devfolio | Full-Stack Developer',
    description: 'Personal portfolio of a Full-Stack Developer.',
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
    { media: '(prefers-color-scheme: light)', color: '#ffffff' }, // Example light theme color
    { media: '(prefers-color-scheme: dark)', color: '#22222A' }, // Dark gray
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
