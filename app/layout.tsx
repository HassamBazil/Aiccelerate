import './globals.css';
import type { Metadata } from 'next';
import { Prata, Space_Mono } from 'next/font/google';
import localFont from 'next/font/local';

const prata = Prata({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-prata',
});

const protoMono = localFont({
  src: '../public/fonts/ProtoMono-SemiBold.ttf',
  variable: '--font-proto-mono'
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
      <body className={`${prata.variable} ${protoMono.variable} ...other classes`}>
        {children}
        <script type="module" dangerouslySetInnerHTML={{
          __html: `
            import { animate as motionAnimate, scroll } from 'https://cdn.skypack.dev/@motionone/dom'
            
            const updateParallaxAndStyles = () => {
              const titleContainers = document.querySelectorAll('.title-container');
              
              if (window.innerWidth >= 768) { // md breakpoint
                // Enable parallax
                document.querySelectorAll(".section-container").forEach((section) => {
                  const header = section.querySelector(".section-title")
                  scroll(motionAnimate(header, { y: [-150, 150] }, { ease: "linear" }), {
                    target: header,
                  })
                });
                
                // Add background gradient for larger screens
                titleContainers.forEach(container => {
                  container.style.background = 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0))';
                });
              } else {
                // Remove parallax and background effects for mobile
                titleContainers.forEach(container => {
                  container.style.background = 'none';
                });
              }
            }

            // Initial setup
            updateParallaxAndStyles();
            
            // Update on resize
            window.addEventListener('resize', updateParallaxAndStyles);
          `
        }} />
      </body>
    </html>
  );
}