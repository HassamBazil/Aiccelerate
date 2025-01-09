import './globals.css';
import type { Metadata } from 'next';
import { Prata } from 'next/font/google';

const prata = Prata({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-prata',
});

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
        <link rel="icon" href="/Logo.jpeg" sizes="any" />
      </head>
      <body className={`${prata.variable} ...other classes`}>
        {children}
        <script type="module" dangerouslySetInnerHTML={{
          __html: `
            import { animate, scroll } from 'https://cdn.skypack.dev/motion'
            
            document.querySelectorAll(".section-container").forEach((section) => {
              const header = section.querySelector(".section-title")
              scroll(animate(header, { y: [-100, 100] }, { ease: "linear" }), {
                target: header,
              })
            })
          `
        }} />
      </body>
    </html>
  );
}