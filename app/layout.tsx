import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header, Footer } from '@/app/components';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'HSBRIGDE - 選べる。届く。安心する。',
    template: '%s | HSBRIGDE',
  },
  description:
    '送料無料・返品保証・安心の決済で、厳選した商品をお届けします。通販・EC、店舗販売、法人営業、物販・リセールまで対応。会員特典やお得な情報も随時お届け。',
  keywords: [
    '通販',
    'EC',
    'オンラインショップ',
    '送料無料',
    '返品保証',
    '物販',
    'リセール',
    '法人営業',
    '店舗販売',
    '配送',
    'HSBRIGDE',
  ],
  authors: [{ name: 'HSBRIGDE Inc.' }],
  creator: 'HSBRIGDE Inc.',
  publisher: 'HSBRIGDE Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: '/',
    siteName: 'HSBRIGDE',
    title: 'HSBRIGDE - 選べる。届く。安心する。',
    description:
      '送料無料・返品保証・安心の決済で、厳選した商品をお届けします。通販・EC、店舗販売、法人営業、物販・リセールまで対応。',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HSBRIGDE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HSBRIGDE - 選べる。届く。安心する。',
    description:
      '送料無料・返品保証・安心の決済で、厳選した商品をお届けします。',
    images: ['/og-image.jpg'],
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
  verification: {
    // Google Search Console verification code (추가 필요시)
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HSBRIGDE株式会社',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      '送料無料・返品保証・安心の決済で、厳選した商品をお届けします。通販・EC、店舗販売、法人営業、物販・リセールまで対応。',
    address: {
      '@type': 'PostalAddress',
      addressLocality: '新宿区',
      addressRegion: '東京都',
      addressCountry: 'JP',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+81-',
      contactType: 'customer service',
      email: 'info@hsbridgeinc.com',
      availableLanguage: ['Japanese'],
    },
    sameAs: [
      // SNS 링크가 있다면 추가
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HSBRIGDE',
    url: siteUrl,
    description:
      '送料無料・返品保証・安心の決済で、厳選した商品をお届けします。',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
