import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aiccelerate - Accelerating Crypto x AI',
  description: 'A collective of AI investors, researchers and developers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@400;500;600;700&family=Prata&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}