import type { Metadata } from 'next';
import './globals.css';

import { Footer } from '../components/footer';

export const metadata: Metadata = {
  title: 'Tayte Stokes',
  description: 'Personal website for Tayte Stokes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen text-zinc-900">
        {children}
        <Footer />
      </body>
    </html>
  );
}
